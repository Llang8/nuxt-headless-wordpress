<!-- Default WordPress page content -->
<template>
    <main>
        <h1>Home</h1>
        <HeroHome :acf="page.acf?.home_hero" />
    </main>
</template>
  
<script>
import HeroHome from '../Hero/HeroHome.vue'

export default {
    props: ['page'],
    components: {
        HeroHome
    },
}
</script>