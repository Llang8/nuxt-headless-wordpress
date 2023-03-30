<template>
  <div class="w-full lg:flex shadow-lg">
    <div
      class="h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded-l text-center overflow-hidden"
      :style="imageBg"
    ></div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-8 flex flex-col justify-between leading-normal"
    >
        <ContentText :body="content" :button="button" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageUrl', 'content', 'button'],
  computed: {
    imageBg() {
        return {
            backgroundImage: `url(${this.imageUrl})`
        }
    }
  }
}
</script>