<template>
    <div class="grid grid-cols-2 gap-12">
        <ContentImageResponsive :imageUrl="imageUrl" :imageAlt="imageAlt" />
        <ContentText :body="content" :button="button" />
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'imageAlt', 'content', 'button']
}
</script>