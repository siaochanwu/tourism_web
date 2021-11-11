<template>
    <div>
        <Nav />
        <p>2222</p>
  
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