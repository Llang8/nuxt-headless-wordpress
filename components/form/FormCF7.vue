<template>
    <div class="formWrapper" ref="formWrapper">
        <Alert v-if="message" :message="message" :type="alertType" />
        <div v-html="formTemplate"></div>
    </div>
</template>

<script>
export default {
    props: ['form'],
    data() {
        return {
            formTemplate: '',
            message: '',
            status: ''
        }
    },
    async fetch() {
        let form = await this.$axios.$get(`/wp-json/headless/v1/form/${this.form.ID}`)

        this.formTemplate = form
    },
    computed: {
        alertType() {
            return this.status === 'mail_sent' ? 'success' : 'danger'
        }
    },
    watch: {
        formTemplate() {
            if (!this.formTemplate) return
            
            this.$nextTick(function() {
                if (!this.$refs.formWrapper) return

                const formRef = this.$refs.formWrapper?.querySelector('form')

                formRef?.addEventListener('submit', async (event) => {
                    event.preventDefault()

                    const formData = new FormData(event.target)
                    
                    try {
                        const response = await this.$axios.$post(
                            `/wp-json/contact-form-7/v1/contact-forms/${this.acf.form.ID}/feedback`, 
                            formData
                        )
    
                        this.message = response.message
                        this.status = response.status

                        console.log(response)
    
                        formRef.reset()
                    } catch(error) {
                        console.log(error)
                    }
                })
            }) 
        }
    }
}
</script>
 
<style>
/* Style inputs with tailwind */
.formWrapper input[type="text"],
.formWrapper input[type="email"],
.formWrapper input[type="tel"],
.formWrapper input[type="url"],
.formWrapper textarea {
    @apply block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500;
}

/* Style submit button with tailwind */
.formWrapper input[type="submit"] {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none cursor-pointer;
}
</style>