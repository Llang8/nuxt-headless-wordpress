<template>
    <AlertDanger v-if="type === 'danger'">
        {{ message }}
    </AlertDanger>
    <AlertSuccess v-else-if="type === 'success'">
        {{ message }}
    </AlertSuccess>
</template>

<script>
export default {
    props: ['message', 'type'],
}
</script>