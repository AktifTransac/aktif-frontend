<template>
  <footer>
    <section class="container">
      <h2>{{ $t('footer.alert.title') }}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
        volutpat sollicitudin molestie bibendum. Sed curabitur semper faucibus
        commodo sit.
      </p>
      <article>
        <aside>
          <div>
            <button
              :class="[choice === 'Ventes' ? 'active' : '']"
              @click="choice = 'Ventes'"
            >
              {{ $t('footer.alert.sales') }}
            </button>
            <button
              :class="[choice === 'Locations' ? 'active' : '']"
              @click="choice = 'Locations'"
            >
              {{ $t('footer.alert.rentals') }}
            </button>
          </div>
          <button @click="moreFilters = !moreFilters">
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10.2143C0 10.0059 0.0790178 9.80605 0.21967 9.6587C0.360322 9.51135 0.551088 9.42857 0.75 9.42857H5.25C5.44891 9.42857 5.63968 9.51135 5.78033 9.6587C5.92098 9.80605 6 10.0059 6 10.2143C6 10.4227 5.92098 10.6225 5.78033 10.7699C5.63968 10.9172 5.44891 11 5.25 11H0.75C0.551088 11 0.360322 10.9172 0.21967 10.7699C0.0790178 10.6225 0 10.4227 0 10.2143ZM0 5.5C0 5.29162 0.0790178 5.09177 0.21967 4.94442C0.360322 4.79707 0.551088 4.71429 0.75 4.71429H11.25C11.4489 4.71429 11.6397 4.79707 11.7803 4.94442C11.921 5.09177 12 5.29162 12 5.5C12 5.70838 11.921 5.90823 11.7803 6.05558C11.6397 6.20293 11.4489 6.28571 11.25 6.28571H0.75C0.551088 6.28571 0.360322 6.20293 0.21967 6.05558C0.0790178 5.90823 0 5.70838 0 5.5ZM0 0.785714C0 0.57733 0.0790178 0.377481 0.21967 0.230131C0.360322 0.0827805 0.551088 0 0.75 0H17.25C17.4489 0 17.6397 0.0827805 17.7803 0.230131C17.921 0.377481 18 0.57733 18 0.785714C18 0.994099 17.921 1.19395 17.7803 1.3413C17.6397 1.48865 17.4489 1.57143 17.25 1.57143H0.75C0.551088 1.57143 0.360322 1.48865 0.21967 1.3413C0.0790178 1.19395 0 0.994099 0 0.785714Z"
                fill="#FCFCFC"
              />
            </svg>
            <span> {{ $t('footer.alert.filters') }} </span>
          </button>
        </aside>
        <form @submit.prevent="nextStep">
          <div v-show="step === 1">
            <label for="project-select">{{
              $t('footer.alert.project.title')
            }}</label>
            <select id="project-select" v-model="project" name="project">
              <option value="Appartement">
                {{ $t('footer.alert.project.apartment') }}
              </option>
              <option value="Maison">
                {{ $t('footer.alert.project.house') }}
              </option>
              <option value="Magasin">
                {{ $t('footer.alert.project.shop') }}
              </option>
            </select>
          </div>
          <div v-show="step === 1">
            <label for="localization">{{ $t('footer.alert.where') }}</label>
            <input
              id="localization"
              v-model="localization"
              type="text"
              placeholder="Montpellier"
            />
          </div>
          <div v-show="step === 2">
            <label for="name">{{ $t('footer.alert.contact.name') }}</label>
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Jean Dupont"
            />
          </div>
          <div v-show="step === 2">
            <label for="mail">{{ $t('footer.alert.contact.mail') }}</label>
            <input
              id="mail"
              v-model="mail"
              type="mail"
              placeholder="exemple@aktif.com"
            />
          </div>
          <div v-show="step === 2 && displayPhone">
            <label for="phone">{{ $t('footer.alert.contact.phone') }}</label>
            <input
              id="phone"
              v-model="phone"
              type="tel"
              placeholder="Facultatif"
            />
          </div>
          <div v-show="handleFilters ? handleFilters : moreFilters">
            <label for="pièces">{{ $t('footer.alert.rooms') }}</label>
            <input v-model="pieces" type="number" placeholder="5" />
          </div>
          <div v-show="handleFilters ? handleFilters : moreFilters">
            <label for="chambres">{{ $t('footer.alert.bedrooms') }}</label>
            <input v-model="chambres" type="number" placeholder="2" />
          </div>
          <div v-show="handleFilters ? handleFilters : moreFilters">
            <label for="budget">{{ $t('footer.alert.budget') }}</label>
            <input
              v-model="budget.min"
              v-currency="{
                allowNegative: false,
                autoDecimalMode: true,
                precision: 0,
              }"
              placeholder="500 €"
            />
            <input
              v-model="budget.max"
              v-currency="{
                allowNegative: false,
                autoDecimalMode: true,
                precision: 0,
              }"
              placeholder="150 000 €"
            />
          </div>
          <div v-show="handleFilters ? handleFilters : moreFilters">
            <label for="surface">{{ $t('footer.alert.area') }}</label>
            <input
              v-model="surface.min"
              v-currency="{
                allowNegative: false,
                autoDecimalMode: true,
                currency: { prefix: '', suffix: ' m²' },
                precision: 0,
              }"
              placeholder="30 m²"
            />
            <input
              v-model="surface.max"
              v-currency="{
                allowNegative: false,
                autoDecimalMode: true,
                currency: { prefix: '', suffix: ' m²' },
                precision: 0,
              }"
              placeholder="100 m²"
            />
          </div>
          <button @click.prevent="nextStep">
            <svg
              width="26"
              height="8"
              viewBox="0 0 26 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5L25 4.5V3.5L0 3.5L0 4.5Z"
                fill="#FCFCFC"
              />
            </svg>
          </button>
        </form>
        <aside v-show="step === 2">
          <input v-model="RGPD" type="checkbox" />
          <p>
            {{ $t('footer.alert.rgpd.text') }}<br />
            <nuxt-link to="/legals">
              {{ $t('footer.alert.rgpd.link') }}
            </nuxt-link>
          </p>
        </aside>
      </article>
    </section>
    <section class="container">
      <article>
        <p>{{ $t('footer.infos.agency') }}</p>
        <h3>Aktif transac</h3>
        <h3>
          38 avenue de toulouse<br />
          34070 Montpellier
        </h3>
      </article>
      <article>
        <p>{{ $t('footer.infos.contact') }}</p>
        <h3>contact.aktif@gmail.com</h3>
        <h3>+33467171806</h3>
      </article>
      <article>
        <p>{{ $t('footer.infos.infos') }}</p>
        <h3>
          <nuxt-link :to="$i18n.path('plan')">
            {{ $t('footer.infos.sitemap') }}
          </nuxt-link>
        </h3>
        <h3>
          <nuxt-link :to="$i18n.path('plan')">
            {{ $t('footer.infos.hono') }}
          </nuxt-link>
        </h3>
      </article>
      <article>
        <p>
          <nuxt-link :to="$i18n.path('legals')">
            {{ $t('footer.infos.legals') }}
          </nuxt-link>
        </p>
        <p @click="$emit('rgpd')">{{ $t('footer.infos.rgpd') }}</p>
      </article>
    </section>
    <section class="container">
      <p>
        {{ $t('footer.infos.copyright.1') }}
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.3288 4.80723H7.48474C7.42711 4.80723 7.37965 4.76 7.37965 4.70265C7.37965 3.23855 6.18643 2.05108 4.71864 2.05108C3.25084 2.05108 2.05763 3.24193 2.05763 4.70265C2.05763 4.76 2.01017 4.80723 1.95254 4.80723H0.105085C0.0474576 4.80723 0 4.76 0 4.70265C0 2.10843 2.11525 0 4.71525 0C7.31525 0 9.4305 2.10843 9.4305 4.70265C9.43389 4.76 9.38643 4.80723 9.3288 4.80723Z"
            fill="#FCFCFC"
          />
          <path
            d="M7.90519 14C5.30519 14 3.18994 11.8916 3.18994 9.29735C3.18994 9.24 3.2374 9.19277 3.29503 9.19277H5.13909C5.19672 9.19277 5.24418 9.24 5.24418 9.29735C5.24418 10.7614 6.4374 11.9489 7.90519 11.9489C9.37299 11.9489 10.5662 10.7581 10.5662 9.29735V4.70265C10.5662 2.10843 12.6815 0 15.2848 0C17.8882 0 20.0001 2.10843 20.0001 4.70265C20.0001 4.76 19.9526 4.80723 19.895 4.80723H18.0509C17.9933 4.80723 17.9459 4.76 17.9459 4.70265C17.9459 3.23855 16.7526 2.05108 15.2848 2.05108C13.817 2.05108 12.6238 3.24193 12.6238 4.70265V9.30072C12.6238 11.8916 10.5086 14 7.90519 14Z"
            fill="#FCFCFC"
          />
        </svg>
        {{ $t('footer.infos.copyright.2') }}
      </p>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      displayMenu: false,
      choice: 'Ventes',
      project: 'Appartement',
      localization: '',
      pieces: '',
      chambres: '',
      budget: {
        min: '',
        max: '',
      },
      surface: {
        min: '',
        max: '',
      },
      moreFilters: false,
      name: '',
      mail: '',
      phone: '',
      RGPD: false,
      step: 1,
    }
  },
  computed: {
    handleFilters() {
      if (process.client) {
        if (window.innerWidth >= 1280) {
          if (this.step === 1) {
            return true
          } else {
            return false
          }
        } else {
          return this.moreFilters
        }
      } else {
        return this.moreFilters
      }
    },
    displayPhone() {
      if (process.client) {
        if (window.innerWidth >= 1280) {
          if (this.step === 2) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        return false
      }
    },
  },
  methods: {
    nextStep() {
      if (this.step < 2) {
        this.step++
      } else if (this.RGPD) {
        this.step++
        setTimeout(() => {
          this.step = 1
        }, 1000)
      }
    },
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/layouts/footer.scss"></style>
