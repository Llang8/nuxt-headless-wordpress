<template>
    <div class="grid grid-cols-2 gap-12">
        <ContentVideoResponsive :videoUrl="videoUrl" />
        <div v-html="content"></div>
    </div>
</template>

<script>
export default {
    props: ['videoUrl', 'content']
}
</script>