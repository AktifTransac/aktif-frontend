<template>
  <div>
    <Menu :color="'#FC5555'"></Menu>
    <Nuxt></Nuxt>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from '@/components/Headers/Menu'
import Footer from '~/components/Footer/Footer'

export default {
  components: {
    Menu,
    Footer,
  },
}
</script>
