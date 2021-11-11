<template>
    <div class="container mx-auto p-5 bg-purple-300">
        <nav class="md:flex md:justify-between">
            <div class="flex justify-between">
                <a href="#">logo</a>
                <p id="hamburgerbtn" class="md:hidden" @click="toggleMenu"><i class="fas fa-bars text-2xl"></i></p>
            </div>
            <ul class="hidden md:flex md:flex-row" id="mobileMenu">
                <li class="pr-5"><a href="#">旅遊景點</a></li>
                <li class="pr-5"><a href="#">推薦住宿</a></li>
                <li class="pr-5"><a href="#">美食饗宴</a></li>
            </ul>
        </nav>
    </div>
</template>


<script setup lang="ts">

    function toggleMenu() {
        document.getElementById('mobileMenu')!.classList.toggle('active')
    }
</script>

<style>
    .active{
        display: block;
    }    
</style>