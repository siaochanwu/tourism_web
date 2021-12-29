<template>
    <div class="container mx-auto">
        <Nav />
        <div></div>
        <div class="flex flex-col md:flex-row-reverse">
            <img :src="image" class="w-10/12 mx-auto h-80 md:h-auto md:w-6/12 mt-10 rounded-3xl bg-no-repeat bg-center bg-cover">
            <div class="w-full md:w-6/12">
                <h1 class="mt-10 text-left mx-10 text-3xl font-bold">{{ showData.Name }}</h1>
                <div class="flex flex-col md:grid-cols-6 grid-cols-12">
                    <div class="flex justify-center">
                        <div class="col-start-2 col-end-4 mr-5 mt-5 ml-5 relative">
                            <div class="w-6 h-6 absolute top-10 -mt-10 rounded-full bg-green-500 shadow text-center">
                            </div>
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                            </div>
                            <div class="w-6 h-6 absolute bottom-0 mt-5 rounded-full bg-green-500 shadow text-center">
                            </div>
                        </div>
                        <div class="col-start-4 col-end-12 p-4 rounded-xl mt-5 mr-auto w-8/12 text-left">
                            <h3 v-if="store.state.selectType == '旅遊景點'" class="font-semibold md:text-2xl">景點資訊</h3>
                            <h3 v-else-if="store.state.selectType == '觀光活動'" class="font-semibold md:text-2xl">活動資訊</h3>
                            <h3 v-else-if="store.state.selectType == '美食品嘗'" class="font-semibold md:text-2xl">店家資訊</h3>
                            <h3 v-else class="font-semibold md:text-2xl">住宿資訊</h3>
                            <p v-if="store.state.selectType == '旅遊景點'" class="leading-tight text-justify w-full my-3"><i class="fas fa-car mr-3 text-2xl"></i>{{ showData.TravelInfo }}</p>
                            <p class="leading-tight text-justify w-full my-3"><i class="fas fa-phone-alt mr-3 text-2xl"></i>{{ showData.Phone }}</p>
                            <p v-if="store.state.selectType == '旅遊景點'" class="leading-tight text-justify w-full my-3"><i class="fas fa-clock mr-3 text-2xl"></i>{{ showData.OpenTime }}</p>
                            <p class="leading-tight text-justify w-full my-3"><i class="fas fa-map mr-3 text-2xl"></i>{{ showData.Address }}</p>
                            <h3 v-if="store.state.selectType == '旅遊景點'" class="font-semibold mb-0 md:text-2xl">景點介紹</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-10/12 mx-auto my-10 text-left">{{ showData.DescriptionDetail }}</div>

        <div class="mt-5">
            <div>
                <h1 class="font-mono text-3xl font-bold mt-8">附近景點</h1>
                <div class="flex flex-col md:flex-row md:justify-between">
                    <div
                        class="my-5 mx-auto w-10/12 md:w-3/12 h-28"
                        v-for="item in oneSpot.slice(0, 4)"
                        :key="item.ID"
                    >
                        <router-link :to="`/content/${item.ID}`">
                            <div
                                class="flex justify-center items-center w-8/12 md:w-10/12 mx-auto h-full relative bg-no-repeat bg-center bg-cover"
                                :style="{ backgroundImage: `url(${item.Picture.PictureUrl1})` }"
                            >
                            </div>
                                <p
                                    class="font-mono font-bold mt-2"
                                >{{ item.ScenicSpotName }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="font-mono text-3xl font-bold mt-8">附近美食</h1>
                <div class="flex flex-col md:flex-row md:justify-between">
                    <div
                        class="my-5 mx-auto w-10/12 md:w-3/12 h-28"
                        v-for="item in oneFood.slice(0, 4)"
                        :key="item.ID"
                    >
                        <router-link :to="`${item.RestaurantID}`">
                            <div
                                class="flex justify-center items-center w-8/12 md:w-10/12 mx-auto h-full relative bg-no-repeat bg-center bg-cover"
                                :style="{ backgroundImage: `url(${item.Picture.PictureUrl1})` }"
                            >
                            </div>
                                <p
                                    class="font-mono font-bold mt-2"
                                >{{ item.RestaurantName }}</p>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- <div>
                <h1 class="font-mono text-3xl font-bold mt-8">附近住宿</h1>
                <div class="flex flex-col md:flex-row md:justify-between">
                    <div
                        class="my-5 mx-auto w-10/12 md:w-3/12 h-28"
                        v-for="item in oneHotel.slice(0, 4)"
                        :key="item.ID"
                    >
                        <router-link :to="`/content/${item.ID}`">
                            <div
                                class="flex justify-center items-center w-8/12 md:w-10/12 mx-auto h-full relative bg-no-repeat bg-center bg-cover"
                                :style="{ backgroundImage: `url(${item.Picture.PictureUrl1})` }"
                            >
                            </div>
                                <p
                                    class="font-mono font-bold mt-2"
                                >{{ item.HotelName }}</p>
                        </router-link>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import Nav from './Nav.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

import fetchOneCountry from '../use/fetchOneCountry'

        interface thing {
            ID:string,
            Name:string,
            Picture:any,
            Address:string,
            OpenTime: string,
            DescriptionDetail: string
        }


        const route = useRoute()
        const store = useStore()
        const id = ref<any>(route.params.ID)
        const allSpotData = ref<thing[]>(store.state.allSpotData)
        const allFoodData = ref<thing[]>(store.state.allFoodData)
        const allHotelData = ref<thing[]>(store.state.allHotelData)
        const allActivityData = ref<thing[]>(store.state.allActivityData)
        const showData = ref<any>({})
        const image = ref('')

        const { oneSpot, oneFood, oneHotel, oneActivity } =fetchOneCountry(store.state.selectCountry)

        async function findSelectData(id:string) {
            console.log(id)
            if (store.state.selectType == '旅遊景點') {
                if (store.state.selectCountry == '') {
                    allSpotData.value.forEach(item => {
                        if (item.ID == id) {
                            showData.value = item
                            image.value = item.Picture.PictureUrl1
                        }
                    })
                } else {
                    image.value = oneSpot.Picture.PictureUrl1
                }
            } else if(store.state.selectType == '觀光活動'){
                if (store.state.selectCountry == '') {
                    allActivityData.value.forEach(item => {
                        if (item.ID == id) {
                            showData.value = item
                            image.value = item.Picture.PictureUrl1
                        }
                    })
                } else {
                    image.value = oneActivity.value.Picture.PictureUrl1
                }
            } else if(store.state.selectType == '美食品嘗'){
                if (store.state.selectCountry == '') {
                    allFoodData.value.forEach(item => {
                        if (item.ID == id) {
                            showData.value = item
                            image.value = item.Picture.PictureUrl1
                        }
                    })
                } else {
                    image.value = oneFood.Picture.PictureUrl1
                }
            } else if(store.state.selectType == '住宿推薦'){
                if (store.state.selectCountry == '') {
                    allHotelData.value.forEach(item => {
                        if (item.ID == id) {
                            showData.value = item
                            image.value = item.Picture.PictureUrl1
                        }
                    })
                } else {
                    image.value = oneHotel.Picture.PictureUrl1
                }
            } else {
                if (store.state.selectCountry == '') {
                    allSpotData.value.forEach(item => {
                        if (item.ScenicSpotID == id) {
                            console.log('spot')
                            store.dispatch('selecttype', "旅遊景點")
                            showData.value = item
                            image.value = item.Picture.PictureUrl1
                            console.log('1', image.value)
                        }
                    })
                    allActivityData.value.forEach(item => {
                        if (item.ActivityID == id) {
                            console.log('activity')
                            store.dispatch('selecttype', "觀光活動")
                            showData.value = item
                            image.value = item.Picture.PictureUrl1
                        }
                    })
                    allHotelData.value.forEach(item => {
                        if (item.HotelID == id) {
                            console.log('hotel')
                            store.dispatch('selecttype', "美食品嘗")
                            showData.value = item
                            image.value = item.Picture.PictureUrl1
                            console.log('no')
                        }
                    })
                    allFoodData.value.forEach(item => {
                        if (item.RestaurantID == id) {
                            console.log('food')
                            store.dispatch('selecttype', "住宿推薦")
                            showData.value = item
                            image.value = item.Picture.PictureUrl1
                        }
                    })
                } else {
                    image.value = oneHotel.Picture.PictureUrl1
                }
            }
        }


        onMounted(() => {
            findSelectData(id.value)
        })

</script>