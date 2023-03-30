<template>
    <SectionWrapper :acf="acf">
        <SectionContainer :acf="acf">
            <div class="md:container mx-auto" v-html="acf.body"></div>
        </SectionContainer>
    </SectionWrapper>
</template>

<script>
export default {
    props: ['acf'],
    computed: {
        sectionStyles() {
            return {
                backgroundColor: this.acf.background_color,
                color: this.acf.text_color
            }
        }
    }
}
</script>

<style>
.section-content-colored h2 {
    @apply text-2xl font-bold mb-4;
}

.section-content-colored h1 {
    @apply text-3xl font-bold mb-4;
}

.section-content-colored p {
    @apply mb-4;
}

.section-content-colored p:last-of-type {
    @apply mb-0;
}
</style>