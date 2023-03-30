<template>
  <div class="w-full shadow-lg">
    <div
      class="h-60 w-full flex-none bg-cover rounded-t text-center overflow-hidden"
      :style="imageBg"
    ></div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-gray-400 bg-white rounded rounded-t-none p-8 flex flex-col justify-between leading-normal"
    >
      <ContentText :body="content" :button="button" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageUrl", "content", "button"],
  computed: {
    imageBg() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
      };
    },
  },
};
</script>
