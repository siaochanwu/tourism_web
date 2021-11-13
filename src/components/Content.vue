<template>
    <div class="container mx-auto">
        <Nav />
        <div></div>
        <h1></h1>
        <div class="flex flex-col md:flex-row-reverse ">
            <div class="w-full md:w-6/12 mt-10"><img src="" alt="">www</div>

            <div class="container w-full md:w-6/12">
                <div class="flex flex-col md:grid-cols-6 grid-cols-12">
                    <div class="flex justify-center">
                        <div class="col-start-2 col-end-4 mr-5 mt-10 ml-5 relative">
                            <div class="w-6 h-6 absolute top-10 -mt-10 rounded-full bg-green-500 shadow text-center">
                            </div>
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                            </div>
                            <div class="w-6 h-6 absolute bottom-0 mt-5 rounded-full bg-green-500 shadow text-center">
                            </div>
                        </div>
                        <div class="col-start-4 col-end-12 p-4 rounded-xl mt-10 mr-auto w-8/12 text-left">
                            <h3 class="font-semibold text-lg mb-1">景點資訊</h3>
                            <p class="leading-tight text-justify w-full">
                            21 July 2021, 04:30 PM
                            </p>
                            <p>111</p>
                            <p>111</p>
                            <p>111</p>
                            <p>111</p>
                            <p>111</p>
                            <p>111</p>
                            <p>111</p>
                            <p>111</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  
    </div>
</template>

<script lang="ts">
import Nav from './Nav.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

export default {
    components: {
        Nav
    },
    setup() {
        interface thing {
            ID:string,
            Name:string,
            Picture:any,
            Address:string,
            OpenTime: string
        }

        const route = useRoute()
        const store = useStore()
        const id = ref<any>(route.params.ID)
        const allSpotData = ref<thing[]>(store.state.allSpotData)
        const showData = ref({})
        const oneSpot = ref<thing[]>([])

        async function findSelectData(id:string) {
            console.log(id)
            if (store.state.selectType == '旅遊景點') {
                if (store.state.selectCountry == '') {
                    allSpotData.value.forEach(item => {
                        if (item.ID == id) {
                            showData.value = item
                        }
                    })
                } else {
                    await fetchOneSpot(store.state.selectCountry)
                    await console.log(showData.value)

                }
            }
        }
        
        //指定地點觀光景點
        function fetchOneSpot(selectCountry:string) {
            return new Promise((resolve, reject) => {
                fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${selectCountry}`)
                    .then(res => res.json())
                    .then(data => {
                        for (let i = 0; i < data.length; i++) {
                            if (JSON.stringify(data[i].Picture) === '{}') {
                                data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                            }
                        }
                        oneSpot.value = data
                        oneSpot.value.forEach(item => {
                            if (item.ID == id) {
                                showData.value = item
                            }
                        })
                        resolve(showData.value)
                    })
                    .catch(err => {
                        reject()
                    })
            }) 
            
        }

        onMounted(() => {
            findSelectData(id.value)
        })

        return {
            id,
            allSpotData,
            showData,
            oneSpot
        }
    }
}
</script>