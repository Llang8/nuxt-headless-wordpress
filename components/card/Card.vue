<template>
  <div class="w-full shadow-lg">
    <div
      class="border border-gray-400 lg:border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
    >
      <ContentText :body="content" :button="button" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["content", "button"]
};
</script>
