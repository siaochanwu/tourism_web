<template>
<div class="container mx-auto">
    <div class="bg-green-100" style="height:600px;">
        <Nav />
        <div class="flex flex-col my-40">
            <input type="text" placeholder="搜尋關鍵字" class="border-2 border-black bg-white p-2 rounded-md w-10/12 md:w-5/12 m-auto mt-5">
            <div class="flex flex-col md:flex-row md:w-5/12 w-10/12 m-auto md:justify-between">
                <select name="" id="type" class="border-2 border-black bg-white p-2 rounded-md mt-5 md:w-5/12 w-full">
                    <option value="">類別</option>
                </select>
                <select name="" id="country" class="border-2 border-black bg-white p-2 rounded-md mt-5 md:w-5/12 w-full">
                    <option value="">不分區域</option>
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
            <button class="bg-yellow-500 text-white py-1 px-3 rounded-full absolute top-0 right-10 text-2xl md:hidden">查看更多</button>
        </div>

        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <!--Card 1-->
            <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/mountain.jpg" alt="Mountain">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
            </div>
            <!--Card 2-->
            <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/river.jpg" alt="River">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">River</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
            </div>
            </div>

            <!--Card 3-->
            <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/forest.jpg" alt="Forest">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Forest</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
// import { defineComponent } from 'vue'
import Nav from './Nav.vue'
import { ref, onMounted } from 'vue'

export default {
    components:{
        Nav,
    },
    setup(){
        const Alldata = ref([])

        function fetchAllData() {
            fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot')
                .then(res => res.json())
                .then(data => {
                    console.log({data})
                    Alldata.value = data
                    console.log(Alldata.value)
                })
        } 
        onMounted(() => {
            fetchAllData();
        })

        return {
            Alldata,
        }
    }
}


</script>
