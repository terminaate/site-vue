<template>
  <YoutubeVue3
      ref="youtube"
      :videoid="videoId"
      :loop="true"
      class="background_video"
      width="100%"
      height="100%"
      :controls="0"
      :autoplay="0"
      :modestbranding="0"
  />
</template>

<script>
import {YoutubeVue3} from "youtube-vue3";

export default {
  name: "background-player",
  components: {YoutubeVue3},
  data() {
    return {
      videoId: "QKgm7TNDbPk"
    }
  },
  mounted() {
    this.$emit("ready", this.$refs.youtube.player);
    this.$refs.youtube.player.setVolume(10);
  }
}
</script>

<style scoped>
iframe {
  display: none;
}
</style>