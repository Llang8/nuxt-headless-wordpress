<!-- Default WordPress page content -->
<template>
    <div v-html="page.content.rendered"></div>
</template>
  
<script>
export default {
    props: ['page'],
    created() {
        console.log(this.page)
    }
}
</script>