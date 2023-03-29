<template>
    <section :style="sectionStyles">
        <div class="max-w-[70rem] w-full mx-auto py-24">
            <component :imageUrl="acf.image.url" :content="acf.content" :is="cardLayout" />
        </div>
    </section>
</template>

<script>
export default {
    props: ['acf'],
    computed: {
        cardLayout() {
            return this.acf.image_position
        },
        sectionStyles() {
            return {
                backgroundColor: this.acf.background_color || '#fff'
            }
        }
    }
}
</script>