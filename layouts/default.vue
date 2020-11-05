<template>
  <div>
    <Header></Header>
    <Nuxt></Nuxt>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Headers/Default'
import Footer from '~/components/Footer/Footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
