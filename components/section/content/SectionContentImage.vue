<template>
    <SectionWrapper :acf="acf">
        <SectionContainerLarge :acf="acf">
            <component :imageUrl="acf.image.url" :imageAlt="acf.image.alt" :content="acf.content" :is="imageLayout" />
        </SectionContainerLarge>
    </SectionWrapper>
</template>

<script>
export default {
    props: ['acf'],
    computed: {
        imageLayout() {
            return this.acf.image_position
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