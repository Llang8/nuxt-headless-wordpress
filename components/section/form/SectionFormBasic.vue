<template>
    <SectionWrapper :acf="acf">
        <SectionContainer :acf="acf">
            <div v-html="acf.content_above"></div>
            <FormCF7 :form="acf.form" />
            <div v-html="acf.content_below"></div>
        </SectionContainer>
    </SectionWrapper>
</template>

<script>
export default {
    props: ['acf']
}
</script>