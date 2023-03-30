<template>
    <SectionWrapper :acf="acf" >
        <SectionContainer :acf="acf">
            <div v-html="acf.body"></div>
        </SectionContainer>
    </SectionWrapper>
</template>

<script>
export default {
    props: ['acf']
}
</script>