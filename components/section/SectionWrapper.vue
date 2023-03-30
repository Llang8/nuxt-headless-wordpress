<template>
    <section class="py-24" :style="sectionStyles">
        <slot />
    </section>
</template>

<script>
export default {
    props: ['acf'],
    computed: {
        sectionStyles() {
            return {
                backgroundColor: this.acf?.background_color || '#fff',
                color: this.acf?.text_color || '#000'
            }
        }
    }
}
</script>