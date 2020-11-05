<template>
  <header>
    <Menu></Menu>
    <section class="container">
      <h1>{{ accroche }}</h1>
    </section>
  </header>
</template>

<script>
import Menu from '@/components/Headers/Menu'
export default {
  components: {
    Menu,
  },
  computed: {
    accroche() {
      const route = this.$route.name
      if (route === 'agence') {
        return 'Aktif Transac votre solution immobilière'
      } else if (route === 'biens') {
        return 'Trouvez votre bien coup de coeur.'
      } else if (route === 'contact') {
        return 'Contact'
      } else {
        return ''
      }
    },
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/layouts/default.scss"></style>
