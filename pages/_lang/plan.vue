<template>
  <div id="plan">
    <nuxt-link :to="$i18n.path('')">
      {{ $t('links.home') }}
    </nuxt-link>
    <nuxt-link :to="$i18n.path('agence')">
      {{ $t('links.agency') }}
    </nuxt-link>
    <nuxt-link :to="$i18n.path('selections')">
      {{ $t('links.selection') }}
    </nuxt-link>
    <nuxt-link :to="$i18n.path('contact')">
      {{ $t('links.contact') }}
    </nuxt-link>
    <nuxt-link :to="$i18n.path('biens')">
      {{ $t('links.property') }}
    </nuxt-link>
    <a
      href="https://api.aktif-transac.com/assets/BAREMEHONORAIRE.pdf"
      rel="noreferrer noopener"
      target="_blank"
    >
      {{ $t('footer.infos.hono') }}
    </a>
    <nuxt-link :to="$i18n.path('legals')">
      {{ $t('footer.infos.legals') }}
    </nuxt-link>
    <p @click="$nuxt.$emit('rgpd')">{{ $t('footer.infos.rgpd') }}</p>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: `${this.$t('headers.plan')} - Aktif Transac`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.plan'),
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
#plan {
  @apply mx-160;
  @apply mt-60;
  @apply grid;
  @apply grid-cols-4;
  @apply gap-y-30;
  @apply gap-x-60;
}

a,
p {
  @apply cursor-pointer;
  @apply no-underline;
  @apply text-40;
  @apply text-grey-dark;

  &:hover {
    @apply text-red;
    @apply underline;
  }

  &:nth-child(6),
  &:nth-child(7) {
    @apply mt-60;
    @apply row-start-3;
    @apply col-span-2;
  }

  &:nth-child(8) {
    @apply row-start-4;
    @apply col-span-4;
  }
}
</style>
