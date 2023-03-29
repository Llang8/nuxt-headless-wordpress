<template>
    <component :is="dynamic" :page="page" />
</template>

<script>
// Import wordpress config
import { templates } from '~/wordpress.config.js'

export default {
    props: ['template', 'page'],
    computed: {
        dynamic() {
            // Get the template name from the wordpress config
            const templatePath = templates?.[this.template] || 'Default.vue'
            console.log(templatePath)
            // Import the template
            /* return async () => await import(templatePath) */
            return async () => await import(`./${templatePath}`)
        }
    }
}
</script>