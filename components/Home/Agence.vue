<template>
  <section id="agence">
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
    <article class="container">
      <h2>Non pas seulement une vente mais une <span>agence humaine.</span></h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu amet, a,
        ultrices luctus. Adipiscing ornare magna hendrerit suscipit vitae quis.
        Velit arcu nibh sapien magnis ut pulvinar pharetra, cras ipsum. Sed
        turpis condimentum netus velit euismod etiam. Eu mauris ac cras vitae
        gravida id accumsan porta pulvinar. Ac sapien interdum sit eu dictum
        facilisi. A turpis amet, amet et justo. Enim auctor aliquam amet mi,
        neque amet adipiscing curabitur eget. Natoque condimentum ut dictum sit
        ullamcorper porttitor. Ut convallis tellus, massa sit massa, dictumst
        volutpat vitae proin. Facilisis dui eleifend quisque non pellentesque
        sit vulputate vitae.
      </p>
      <div>
        <div>
          <h3>Ou nous trouver ?</h3>
          <h4>38 avenue de Toulouse, 34070 Montpellier.</h4>
        </div>
        <nuxt-link to="/agence" class="btn">Découvrir l’agence</nuxt-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" src="@/assets/styles/pages/Home/Agence.scss"></style>
