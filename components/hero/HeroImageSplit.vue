<template>
    <section class="lg:container mx-auto grid grid-cols-2 gap-12">
        <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-3xl font-bold">{{ acf.title }}</h1>
            <div v-html="acf.body"></div>
        </div>
        <div>
            <img 
                :src="acf.right_image"
                :alt="acf.title"
            >
        </div>
    </section>
</template>

<script>
export default {
    props: ['acf'],
}
</script>