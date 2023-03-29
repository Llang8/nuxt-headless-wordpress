<template>
    <div class="mx-auto max-w-[56rem] w-full">
        <iframe :src="videoUrl"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            class="w-full aspect-video"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    props: ['videoUrl', 'maxWidth']
}
</script>