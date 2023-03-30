<template>
    <div>
        <div v-html="body"></div>
        <Button v-if="button?.link && button?.text" 
            :intent="button.intent" 
            :size="button.size"  
            :to="buttonTo"
            :align="button.align"
            :href="buttonHref">
            {{ button.text }}
        </Button>
    </div>
</template>

<script>
export default {
    props: ['body', 'button'],
    computed: {
        buttonTo() {
            /* If button.link is internal, return link, else return none */
            return this.button.link.includes('http') ? null : this.button.link
        },
        buttonHref() {
            /* If button.link is external, return link, else return none */
            return this.button.link.includes('http') ? this.button.link : null
        }
    }
}
</script>