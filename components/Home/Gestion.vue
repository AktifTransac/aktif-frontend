<template>
  <section id="gestion">
    <img
      src="https://api.aktif-transac.com/assets/gestion.jpg"
      alt="Photo d'une réunion avec un livre, un téléphone portable et un ordinateur"
    />
    <article class="container">
      <h2>
        {{ $t('home.management.title') }}
        <span>{{ $t('home.management.span') }}</span>
      </h2>
      <p>
        {{ $t('home.management.text1') }}
      </p>
      <p>
        {{ $t('home.management.text2') }}
      </p>
      <p>
        {{ $t('home.management.text3') }}
      </p>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" src="@/assets/styles/pages/Home/Gestion.scss"></style>
