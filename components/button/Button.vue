<template>
  <div :class="buttonWrapperClasses">
    <component
      :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
      :to="to"
      :href="href"
      :class="buttonClasses({ intent, size, extendedClass })"
      :target="href ? '_blank' : ''"
      @click="$emit('click')"
    >
      <slot />
    </component>
  </div>
</template>

<script>
import { cva } from "class-variance-authority";

export default {
  props: ["to", "href", "intent", "size", "extendedClass", "align"],
  data: () => ({
    buttonClasses: cva(
      [
        "rounded",
        "font-bold",
        "hover:scale-105",
        "active:scale-105",
        "transition",
        "duration-200",
        "ease-in-out",
        "inline-block",
        "cursor-pointer"
      ],
      {
        variants: {
          intent: {
            primary: [
              "bg-primary-default",
              "text-white",
              "border-transparent",
              "hover:bg-primary-dark",
            ],
            secondary: [
              "bg-secondary-default",
              "text-white",
              "border-transparent",
              "hover:bg-secondary-dark",
            ],
            text: ["bg-transparent", "text-black", "hover:bg-gray-100"],
          },
          size: {
            small: ["text-md", "py-1", "px-2"],
            medium: ["text-lg", "py-2", "px-3"],
            large: ["text-xlg", "py-3", "px-4"],
          },
        },
        defaultVariants: {
          intent: "primary",
          size: "medium",
        },
      }
    ),
  }),
  computed: {
    buttonWrapperClasses() {
      let classes = "mt-4 "
      if (this.align === "center") {
        classes += "flex justify-center"
      } else if (this.align === "right") {
        classes += "flex justify-end"
      } else {
        classes += ""
      }
      return classes
    },
  }
};
</script>
