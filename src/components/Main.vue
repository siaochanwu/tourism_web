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
            <h1 class="font-mono text-4xl font-bold mt-8">住宿推薦</h1>
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
            <button class="bg-yellow-500 text-white py-1 px-3 rounded-full text-1xl md:hidden m-auto w-3/12">查看更多</button>
        </div>
    </div>
</div>
</template>

<style scoped>

</style>

<script lang="ts">
// import { defineComponent } from 'vue'
import Nav from './Nav.vue'
import { ref, onMounted, watch } from 'vue'

export default {
    components:{
        Nav,
    },
    setup(){
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
        const allSpot = ref([])
        const oneSpot = ref([])
        const showSpot = ref(allSpot.value)

        const selectCountry = ref("")
        const selectType = ref("")


        //所有觀光景點資料
        function fetchAllSpot() {
            fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot')
                .then(res => res.json())
                .then(data => {
                    // console.log({data})
                    allSpot.value = data
                    showSpot.value = allSpot.value
                    console.log(showSpot.value)
                })
        }
        //指定地點觀光景點
        function fetchOneSpot(selectCountry:string) {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${selectCountry}`)
                .then(res => res.json())
                .then(data => {
                    // console.log({data})
                    oneSpot.value = data
                    showSpot.value = oneSpot.value
                })
        }



        onMounted(() => {
            fetchAllSpot();
        })



        return {
            allCountry,
            allType,
            allSpot,
            oneSpot,
            selectCountry,
            selectType,
            showSpot,
            fetchOneSpot
        }
    }
}


</script>
