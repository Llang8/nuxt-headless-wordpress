<template>
    <div class="flex flex-col align-center">
        <ContentImageResponsive :imageUrl="imageUrl" :imageAlt="imageAlt" />
        <ContentText :body="content" :button="button" />
    </div>
</template>

<script>
export default {
    props: ['imageUrl', 'imageAlt', 'content', 'button']
}
</script>