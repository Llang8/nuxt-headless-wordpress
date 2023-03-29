<template>
    <img 
        class="max-w-full h-auto"
        :src="imageUrl" 
        :alt="imageAlt"
    >
</template>

<script>
export default {
    props: ['imageUrl', 'imageAlt']
}
</script>