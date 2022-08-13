<template>
  <div class="flex flex-col flex-initial justify-start w-full truncate">
    <div :class="[setHeight, setBgColor, setBgColorHover, {'rounded-t': active, 'rounded': !active, 'bg-neutral-300': active}]"
      class="cursor-pointer p-4 flex flex-initial justify-start items-center shadow-lg"
      @click="toggleAccordion">

      <div class="pr-2">
        <span class="down-Arrow" v-show="!active">&#9660;</span>
        <span class="up-Arrow" v-show="active">&#9650;</span>
      </div>
      <h3 class="text-base font-normal">{{ title }}</h3>
    </div>

    <div class="mytransition bg-neutral-100/70 rounded-b text-base w-full px-4">
      <slot />
    </div>
  </div>
</template>

<script>
import TrackListButton from "./TrackListButton.vue";

export default {
  data() {
    return {
      setHeight: this.height,
      setBgColor: this.bgColor,
      setBgColorHover: this.bgColorHover,
      active: false,
    };
  },
  methods: {
    toggleAccordion(event) {
      this.active = !this.active

      const titleButton = event.currentTarget
      const panel = titleButton.nextElementSibling

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px'
      }
    }
  },
  components: {
    TrackListButton
  },
  props: ['title', 'height', 'bgColor', 'bgColorHover'],
};
</script>