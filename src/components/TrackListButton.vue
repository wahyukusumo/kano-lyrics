<template>
  <div class="flex flex-wrap">
    <div class="w-full text-center">
      <button :disabled="!isDisabled" :class="[height, width, bgColor, bgColorHover,
        {'bg-neutral-400': !isDisabled, 'hover:bg-neutral-400': !isDisabled}]"
        ref="btnRef" v-on:mouseenter="toggleTooltip()"
        v-on:mouseleave="toggleTooltip()" type="button" @click="changeMsg()"
        class="p-1 flex-initial rounded flex items-center justify-center shadow-lg transition duration-200 ease-in-out">
        <slot />
      </button>

      <div ref="tooltipRef" v-bind:class="{ 'hidden': !tooltipShow, 'block': tooltipShow }"
        class="bg-neutral-600 border-0 block z-60 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded">
        <div>
          <div class="text-white p-3">
            {{ setMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      tooltipShow: false,
      setMessage: this.message
    }
  },
  methods: {
    changeMsg() {
      this.setMessage = this.messageClicked
      setTimeout(() => this.setMessage = this.message, 300);
    },
    toggleTooltip: function(){
      if(this.tooltipShow){
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        createPopper(this.$refs.btnRef, this.$refs.tooltipRef, {
          placement: "top"
        });
      }
    }
  },
  props: ['height', 'width', 'bgColor', 'bgColorHover', 'message', 'messageClicked', 'isDisabled'],
};
</script>