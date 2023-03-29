<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>{{ acf.title }}</h1>
                    <div v-html="acf.body"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['acf'],
}
</script>