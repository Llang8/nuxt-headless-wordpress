<template>
    <div class="container max-w-screen-lg mx-auto">
        <slot />
    </div>
</template>

<script>
export default {
    name: "SectionContainer",
    props: ['acf']
}
</script>