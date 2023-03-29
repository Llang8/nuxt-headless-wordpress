<template>
    <div class="grid grid-cols-2 gap-12">
        <ContentImageResponsive :imageUrl="imageUrl" :imageAlt="imageAlt" />
        <div v-html="content"></div>
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'imageAlt', 'content']
}
</script>