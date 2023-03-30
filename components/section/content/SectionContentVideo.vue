<template>
    <SectionWrapper :acf="acf">
        <SectionContainerLarge :acf="acf">
            <component :videoUrl="acf.video_url" :content="acf.content" :button="acf.button" :is="videoLayout" />
        </SectionContainerLarge>
    </SectionWrapper>
</template>

<script>
export default {
    props: ['acf'],
    computed: {
        videoLayout() {
            return this.acf.video_position
        }
    }
}
</script>