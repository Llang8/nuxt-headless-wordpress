<template>
    <div class="grid grid-cols-2 gap-12">
        <div v-html="content"></div>
        <ContentImageResponsive :imageUrl="imageUrl" :imageAlt="imageAlt" />
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'imageAlt', 'content']
}
</script>