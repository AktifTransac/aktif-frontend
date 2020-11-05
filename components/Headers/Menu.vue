<template>
  <section class="container">
    <nuxt-link to="/">
      <svg
        width="50"
        height="41"
        viewBox="0 0 50 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :fill="color"
          d="M49.5256 40.5293L33.3909 0.470703H27.364H22.6178H16.6034L0.46875 40.5293H11.2294L24.9909 6.36678L38.765 40.5293H49.5256Z"
        />
        <path
          :fill="color"
          d="M49.5257 41H38.7651C38.5767 41 38.4009 40.8885 38.3256 40.7027L25.0035 7.63021L11.6689 40.7027C11.5936 40.8761 11.4178 41 11.2294 41H0.468841C0.305611 41 0.167493 40.9257 0.0796004 40.7894C-0.00829259 40.6656 -0.0208487 40.4921 0.0293758 40.3559L16.164 0.297281C16.2393 0.123867 16.4151 0 16.6035 0H33.391C33.5794 0 33.7552 0.11148 33.8305 0.297281L49.9651 40.3435C50.0279 40.4921 50.0028 40.6532 49.9149 40.777C49.827 40.9133 49.6889 41 49.5257 41ZM39.079 40.0586H48.8225L33.0646 0.94139H16.9299L1.17198 40.0586H10.9155L24.5515 6.18097C24.7022 5.82175 25.2923 5.82175 25.4304 6.18097L39.079 40.0586Z"
        />
      </svg>
    </nuxt-link>
    <nav
      id="btn-menu"
      :style="{ color: color, borderColor: color }"
      @click="displayMenu = !displayMenu"
    >
      Menu
    </nav>
    <transition :name="transitionName">
      <div
        v-show="displayMenu"
        id="menu-wrapper"
        @click.self="displayMenu = !displayMenu"
      >
        <nav id="menu">
          <transition name="fade">
            <svg
              v-show="displayMenu"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="displayMenu = !displayMenu"
            >
              <path
                d="M27.2797 30L15.0096 17.7185L2.73955 30L0 27.2622L12.2894 15L0 2.73779L2.73955 0L15.0096 12.2815L27.2797 0.0192806L30 2.73779L17.7299 15L30 27.2622L27.2797 30Z"
                fill="#FC5555"
              />
            </svg>
          </transition>
          <transition name="fade">
            <div v-show="displayMenu">
              <p>Menu</p>
              <ul>
                <li>
                  <nuxt-link to="/">Accueil</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/biens">Biens</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/agence">Agence</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/selections">Sélection(s)</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
              </ul>
            </div>
          </transition>
          <transition name="fade">
            <div v-show="displayMenu">
              <p>Contact</p>
              <h3>contact.aktif@gmail.com</h3>
              <h3>+33467171806</h3>
            </div>
          </transition>
        </nav>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#FCFCFC',
    },
  },
  data() {
    return {
      transitionName: 'slide',
      displayMenu: false,
    }
  },
  watch: {
    $route(to, from) {
      this.transitionName = 'none'
      this.displayMenu = false
    },
  },
  updated() {
    this.transitionName = 'slide'
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/layouts/menu.scss"></style>
