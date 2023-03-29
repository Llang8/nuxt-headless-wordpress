<template>
    <div class="grid grid-cols-2 gap-12">
        <div v-html="content"></div>
        <ContentVideoResponsive :videoUrl="videoUrl" />
    </div>
</template>

<script>
export default {
    props: ['videoUrl', 'content']
}
</script>