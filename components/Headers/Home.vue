<template>
  <header>
    <Menu></Menu>
    <section class="container">
      <p>Devenez propriètaire sur Montpellier et ses alentours.</p>
      <h1>
        <a href="#biens"> Ventes & Locations </a>
      </h1>
      <h1>
        <a href="#gestion">Gestion</a>
      </h1>
      <h1>
        <a href="#estimation">Estimation</a>
      </h1>
    </section>
    <section class="container">
      <article>
        <div>
          <button
            :class="[choice === 'Ventes' ? 'active' : '']"
            @click="choice = 'Ventes'"
          >
            Ventes
          </button>
          <button
            :class="[choice === 'Locations' ? 'active' : '']"
            @click="choice = 'Locations'"
          >
            Locations
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
          <span>Plus de filtres</span>
        </button>
      </article>
      <form @submit.prevent="search">
        <div>
          <label for="project-select">Votre projet</label>
          <select id="project-select" v-model="project" name="project">
            <option value="All">Tout type</option>
            <optgroup label="Habitation">
              <option value="Appartement">Appartement</option>
              <option value="Maison">Maison</option>
              <option value="AllHabitation">Tout type d'habitation</option>
            </optgroup>
            <optgroup label="Autre">
              <option value="Magasin">Magasin</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label for="localization">Où se situe t-il ?</label>
          <input
            id="localization"
            v-model="localization"
            type="text"
            placeholder="Montpellier"
            list="villes"
          />
          <datalist id="villes">
            <option value="Montpellier"></option>
            <option value="Rodez"></option>
          </datalist>
        </div>
        <div v-show="moreFilters">
          <label for="budget">Budget</label>
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
        <div v-show="moreFilters">
          <label for="surface">Surface</label>
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
        <button @click.prevent="search">
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
    </section>
  </header>
</template>

<script>
import Menu from '@/components/Headers/Menu'
export default {
  components: {
    Menu,
  },
  data() {
    return {
      choice: '',
      project: 'All',
      localization: '',
      budget: {
        min: '',
        max: '',
      },
      surface: {
        min: '',
        max: '',
      },
      moreFilters: false,
    }
  },
  methods: {
    search() {
      this.$router.push({
        path: '/biens',
        query: {
          choice: this.choice,
          projet: this.project,
          localization: this.localization,
          budget: this.budget,
          surface: this.surface,
        },
      })
    },
  },
}
</script>

<style scoped lang="scss" src="@/assets/styles/layouts/home.scss"></style>
