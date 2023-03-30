<template>
    <SectionWrapper :acf="acf" >
        <SectionContainer :acf="acf">
            <ContentText :body="acf.body" :button="acf.button" />
        </SectionContainer>
    </SectionWrapper>
</template>

<script>
export default {
    props: ['acf']
}
</script>