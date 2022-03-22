<template>
  <section id="agence">
    <article class="container">
      <p>{{ $t('agency.1.title') }}</p>
      <h2>
        {{ $t('agency.1.subtitle') }}
      </h2>
      <p>
        {{ $t('agency.1.text.1') }}
      </p>
      <p>
        {{ $t('agency.1.text.2') }}
      </p>
    </article>
    <article>
      <img
        src="https://api.aktif-transac.com/assets/agence.jpg"
        alt="Photo de deux femmes entrain de discuter"
      />
      <!--      <client-only placeholder="Loading">-->
      <!--        <iframe-->
      <!--          id="map"-->
      <!--          frameborder="0"-->
      <!--          style="border: 0"-->
      <!--          :src="-->
      <!--            'https://www.google.com/maps/embed/v1/place?key=' +-->
      <!--            key +-->
      <!--            '&q=AKTIF+TRANSAC,Montpellier+France'-->
      <!--          "-->
      <!--          allowfullscreen-->
      <!--        >-->
      <!--        </iframe>-->
      <!--      </client-only>-->
    </article>
    <!--    <article>-->
    <!--      <div class="container">-->
    <!--        <h2>{{ $t('agency.2.title') }}</h2>-->
    <!--        <p>-->
    <!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc-->
    <!--          nulla porttitor diam leo adipiscing. Egestas urna, venenatis, ut sit-->
    <!--          quis elementum, a dignissim pharetra. Nisl vulputate amet sit est-->
    <!--          quis. Imperdiet ut orci nunc quis in amet, nibh dolor. Tincidunt elit-->
    <!--          faucibus pharetra turpis volutpat. Viverra bibendum nec at convallis-->
    <!--          sed blandit. Odio felis posuere vitae nibh pellentesque urna ornare-->
    <!--          pulvinar.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--      <img-->
    <!--        src="https://api.aktif-transac.com/assets/agence2.jpg"-->
    <!--        alt="Photo d'un immeuble de type haussmannien"-->
    <!--      />-->
    <!--    </article>-->
  </section>
</template>

<script>
export default {
  data() {
    return {
      // key: process.env.MAP_API,
    }
  },
}
</script>

<style
  scoped
  lang="scss"
  src="@/assets/styles/pages/Agence/Agence.scss"
></style>
