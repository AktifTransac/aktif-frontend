<template>
  <section id="agence">
    <article class="container">
      <p>{{ $t('agency.1.title') }}</p>
      <h2>
        {{ $t('agency.1.subtitle') }}
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor
        lacus massa, hac. Viverra urna et nisl lacus, id viverra dui lacus,
        amet. Porta et porttitor dui est quis mattis lobortis. Arcu metus,
        commodo aliquet in justo, ipsum in feugiat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor
        lacus massa, hac. Viverra urna et nisl lacus, id viverra dui lacus,
        amet. Porta et porttitor dui est quis mattis lobortis. Arcu metus,
        commodo aliquet in justo, ipsum in feugiat.
      </p>
    </article>
    <article>
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
    </article>
    <article>
      <div class="container">
        <h2>{{ $t('agency.2.title') }}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc
          nulla porttitor diam leo adipiscing. Egestas urna, venenatis, ut sit
          quis elementum, a dignissim pharetra. Nisl vulputate amet sit est
          quis. Imperdiet ut orci nunc quis in amet, nibh dolor. Tincidunt elit
          faucibus pharetra turpis volutpat. Viverra bibendum nec at convallis
          sed blandit. Odio felis posuere vitae nibh pellentesque urna ornare
          pulvinar.
        </p>
      </div>
      <img
        src="https://api.aktif-transac.com/assets/agence2.jpg"
        alt="Photo d'un immeuble de type haussmannien"
      />
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style
  scoped
  lang="scss"
  src="@/assets/styles/pages/Agence/Agence.scss"
></style>
