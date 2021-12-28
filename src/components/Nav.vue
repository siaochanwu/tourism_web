<template>
    <div class="container mx-auto p-5 bg-blue-300 bg-opacity-20">
        <nav class="md:flex md:justify-between relative w-full">
            <div class="flex justify-between">
                <a href="#" class="font-bold text-2xl " @click="changeType('')">Formosa</a>
                <p id="hamburgerbtn" class="md:hidden md:text-white" @click="toggleMenu"><i class="fas fa-bars text-2xl"></i></p>
            </div>
            <ul class="hidden md:flex md:flex-row items-center" id="mobileMenu">
                <li class="pr-5 md:text-2xl text-xl font-bold" @click="changeType('旅遊景點')"><a href="#">旅遊景點</a></li>
                <li class="pr-5 md:text-2xl text-xl font-bold" @click="changeType('住宿推薦')"><a href="#">推薦住宿</a></li>
                <li class="pr-5 md:text-2xl text-xl font-bold" @click="changeType('美食品嘗')"><a href="#">美食饗宴</a></li>
            </ul>
        </nav>
    </div>
</template>


<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore()

function toggleMenu() {
    document.getElementById('mobileMenu')!.classList.toggle('active')
}

function changeType(type:string) {
    store.dispatch('selecttype', type)
}
    
</script>

<style>
    .active{
        display: block;
    }    
</style>