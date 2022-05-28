<template>
  <div class="screen__main">
    <div class="foreground">
      <div class="center_text">
        <span class="logo_text">Termina<span>a</span>te</span>
        <span class="desc_text">what are you doing here?</span>
        <span class="aboutme_link">about me</span>
      </div>
      <div class="social_links">
        <a href="https://github.com/terminaate" rel="noreferrer" target="_blank" class="github_link">
          <img src="../assets/icons/github.svg" alt=""/>
        </a>
        <div @click="copyDiscordLink" class="discord_link">
          <img src="../assets/icons/discord.svg" alt=""/>
        </div>
      </div>
      <div class="player_controls">
        <PlayerControls :loader-screen-ended="loaderScreenEnded" :player="player"/>
      </div>
    </div>
    <div class="background">
      <BackgroundPlayer @ready="onPlayerReady"/>
    </div>
  </div>
</template>

<script>
import BackgroundPlayer from "../components/Player.vue";
import PlayerControls from "../components/PlayerControls.vue";

export default {
  components: {PlayerControls, BackgroundPlayer},
  props: {
    loaderScreenEnded: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      player: null
    }
  },
  methods: {
    copyDiscordLink() {
      navigator.clipboard.writeText("Terminaate#9274")
          .then(() => alert("Discord tag has been copied!"))
          .catch(e => {
            alert("I couldn't copy the Discord tag.")
            console.log(e)
          })
    },
    onPlayerReady(player) {
      this.player = player;
      this.$emit('player-ready', player);
    }
  }
}
</script>

<style scoped>
.screen__main {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: var(--background-primary);
}

.background,
.foreground {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.foreground {
  background-color: var(--background-secondary);
  z-index: 50;
}

.background {
  z-index: -99;
}


.aboutMeCard {
  position: absolute;
  height: 60%;
  width: 50%;
  min-width: 300px;
  border-radius: 13px;
  background-color: var(--background-primary);
  transform: translateX(200%);
  transition: 1s;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.aboutMeCard[data-visible="true"] {
  transform: translateX(0);
}

.backButton {
  position: absolute;
  bottom: 20px;
  font-size: 30px;
  text-decoration: overline;
  cursor: pointer;
}

.center_text {
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 1s;
}

.aboutMeCard[data-visible="true"] + .center_text {
  transform: translateX(-100vw);
}


.logo_text {
  font-family: var(--font-logo);
  font-size: 65px;
  user-select: none;
}

.logo_text span {
  text-decoration: line-through;
}

.desc_text {
  font-size: 14px;
  font-family: var(--font-secondary);
}

.aboutme_link {
  font-family: var(--font-secondary);
  font-size: 14px;
  margin-top: 20px;
  user-select: none;
  cursor: pointer;
  text-decoration: underline;
}

.social_links {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 27px;
}

.discord_link,
.github_link {
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-inline: 5px;
  transition: 0.2s transform;
}

.discord_link:hover,
.github_link:hover {
  transform: translateY(-16%);
}



.player_controls {
  position: absolute;
  top: 2rem;
  left: 2rem;
}
</style>