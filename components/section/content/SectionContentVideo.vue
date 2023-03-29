<template>
    <section class="md:container mx-auto py-24" :style="sectionStyles">
        <component :videoUrl="acf.video_url" :content="acf.content" :is="videoLayout" />
    </section>
</template>

<script>
export default {
    props: ['acf'],
    computed: {
        videoLayout() {
            return this.acf.video_position
        },
        sectionStyles() {
            return {
                backgroundColor: this.acf.background_color || '#fff',
                color: this.acf.text_color || '#000'
            }
        }
    }
}
</script>