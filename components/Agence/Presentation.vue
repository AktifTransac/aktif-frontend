<template>
  <section id="agence">
    <article class="container">
      <p>à propos de notre agence</p>
      <h2>
        Une agence humaine et réactive à votre service pour tout besoin
        immobilier.
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
      <img src="~/assets/images/test.jpg" alt="test" />
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
      <h2 class="container">Un duo gagnant depuis plus de 15 ans.</h2>
      <p class="container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nunc nulla
        porttitor diam leo adipiscing. Egestas urna, venenatis, ut sit quis
        elementum, a dignissim pharetra. Nisl vulputate amet sit est quis.
        Imperdiet ut orci nunc quis in amet, nibh dolor. Tincidunt elit faucibus
        pharetra turpis volutpat. Viverra bibendum nec at convallis sed blandit.
        Odio felis posuere vitae nibh pellentesque urna ornare pulvinar.
      </p>
      <img src="~/assets/images/test.jpg" alt="test" />
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
