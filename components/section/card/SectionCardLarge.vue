<template>
    <SectionWrapper :acf="acf">
        <SectionContainer :acf="acf">
            <div class="max-w-[70rem] w-full mx-auto">
                <component :imageUrl="acf.image.url" :content="acf.content" :button="acf.button" :is="cardLayout" />
            </div>
        </SectionContainer>
    </SectionWrapper>
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