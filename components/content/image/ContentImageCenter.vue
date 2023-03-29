<template>
    <div class="flex flex-col align-center">
        <ContentImageResponsive :imageUrl="imageUrl" :imageAlt="imageAlt" />
        <div class="mt-4" v-html="content">
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'imageAlt', 'content']
}
</script>