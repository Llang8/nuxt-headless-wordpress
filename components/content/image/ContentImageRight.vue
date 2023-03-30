<template>
    <div class="grid grid-cols-2 gap-12">
        <ContentText :body="content" :button="button" />
        <ContentImageResponsive :imageUrl="imageUrl" :imageAlt="imageAlt" />
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'imageAlt', 'content', 'button']
}
</script>