<template>
  <header :style="image">
    <Menu></Menu>
    <section
      :class="
        ($route.name === 'biens' ? 'biens container' : 'container',
        $route.name === 'agence' ? 'agence container' : 'container')
      "
    >
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
      const lang = this.$i18n.locale
      const route =
        lang === 'fr' ? this.$route.name : this.$route.name.split('-')[1]
      if (route === 'agence') {
        return this.$t('headers.agency')
      } else if (route === 'biens') {
        return this.$t('headers.property')
      } else if (route === 'contact') {
        return this.$t('headers.contact')
      } else if (route === 'plan') {
        return this.$t('headers.plan')
      } else if (route === 'legals') {
        return this.$t('headers.legals')
      } else {
        return ''
      }
    },
    image() {
      const lang = this.$i18n.locale
      const route =
        lang === 'fr' ? this.$route.name : this.$route.name.split('-')[1]
      if (route === 'agence') {
        return "--img: url('https://api.aktif-transac.com/assets/headers-agence.jpg'); --pos-y: 70%"
      } else if (route === 'biens') {
        return "--img: url('https://api.aktif-transac.com/assets/headers-biens.jpg'); --pos-y: 80%"
      } else if (route === 'contact') {
        return "--img: url('https://api.aktif-transac.com/assets/headers-contact.jpg'); --pos-y: 70%"
      } else if (route === 'plan') {
        return "--img: url('https://api.aktif-transac.com/assets/headers-contact.jpg'); --pos-y: 70%"
      } else if (route === 'legals') {
        return "--img: url('https://api.aktif-transac.com/assets/headers-agence.jpg'); --pos-y: 70%"
      } else {
        return "--img: url('https://api.aktif-transac.com/assets/headers-contact.jpg'); --pos-y: 70%"
      }
    },
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/layouts/default.scss"></style>
