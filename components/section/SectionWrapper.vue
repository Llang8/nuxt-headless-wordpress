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
            let background = null

            if (this.acf.background_overlay && this.acf.background_image) {
                background = `linear-gradient(0deg, ${this.acf.background_overlay} 0%, ${this.acf.background_overlay} 100%), url(${this.acf.background_image.url})`
            } else if (this.acf.background_image) {
                background = `url(${this.acf.background_image.url})`
            }

            return {
                background: background || '',
                backgroundColor: this.acf?.background_color || '#fff',
                color: this.acf?.text_color || '#000',
            }
        }
    }
}
</script>