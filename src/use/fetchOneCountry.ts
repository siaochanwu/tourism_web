import { ref, onMounted } from 'vue'
import jsSHA from "jssha"

export default function fetchOneCountry(selectCountry) {
    const oneSpot = ref([])

    const getSpot = async () => {
        oneSpot.value = await fetchOneSpot(selectCountry)
    }


    function getAuthorizationHeader() {
        let AppID = import.meta.env.VITE_APP_ID;
        let AppKey = import.meta.env.VITE_APP_KEY;
        let GMTString = new Date().toUTCString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        console.log('hmac', HMAC)
        let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }
    //指定地點觀光景點
    function fetchOneSpot(selectCountry:string) {
        return new Promise((resolve, reject) => {
            fetch(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${selectCountry}?&$format=JSON&$top=20`, {
                headers: getAuthorizationHeader()
            })
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (JSON.stringify(data[i].Picture) === '{}') {
                            data[i].Picture.PictureUrl1 = "https://angelofshiva.com/resources/assets/images/no-img.jpg"
                        }
                    }
                    // console.log(data)
                    resolve(data)
                })
                .catch(err => {
                    reject()
                })
        }) 
        
    }

    const oneFood = ref([])

    const getFood = async () => {
        oneFood.value = await fetchOneFood(selectCountry)
    }

    function fetchOneFood(selectCountry: string) {
        return new Promise((resolve, reject) => {
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
                resolve(data)
            })
            .catch(err => reject())
        })
        
    }

    const oneHotel = ref([])

    const getHotel = async () => {
        oneHotel.value = await fetchOneHotel(selectCountry)
    }

    function fetchOneHotel(selectCountry: string) {
        return new Promise((resolve, reject) => {
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
                    resolve(data)
                })
                .catch(err => reject())
        })
    }

    const oneActivity = ref([])
    const getActivity = async () => {
        oneActivity.value = await fetchOneActivity(selectCountry)
    }

    function fetchOneActivity(selectCountry: string) {
        return new Promise ((resolve, reject) => {
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
                resolve(data)
            })
            .catch(err => reject())
        })
        
    }

    onMounted(getSpot)
    onMounted(getFood)
    onMounted(getHotel)
    onMounted(getActivity)

    return{
        oneSpot,
        oneFood,
        oneHotel,
        oneActivity
    }
}