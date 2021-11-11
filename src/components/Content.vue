<template>
    <div class="container mx-auto">
        <Nav />
        <div></div>
        <h1></h1>
        <div class="flex flex-col md:flex-row-reverse ">
            <div><img src="" alt="">www</div>

            <div class="container">
                <div class="flex flex-col md:grid-cols-6 grid-cols-12">
                    <div class="flex md:contents justify-center">
                        <div class="col-start-2 col-end-4 mr-5 mt-10 ml-5 md:mx-auto relative">
                            <div class="w-6 h-6 absolute top-10 -mt-10 rounded-full bg-green-500 shadow text-center">
                            </div>
                            <div class="h-full w-6 flex items-center justify-center">
                                <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                            </div>
                            <div class="w-6 h-6 absolute bottom-0 mt-5 rounded-full bg-green-500 shadow text-center">
                        </div>
                        </div>
                        <div class=" col-start-4 col-end-12 p-4 rounded-xl mt-10 mr-auto w-8/12 text-left">
                            <h3 class="font-semibold text-lg mb-1">景點資訊</h3>
                            <p class="leading-tight text-justify w-full">
                            21 July 2021, 04:30 PM
                            </p>
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
import { ref } from 'vue'

export default {
    components: {
        Nav
    },
    setup() {
        const route = useRoute()
        const id = ref(route.params.ID)
        

        return {
            id
        }
    }
}
</script>