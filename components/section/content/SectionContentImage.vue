<template>
    <SectionWrapper :acf="acf">
        <SectionContainerLarge :acf="acf">
            <component :imageUrl="acf.image.url" :imageAlt="acf.image.alt" :content="acf.content" :button="acf.button" :is="imageLayout" />
        </SectionContainerLarge>
    </SectionWrapper>
</template>

<script>
export default {
    props: ['acf'],
    computed: {
        imageLayout() {
            return this.acf.image_position
        }
    }
}
</script>