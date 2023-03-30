<template>
    <SectionWrapper :acf="acf">
        <SectionContainerLarge :acf="acf">
            <component :videoUrl="acf.video_url" :content="acf.content" :is="videoLayout" />
        </SectionContainerLarge>
    </SectionWrapper>
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