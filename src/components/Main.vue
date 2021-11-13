<template>
<div class="container mx-auto">
    <div class="bg-green-100" style="height:600px;">
        <Nav />
        <div class="flex flex-col my-40">
            <input type="text" placeholder="搜尋關鍵字" class="border-2 border-black bg-white p-2 rounded-md w-10/12 md:w-5/12 m-auto mt-5">
            <div class="flex flex-col md:flex-row md:w-5/12 w-10/12 m-auto md:justify-between">
                <select name="" id="type" class="border-2 border-black bg-white p-2 rounded-md mt-5 md:w-5/12 w-full" v-model="selectType">
                    <option value="">類別</option>
                    <option v-for="type in allType" :key="type" :value="type">{{ type }}</option>
                </select>
                <select name="" id="country" class="border-2 border-black bg-white p-2 rounded-md mt-5 md:w-5/12 w-full" v-model="selectCountry" @change="fetchOneSpot(selectCountry)">
                    <option value="">不分區域</option>
                    <option  v-for="country in allCountry" :key="country.value" :value="country.value">{{ country.name }}</option>
                </select>
            </div>
        </div>
        
    </div>
    <div class="home" v-if="selectType == ''">
        <div>
            <h1 class="font-mono text-4xl font-bold mt-8">旅遊景點</h1>
            <div class="flex flex-col md:flex-row md:justify-between">
                <div class="my-5 mx-auto w-8/12 md:w-4/12">
                    <div class="bg-black flex justify-center items-center w-8/12 mx-auto">
                        <p class="font-mono text-white text-4xl font-bold top-0 left-0 right-0 bottom-0 mt-5">101</p>
                    </div>
                </div>
                <div class="my-5 mx-auto w-8/12 md:w-4/12">
                    <div class="bg-black flex justify-center items-center w-8/12 mx-auto">
                        <p class="font-mono text-white text-4xl font-bold top-0 left-0 right-0 bottom-0 mt-5">101</p>
                    </div>
                </div>
                <div class="my-5 mx-auto w-8/12 md:w-4/12">
                    <div class="bg-black flex justify-center items-center w-8/12 mx-auto">
                        <p class="font-mono text-white text-4xl font-bold top-0 left-0 right-0 bottom-0 mt-5">101</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <div class="relative">
                <h1 class="font-mono text-4xl font-bold mt-8">觀光活動</h1>
                <button class="bg-yellow-500 text-white py-1 px-3 rounded-full absolute top-0 right-10 text-2xl hidden md:block">查看更多</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-10" v-for="item in showSpot.slice(0,3)" :key="item.ID">
                    <div class="rounded overflow-hidden shadow-lg">
                        <img class="w-full" :src="item.Picture.PictureUrl1" :alt="item.Picture.PictureDescription1">
                        <div class="px-6 py-4 text-left">
                            <div class="font-bold text-xl mb-2">{{item.Name}}</div>
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
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
                <button class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden w-3/12 m-auto">查看更多</button>
            </div>
        </div>
        <div>
            <div class="relative">
                <h1 class="font-mono text-4xl font-bold mt-8">美食品嘗</h1>
                <button class="bg-yellow-500 text-white py-1 px-3 rounded-full absolute top-0 right-10 text-2xl hidden md:block">查看更多</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-10" v-for="item in showFood.slice(0,3)" :key="item.ID">
                    <div class="rounded overflow-hidden shadow-lg">
                        <img class="w-full" :src="item.Picture.PictureUrl1" :alt="item.Picture.PictureDescription1">
                        <div class="px-6 py-4 text-left">
                            <div class="font-bold text-xl mb-2">{{item.Name}}</div>
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
                </div>
                <button class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden w-3/12 m-auto">查看更多</button>
            </div>
        </div>
        <div>
            <div class="relative">
                <h1 class="font-mono text-4xl font-bold mt-8">住宿推薦</h1>
                <button class="bg-yellow-500 text-white py-1 px-3 rounded-full absolute top-0 right-10 text-2xl hidden md:block">查看更多</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-10" v-for="item in showHotel.slice(0,3)" :key="item.ID">
                    <div class="rounded overflow-hidden shadow-lg">
                        <img class="w-full" :src="item.Picture.PictureUrl1" :alt="item.Picture.PictureDescription1">
                        <div class="px-6 py-4 text-left">
                            <div class="font-bold text-xl mb-2">{{item.Name}}</div>
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
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
                <button class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden m-auto w-3/12">查看更多</button>
            </div>
        </div>
    </div>
    <div class="spot" v-else-if="selectType == '旅遊景點'">
        <div class="relative">
                <h1 class="font-mono text-4xl font-bold mt-8 mb-4">{{ showCountry }}</h1>
                <div class="absolute top-0 right-10 flex flex-row">
                    <button class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2">全部</button>
                    <button class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2">熱門</button>
                    <button class="border border-yellow-500 hover:bg-yellow-500 hover:text-white text-yellow-500 py-1 px-3 rounded-full text-2xl md:block hidden mx-2">推薦</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="p-5" v-for="item in showSpot" :key="item.ID">
                    <router-link :to="`/content/${item.ID}`">
                        <div class="rounded overflow-hidden shadow-lg">
                            <img class="w-full" :src="item.Picture.PictureUrl1" :alt="item.Picture.PictureDescription1">
                            <div class="px-6 py-4 text-left">
                                <div class="font-bold text-xl mb-2">{{item.Name}}</div>
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
                <button class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden w-3/12 m-auto">查看更多</button>
            </div>
    </div>
    <div v-else>123</div>
    
