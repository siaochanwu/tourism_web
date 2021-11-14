<template>
    <div class="container mx-auto p-5 bg-blue-300 bg-opacity-20 md:bg-opacity-100">
        <nav class="md:flex md:justify-between">
            <div class="flex justify-between">
                <a href="#" class="font-bold text-2xl md:text-white" @click="changeType('')">Formosa</a>
                <p id="hamburgerbtn" class="md:hidden md:text-white" @click="toggleMenu"><i class="fas fa-bars text-2xl"></i></p>
            </div>
            <ul class="hidden md:flex md:flex-row" id="mobileMenu">
                <li class="pr-5 text-white font-bold" @click="changeType('旅遊景點')"><a href="#">旅遊景點</a></li>
                <li class="pr-5 text-white font-bold" @click="changeType('住宿推薦')"><a href="#">推薦住宿</a></li>
                <li class="pr-5 text-white font-bold" @click="changeType('美食品嘗')"><a href="#">美食饗宴</a></li>
            </ul>
        </nav>
    </div>
</template>


<script lang="ts">
import { useStore } from 'vuex';
import Store from '../store'

const store = useStore()

export default {
    setup() {

        function toggleMenu() {
            document.getElementById('mobileMenu')!.classList.toggle('active')
        }

        function changeType(type:string) {
            Store.dispatch('selecttype', type)
        }

        return {
            changeType,
            toggleMenu
        }
    }
}
    
</script>

<style>
    .active{
        display: block;
    }    
</style>