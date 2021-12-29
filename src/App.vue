<script setup lang="ts">
import jsSHA from "jssha"
import { onMounted } from "vue";
import { useStore } from 'vuex'

const store = useStore()


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
function fetchAllSpot() {
    fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?&$format=JSON&$top=50',
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
            store.dispatch('saveallspot', data)
        })
}

//所有觀光餐飲資料
function fetchAllFood() {
    fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?&$format=JSON&$top=50',
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
            store.dispatch('saveallfood', data)
        })
}

//所有觀光住宿資料
function fetchAllHotel() {
    fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?&$format=JSON&$top=50',
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
            store.dispatch('saveallhotel', data)
        })
}

//所有觀光活動資料
function fetchAllActivity() {
    fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?&$format=JSON&$top=50',
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
            store.dispatch('saveallactivity', data)
        })
}

onMounted(() => {
  fetchAllSpot();
  fetchAllFood();
  fetchAllHotel();
  fetchAllActivity();
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