</div>
</template>

<style scoped>

</style>

<script lang="ts">
// import { defineComponent } from 'vue'
import Nav from './Nav.vue'
import { ref, onMounted, watch } from 'vue'
import store from '../store'
import { useStore } from 'vuex'

export default {
    components:{
        Nav,
    },
    setup(){
        interface thing {
            ID:string,
            Name:string,
            Picture:any,
            Address:string,
            OpenTime: string
        }

        const store = useStore()

        const allCountry = ref([{
                name: "臺北市",
                value: "Taipei"
            },
            {
                name: "新北市",
                value: "NewTaipei"
            },
            {
                name: "基隆市",
                value: "Keelung"
            },
            {
                name: "桃園市",
                value: "Taoyuan"
            },
            {
                name: "新竹市",
                value: "Hsinchu"
            },
            {
                name: "新竹縣",
                value: "HsinchuCounty"
            },
            {
                name: "苗栗縣",
                value: "MiaoliCounty"
            },
            {
                name: "彰化縣",
                value: "ChanghuaCounty"
            },
            {
                name: "南投縣",
                value: "NantouCounty"
            },
            {
                name: "雲林縣",
                value: "YunlinCounty"
            },
            {
                name: "嘉義市",
                value: "Chiayi"
            },
            {
                name: "嘉義縣",
                value: "ChiayiCounty"
            },
            {
                name: "臺中市",
                value: "Taichung"
            },
            {
                name: "臺南市",
                value: "Tainan"
            },
            {
                name: "高雄市",
                value: "Kaohsiung"
            },
            {
                name: "屏東縣",
                value: "PingtungCounty"
            },
            {
                name: "宜蘭縣",
                value: "YilanCounty"
            },
            {
                name: "花蓮縣",
                value: "HualienCounty"
            },
            {
                name: "臺東縣",
                value: "TaitungCounty"
            },
            {
                name: "澎湖縣",
                value: "PenghuCounty"
            },
            {
                name: "金門縣",
                value: "KinmenCounty"
            },
            {
                name: "連江縣",
                value: "LienchiangCounty"
            }])
        const allType = ref(["旅遊景點",
            "觀光活動",
            "美食品嘗",
            "住宿推薦"])
        const allSpot = ref<thing[]>([])
        const oneSpot = ref<thing[]>([])
        const showSpot = ref(allSpot.value)
        const allFood = ref<thing[]>([])
        const oneFood = ref<thing[]>([])
        const showFood = ref(allFood.value)
        const allHotel = ref<thing[]>([])
        const oneHotel = ref<thing[]>([])
        const showHotel = ref(allHotel.value)
        const allActivity = ref<thing[]>([])
        const oneActivity = ref<thing[]>([])
        const showActivity = ref(allActivity.value)
        const showCountry = ref("全部")
    
        const selectCountry = ref("")
        const selectType = ref("")


        //所有觀光景點資料
        function fetchAllSpot() {
            fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot')
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (JSON.stringify(data[i].Picture) === '{}') {
                            data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                        }
                    }
                    allSpot.value = data
                    showSpot.value = allSpot.value
                    store.dispatch('saveallspot', allSpot.value)
                })
        }
        //指定地點觀光景點
        function fetchOneSpot(selectCountry:string) {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${selectCountry}`)
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

        //所有觀光餐飲資料
        function fetchAllFood() {
            fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant')
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (JSON.stringify(data[i].Picture) === '{}') {
                            data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                        }
                    }
                    allFood.value = data
                    showFood.value = allFood.value
                    store.dispatch('saveallfood', allFood.value)
                })
        }
        //指定地點餐飲景點
        function fetchOneFood(selectCountry:string) {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${selectCountry}`)
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

        //所有觀光住宿資料
        function fetchAllHotel() {
            fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel')
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (JSON.stringify(data[i].Picture) === '{}') {
                            data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                        }
                    }
                    allHotel.value = data
                    showHotel.value = allHotel.value
                    store.dispatch('saveallhotel', allHotel.value)
                })
        }
        //指定地點住宿景點
        function fetchOneHotel(selectCountry:string) {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${selectCountry}`)
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

        //所有觀光活動資料
        function fetchAllActivity() {
            fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity')
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (JSON.stringify(data[i].Picture) === '{}') {
                            data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                        }
                    }
                    allActivity.value = data
                    showActivity.value = allActivity.value
                    store.dispatch('saveallactivity', allActivity.value)
                })
        }
        //指定地點活動
        function fetchOneActivity(selectCountry:string) {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${selectCountry}`)
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

        watch(selectCountry, (newVal, oldVal) => {
            allCountry.value.filter(item => {
                if (selectCountry.value == item.value) {
                    showCountry.value = item.name;
                    store.dispatch("selectcountry", selectCountry.value)
                    console.log(store.state.selectType)
                }
            })
        })
        watch(selectType, (newVal, oldVal) => {
            store.dispatch("selecttype", selectType.value)
            console.log(store.state.selectType)
        })


        onMounted(() => {
            fetchAllSpot();
            fetchAllFood();
            fetchAllHotel();
            fetchAllActivity();
        })



        return {
            allCountry,
            allType,
            allSpot,
            oneSpot,
            selectCountry,
            selectType,
            showSpot,
            allFood,
            oneFood,
            showFood,
            allHotel,
            oneHotel,
            allActivity,
            oneActivity,
            showHotel,
            showActivity,
            showCountry,
            fetchOneSpot,
            fetchOneFood,
            fetchOneHotel,
            fetchOneActivity
        }
    }
}


</script>
