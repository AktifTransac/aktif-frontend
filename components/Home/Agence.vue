<template>
  <section id="agence">
    <img
      src="https://api.aktif-transac.com/assets/agence.jpg"
      alt="Photo de deux femmes entrain de discuter"
    />
    <client-only placeholder="Loading">
      <iframe
        id="map"
        frameborder="0"
        style="border: 0"
        :src="
          'https://www.google.com/maps/embed/v1/place?key=' +
          key +
          '&q=AKTIF+TRANSAC,Montpellier+France'
        "
        allowfullscreen
      >
      </iframe>
    </client-only>
    <article class="container">
      <h2>
        {{ $t('home.agency.title') }} <span>{{ $t('home.agency.span') }}</span>
      </h2>
      <p>
        {{ $t('home.agency.text1') }}<br />
        {{ $t('home.agency.text2') }}
      </p>
      <div>
        <div>
          <h3>{{ $t('home.agency.find') }}</h3>
          <h4>38 avenue de Toulouse, 34070 Montpellier.</h4>
        </div>
        <nuxt-link to="/agence" class="btn">
          {{ $t('home.agency.btn') }}
        </nuxt-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      key: process.env.MAP_API,
    }
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/pages/Home/Agence.scss"></style>
