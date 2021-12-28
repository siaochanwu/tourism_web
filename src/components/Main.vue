<template>
    <div class="container mx-auto">
        <div
            class="bg-no-repeat bg-center bg-cover"
            style="height:600px; background-image: url('https://img.ltn.com.tw/Upload/news/600/2019/09/22/247.jpg');"
        >
            <Nav />
            <div class="flex flex-col my-40">
                <input
                    type="text"
                    placeholder="搜尋關鍵字"
                    class="bg-white p-2 rounded-md w-10/12 md:w-5/12 m-auto mt-5"
                />
                <div class="flex flex-col md:flex-row md:w-5/12 w-10/12 m-auto md:justify-between">
                    <select id="type" class="bg-white p-2 rounded-md mt-5 md:w-5/12 w-full" v-model="selectType">
                        <option value>類別</option>
                        <option v-for="(type, index) in allType" :key="index" :value="type">{{ type }}</option>
                    </select>
                    <select
                        id="country"
                        class="bg-white p-2 rounded-md mt-5 md:w-5/12 w-full"
                        v-model="selectCountry"
                        @change="type(selectCountry)"
                    >
                        <option value>不分區域</option>
                        <option
                            v-for="country in allCountry"
                            :key="country.value"
                            :value="country.value"
                        >{{ country.name }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="home" v-if="selectType == ''">
            <div>
                <h1 class="font-mono text-4xl font-bold mt-8">旅遊景點</h1>
                <div class="flex flex-col md:flex-row md:justify-between">
                    <div
                        class="my-5 mx-auto w-10/12 md:w-2/12 h-28"
                        v-for="item in showSpot.slice(0, 6)"
                        :key="item.ID"
                    >
                        <router-link :to="`/content/${item.ID}`">
                            <div
                                class="flex justify-center items-center w-8/12 md:w-10/12 mx-auto h-full relative bg-no-repeat bg-center bg-cover"
                                :style="{ backgroundImage: `url(${item.Picture.PictureUrl1})` }"
                            >
                                <div
                                    class="mask bg-black absolute bg-opacity-50 top-0 bottom-0 left-0 right-0 w-full h-full"
                                ></div>
                                <p
                                    class="font-mono text-white text-2xl font-bold top-0 left-0 right-0 bottom-0 mt-5 z-10"
                                >{{ item.Name }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div>
                <div class="relative">
                    <h1 class="font-mono text-4xl font-bold mt-8">觀光活動</h1>
                    <button
                        class="bg-yellow-500 text-white py-1 px-3 rounded-full absolute top-0 right-10 text-2xl hidden md:block"
                    >查看更多</button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div class="p-10" v-for="item in showActivity.slice(0, 3)" :key="item.ID">
                        <router-link :to="`/content/${item.ID}`">
                            <div class="rounded overflow-hidden shadow-lg">
                                <img
                                    class="w-full"
                                    :src="item.Picture.PictureUrl1"
                                    :alt="item.Picture.PictureDescription1"
                                />
                                <div class="px-6 py-4 text-left">
                                    <div class="font-bold text-xl mb-2">{{ item.Name }}</div>
                                    <p class="text-gray-700 text-base">
                                        <i class="fas fa-map-marker-alt"></i>
                                        {{ item.Address }}
                                    </p>
                                    <p class="text-gray-700 text-base">
                                        <i class="fas fa-clock"></i>
                                        {{ item.OpenTime }}
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                    >#photography</span>
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                    >#travel</span>
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                    >#winter</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <button
                        class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden w-3/12 m-auto"
                    >查看更多</button>
                </div>
            </div>
            <div>
                <div class="relative">
                    <h1 class="font-mono text-4xl font-bold mt-8">美食品嘗</h1>
                    <button
                        class="bg-yellow-500 text-white py-1 px-3 rounded-full absolute top-0 right-10 text-2xl hidden md:block"
                    >查看更多</button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div class="p-10" v-for="item in showFood.slice(0, 3)" :key="item.ID">
                        <router-link :to="`/content/${item.ID}`">
                            <div class="rounded overflow-hidden shadow-lg">
                                <img
                                    class="w-full"
                                    :src="item.Picture.PictureUrl1"
                                    :alt="item.Picture.PictureDescription1"
                                />
                                <div class="px-6 py-4 text-left">
                                    <div class="font-bold text-xl mb-2">{{ item.Name }}</div>
                                    <p class="text-gray-700 text-base">
                                        <i class="fas fa-map-marker-alt"></i>
                                        {{ item.Address }}
                                    </p>
                                    <p class="text-gray-700 text-base">
                                        <i class="fas fa-clock"></i>
                                        {{ item.OpenTime }}
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <button
                        class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden w-3/12 m-auto"
                    >查看更多</button>
                </div>
            </div>
            <div>
                <div class="relative">
                    <h1 class="font-mono text-4xl font-bold mt-8">住宿推薦</h1>
                    <button
                        class="bg-yellow-500 text-white py-1 px-3 rounded-full absolute top-0 right-10 text-2xl hidden md:block"
                    >查看更多</button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div class="p-10" v-for="item in showHotel.slice(0, 3)" :key="item.ID">
                        <router-link :to="`/content/${item.ID}`">
                            <div class="rounded overflow-hidden shadow-lg">
                                <img
                                    class="w-full"
                                    :src="item.Picture.PictureUrl1"
                                    :alt="item.Picture.PictureDescription1"
                                />
                                <div class="px-6 py-4 text-left">
                                    <div class="font-bold text-xl mb-2">{{ item.Name }}</div>
                                    <p class="text-gray-700 text-base">
                                        <i class="fas fa-map-marker-alt"></i>
                                        {{ item.Address }}
                                    </p>
                                    <p class="text-gray-700 text-base">
                                        <i class="fas fa-clock"></i>
                                        {{ item.OpenTime }}
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                    >#photography</span>
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                    >#travel</span>
                                    <span
                                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                    >#winter</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <button
                        class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden m-auto w-3/12"
                    >查看更多</button>
                </div>
            </div>
        </div>
        <div class="spot" v-else-if="selectType == '旅遊景點'">
            <div class="relative">
                <h1 class="font-mono text-4xl font-bold mt-8 mb-4">{{ showCountry }}</h1>
                <div class="absolute top-0 right-10 flex flex-row">
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >全部</button>
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >熱門</button>
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >推薦</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-5" v-for="item in showSpot" :key="item.ID">
                    <router-link :to="`/content/${item.ID}`">
                        <div class="rounded overflow-hidden shadow-lg">
                            <img
                                class="w-full"
                                :src="item.Picture.PictureUrl1"
                                :alt="item.Picture.PictureDescription1"
                            />
                            <div class="px-6 py-4 text-left">
                                <div class="font-bold text-xl mb-2">{{ item.Name }}</div>
                                <p class="text-gray-700 text-base">
                                    <i class="fas fa-map-marker-alt"></i>
                                    {{ item.Address }}
                                </p>
                                <p class="text-gray-700 text-base">
                                    <i class="fas fa-clock"></i>
                                    {{ item.OpenTime }}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <button
                    class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden w-3/12 m-auto"
                >查看更多</button>
            </div>
        </div>
        <div class="food" v-else-if="selectType == '美食品嘗'">
            <div class="relative">
                <h1 class="font-mono text-4xl font-bold mt-8 mb-4">{{ showCountry }}</h1>
                <div class="absolute top-0 right-10 flex flex-row">
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >全部</button>
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >熱門</button>
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >推薦</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-5" v-for="item in showFood" :key="item.ID">
                    <router-link :to="`/content/${item.ID}`">
                        <div class="rounded overflow-hidden shadow-lg">
                            <img
                                class="w-full"
                                :src="item.Picture.PictureUrl1"
                                :alt="item.Picture.PictureDescription1"
                            />
                            <div class="px-6 py-4 text-left">
                                <div class="font-bold text-xl mb-2">{{ item.Name }}</div>
                                <p class="text-gray-700 text-base">
                                    <i class="fas fa-map-marker-alt"></i>
                                    {{ item.Address }}
                                </p>
                                <p class="text-gray-700 text-base">
                                    <i class="fas fa-clock"></i>
                                    {{ item.OpenTime }}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <button
                    class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden w-3/12 m-auto"
                >查看更多</button>
            </div>
        </div>
        <div class="hotel" v-else-if="selectType == '住宿推薦'">
            <div class="relative">
                <h1 class="font-mono text-4xl font-bold mt-8 mb-4">{{ showCountry }}</h1>
                <div class="absolute top-0 right-10 flex flex-row">
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >全部</button>
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >熱門</button>
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >推薦</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-5" v-for="item in showHotel" :key="item.ID">
                    <router-link :to="`/content/${item.ID}`">
                        <div class="rounded overflow-hidden shadow-lg">
                            <img
                                class="w-full"
                                :src="item.Picture.PictureUrl1"
                                :alt="item.Picture.PictureDescription1"
                            />
                            <div class="px-6 py-4 text-left">
                                <div class="font-bold text-xl mb-2">{{ item.Name }}</div>
                                <p class="text-gray-700 text-base">
                                    <i class="fas fa-map-marker-alt"></i>
                                    {{ item.Address }}
                                </p>
                                <p class="text-gray-700 text-base">
                                    <i class="fas fa-clock"></i>
                                    {{ item.OpenTime }}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <button
                    class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden w-3/12 m-auto"
                >查看更多</button>
            </div>
        </div>
        <div v-else>
            <div class="relative">
                <h1 class="font-mono text-4xl font-bold mt-8 mb-4">{{ showCountry }}</h1>
                <div class="absolute top-0 right-10 flex flex-row">
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >全部</button>
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >熱門</button>
                    <button
                        class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2"
                    >推薦</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-5" v-for="item in showActivity" :key="item.ID">
                    <router-link :to="`/content/${item.ID}`">
                        <div class="rounded overflow-hidden shadow-lg">
                            <img
                                class="w-full"
                                :src="item.Picture.PictureUrl1"
                                :alt="item.Picture.PictureDescription1"
                            />
                            <div class="px-6 py-4 text-left">
                                <div class="font-bold text-xl mb-2">{{ item.Name }}</div>
                                <p class="text-gray-700 text-base">
                                    <i class="fas fa-map-marker-alt"></i>
                                    {{ item.Address }}
                                </p>
                                <p class="text-gray-700 text-base">
                                    <i class="fas fa-clock"></i>
                                    {{ item.OpenTime }}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <button
                    class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden w-3/12 m-auto"
                >查看更多</button>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import Nav from './Nav.vue'
import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from 'vuex'
import jsSHA from "jssha"
import country from '../use/country'

        interface thing {
            ID: string,
            Name: string,
            Picture: any,
            Address: string,
            OpenTime: string
        }

        const store = useStore()

        const { allCountry, allType } = country()
        const oneSpot = ref<thing[]>([])
        const showSpot = ref([])
        const oneFood = ref<thing[]>([])
        const showFood = ref([])
        const oneHotel = ref<thing[]>([])
        const showHotel = ref([])
        const oneActivity = ref<thing[]>([])
        const showActivity = ref([])
        const showCountry = ref("全部")
        const selectCountry = ref("")
        const selectType = ref("")


        //憑證
        function getAuthorizationHeader() {
            let AppID = import.meta.env.VITE_APP_ID;
            let AppKey = import.meta.env.VITE_APP_KEY;

            let GMTString = new Date().toUTCString();
            let ShaObj = new jsSHA('SHA-1', 'TEXT');
            ShaObj.setHMACKey(AppKey, 'TEXT');
            ShaObj.update('x-date: ' + GMTString);
            let HMAC = ShaObj.getHMAC('B64');
            let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
            return { 'Authorization': Authorization, 'X-Date': GMTString };
        }

        //指定地點觀光景點
        function fetchOneSpot(selectCountry: string) {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${selectCountry}?&$format=JSON&$top=20`,
                {
                    headers: getAuthorizationHeader()
                })
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (JSON.stringify(data[i].Picture) === '{}') {
                            data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                        }
                    }
                    oneSpot.value = data
                    showSpot.value = oneSpot.value
                })
        }
  
        //指定地點餐飲景點
        function fetchOneFood(selectCountry: string) {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${selectCountry}?&$format=JSON&$top=20`,
                {
                    headers: getAuthorizationHeader()
                })
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (JSON.stringify(data[i].Picture) === '{}') {
                            data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                        }
                    }
                    oneFood.value = data
                    showFood.value = oneFood.value
                })
        }

        //指定地點住宿景點
        function fetchOneHotel(selectCountry: string) {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${selectCountry}?&$format=JSON&$top=20`,
                {
                    headers: getAuthorizationHeader()
                })
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (JSON.stringify(data[i].Picture) === '{}') {
                            data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                        }
                    }
                    oneHotel.value = data
                    showHotel.value = oneHotel.value
                })
        }

        //指定地點活動
        function fetchOneActivity(selectCountry: string) {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${selectCountry}?&$format=JSON&$top=20`,
                {
                    headers: getAuthorizationHeader()
                })
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (JSON.stringify(data[i].Picture) === '{}') {
                            data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                        }
                    }
                    oneActivity.value = data
                    showActivity.value = oneActivity.value
                })
        }

        function type(selectCountry: string) {
            if (selectType.value == '旅遊景點') {
                fetchOneSpot(selectCountry)
            } else if (selectType.value == '觀光活動') {
                fetchOneActivity(selectCountry)
            } else if (selectType.value == '美食品嘗') {
                fetchOneFood(selectCountry)
            } else if (selectType.value == '住宿推薦') {
                fetchOneHotel(selectCountry)
            }
        }

        watch(selectCountry, (newVal, oldVal) => {
            allCountry.value.filter(item => {
                if (selectCountry.value == item.value) {
                    showCountry.value = item.name;
                    store.dispatch("selectcountry", selectCountry.value)
                }
            })
        })
        watch(selectType, (newVal, oldVal) => {
            store.dispatch("selecttype", selectType.value)
        })

        const navSelect = computed(() => selectType.value = store.state.selectType)

        watch(navSelect, (newVal, oldVal) => {
            selectType.value = newVal


        })


        onMounted(() => {
            showSpot.value = store.state.allSpotData;
            showFood.value = store.state.allFoodData;
            showHotel.value = store.state.allHotelData;
            showActivity.value = store.state.allActivityData;
        })

</script>
