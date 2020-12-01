<template>
  <section id="agence">
    <img
      src="https://api.aktif-transac.com/assets/agence.jpg"
      alt="Photo de deux femmes entrain de discuter"
    />
    <client-only placeholder="Loading">
      <GmapMap
        id="map"
        :center="{ lat: 43.5988549, lng: 3.8656149 }"
        :zoom="15"
        map-type-id="roadmap"
      >
        <GmapMarker
          :position="{ lat: 43.5988549, lng: 3.8656149 }"
          :clickable="true"
      /></GmapMap>
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
export default {}
</script>

<style scoped lang="scss" src="@/assets/styles/pages/Home/Agence.scss"></style>
