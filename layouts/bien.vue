<template>
  <div>
    <Menu :color="'#FC5555'"></Menu>
    <Nuxt @rgpd="handleRGPD"></Nuxt>
    <Footer @rgpd="handleRGPD"></Footer>
    <client-only placeholder="Loading">
      <RGPD v-if="displayRGPD" @rgpd="handleRGPD"></RGPD>
    </client-only>
  </div>
</template>

<script>
import Menu from '@/components/Headers/Menu'
import Footer from '~/components/Footer/Footer'
import RGPD from '~/components/RGPD/RGPD'

export default {
  components: {
    Menu,
    Footer,
    RGPD,
  },
  data() {
    return {
      displayRGPD: false,
    }
  },
  mounted() {
    if (!this.$cookies.isKey('rgpd')) {
      this.displayRGPD = !this.displayRGPD
    }
  },
  created() {
    this.$nuxt.$on('rgpd', () => {
      this.handleRGPD()
    })
  },
  methods: {
    handleRGPD() {
      this.$cookies.set('rgpd', true)
      this.displayRGPD = !this.displayRGPD
    },
  },
}
</script>
