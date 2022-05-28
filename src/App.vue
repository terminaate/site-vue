<template>
  <div>
    <LoaderScreen @ended="loaderScreenEnded = true" :player="player"/>
    <MainScreen @player-ready="player = $event" :loader-screen-ended="loaderScreenEnded"/>
  </div>
</template>

<script>
import LoaderScreen from "./screens/LoaderScreen.vue";
import MainScreen from "./screens/MainScreen.vue";

export default {
  name: "app",
  components: {MainScreen, LoaderScreen},
  data() {
    return {
      player: null,
      loaderScreenEnded: false
    }
  }
}
</script>

<style>

</style>