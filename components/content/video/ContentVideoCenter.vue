<template>
    <div class="flex flex-col align-center">
        <ContentVideoResponsive :videoUrl="videoUrl" />
        <div class="mt-4" v-html="content">
        </div>
    </div>
</template>

<script>
export default {
    props: ['videoUrl', 'content']
}
</script>