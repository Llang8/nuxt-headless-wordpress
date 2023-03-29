<!-- Default WordPress page content -->
<template>
    <main>
        <h1>Home</h1>
        <div v-html="page.content.rendered" />
    </main>
</template>
  
<script>
export default {
    props: ['page']
}
</script>