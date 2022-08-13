<template>
  <TrackListButton @click="copiedToClipboard" :bgColor="bgColor" :bgColorHover="bgColorHover">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
    </svg>
  </TrackListButton>

  <TrackListButton :bgColor="bgColor" :bgColorHover="bgColorHover">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clip-rule="evenodd" />
    </svg>
  </TrackListButton>
</template>

<script>
import TrackListButton from "./TrackListButton.vue";

export default {
  data() {
    return {
      overlay: false,
      exiting: false,
      openTab: this.getOpenTab,
    }
  },
  methods: {
    copiedToClipboard() {
      const songLyrics = this.track.lyrics.replaceAll('<br>', '\n')
      navigator.clipboard.writeText(String(songLyrics))
    }
  },
  components: {
    TrackListButton,
  },
  props: ['bgColor', 'album', 'bgColorHover'],
};
</script>