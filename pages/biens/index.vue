<template>
  <div>
    <Filters :filters.sync="filters" @filter="filter"></Filters>
    <Goods :filteredgoods="filteredGoods"></Goods>
  </div>
</template>

<script>
import Filters from '@/components/Goods/Filters'
import Goods from '@/components/Goods/Goods'

export default {
  components: {
    Filters,
    Goods,
  },
  async fetch({ store }) {
    if (!store.state.goods.length) {
      await store.dispatch('getGoods')
    }
  },
  data() {
    return {
      filters: {
        prestations: {
          vente: false,
          location: false,
        },
        type: {
          maison: false,
          appartement: false,
          terrain: false,
          boutique: false,
          parking: false,
          autre: false,
        },
        budget: {
          min: '',
          max: '',
        },
        surface: {
          min: '',
          max: '',
        },
        ref: '',
        localization: '',
        tri: 'date_desc',
      },
      goods: this.$store.getters.goods.slice(),
    }
  },
  computed: {
    filteredGoods() {
      let goods = this.goods.slice()
      if (this.filters.tri) {
        switch (this.filters.tri) {
          case 'date_desc':
          case 'date_asc':
            goods.sort((a, b) => {
              return (
                new Date(b.DATE_OFFRE._cdata) - new Date(a.DATE_OFFRE._cdata)
              )
            })
            if (this.filters.tri === 'date_asc') {
              goods.reverse()
            }
            break
          case 'prix_desc':
          case 'prix_asc':
            goods.sort((a, b) => {
              if (b.PRIX && a.PRIX) {
                return Number(b.PRIX._cdata) - Number(a.PRIX._cdata)
              } else if (b.LOYER && a.LOYER) {
                return Number(b.LOYER._cdata) - Number(a.LOYER._cdata)
              } else if (b.PRIX && a.LOYER) {
                return Number(b.PRIX._cdata) - Number(a.LOYER._cdata)
              } else {
                return Number(b.LOYER._cdata) - Number(a.PRIX._cdata)
              }
            })
            if (this.filters.tri === 'prix_asc') {
              goods.reverse()
            }
            break
          case 'surface_desc':
          case 'surface_asc':
            goods.sort((a, b) => {
              if (
                parseFloat(a.SURF_HAB._cdata) > parseFloat(b.SURF_HAB._cdata) ||
                parseFloat(a.SURFACEPROFESSIONNELLE._cdata) >
                  parseFloat(b.SURFACEPROFESSIONNELLE._cdata) ||
                parseFloat(a.SURF_HAB._cdata) >
                  parseFloat(b.SURFACEPROFESSIONNELLE._cdata) ||
                parseFloat(a.SURFACEPROFESSIONNELLE._cdata) >
                  parseFloat(b.SURF_HAB._cdata)
              ) {
                return -1
              } else if (
                parseFloat(a.SURF_HAB._cdata) < parseFloat(b.SURF_HAB._cdata) ||
                parseFloat(a.SURFACEPROFESSIONNELLE._cdata) <
                  parseFloat(b.SURFACEPROFESSIONNELLE._cdata) ||
                parseFloat(a.SURF_HAB._cdata) <
                  parseFloat(b.SURFACEPROFESSIONNELLE._cdata) ||
                parseFloat(a.SURFACEPROFESSIONNELLE._cdata) <
                  parseFloat(b.SURF_HAB._cdata)
              ) {
                return 1
              } else {
                return 0
              }
            })
            if (this.filters.tri === 'surface_asc') {
              goods.reverse()
            }
            break
        }
      }
      if (this.filters.prestations) {
        if (
          this.filters.prestations.vente &&
          !this.filters.prestations.location
        ) {
          goods = goods.filter((el) => el.TYPE_OFFRE._cdata <= 7)
        } else if (
          !this.filters.prestations.vente &&
          this.filters.prestations.location
        ) {
          goods = goods.filter((el) => el.TYPE_OFFRE._cdata >= 11)
        } else {
          goods = goods.filter((el) => el.TYPE_OFFRE._cdata <= 20)
        }
      }
      if (this.filters.type) {
        const categories = []
        if (this.filters.type.maison) {
          categories.push('2', '12')
        }
        if (this.filters.type.appartement) {
          categories.push('1', '11')
        }
        if (this.filters.type.terrain) {
          categories.push('3')
        }
        if (this.filters.type.boutique) {
          categories.push('5', '6', '13')
        }
        if (this.filters.type.parking) {
          categories.push('7', '14')
        }
        if (this.filters.type.autre) {
          categories.push('19')
        }
        if (
          (this.filters.type.maison &&
            this.filters.type.appartement &&
            this.filters.type.terrain &&
            this.filters.type.boutique &&
            this.filters.type.parking &&
            this.filters.type.autre) ||
          (!this.filters.type.maison &&
            !this.filters.type.appartement &&
            !this.filters.type.terrain &&
            !this.filters.type.boutique &&
            !this.filters.type.parking &&
            !this.filters.type.autre)
        ) {
          return (goods = goods.filter((el) => el.TYPE_OFFRE._cdata <= 20))
        } else {
          goods = goods.filter((el) => {
            return (
              el.TYPE_OFFRE._cdata ===
              categories.find((cat) => cat === el.TYPE_OFFRE._cdata)
            )
          })
        }
      }
      return goods
    },
  },
  mounted() {
    if (Object.keys(this.$route.query).length) {
      const route = this.$route.query
      if (route.choice === 'Ventes') {
        this.filters.prestations.vente = true
      } else if (route.choice === 'Locations') {
        this.filters.prestations.location = true
      }

      if (route.projet === 'Appartement') {
        this.filters.type.appartement = true
      } else if (route.projet === 'Maison') {
        this.filters.type.maison = true
      } else if (route.projet === 'Magasin') {
        this.filters.type.boutique = true
      } else if (route.projet === 'AllHabitation') {
        this.filters.type.maison = true
        this.filters.type.appartement = true
      }

      if (route.localization) {
        this.filters.localization = route.localization
      }

      if (route.budget.min) {
        this.filters.budget.min = route.budget.min
      }
      if (route.budget.max) {
        this.filters.budget.max = route.budget.max
      }
      if (route.surface.min) {
        this.filters.surface.min = route.surface.min
      }
      if (route.surface.max) {
        this.filters.surface.max = route.surface.max
      }
    }
    this.filter()
  },
  methods: {
    filter() {
      this.goods = this.$store.getters.goods.slice()
      if (this.filters.budget) {
        const min = parseFloat(this.filters.budget.min.replace(/\s+/g, '')) || 0
        const max =
          parseFloat(this.filters.budget.max.replace(/\s+/g, '')) || Infinity
        if (this.filters.budget.min !== '' || this.filters.budget.max !== '') {
          this.goods = this.goods.filter((el) => {
            if (el.LOYER) {
              return el.LOYER._cdata >= min && el.LOYER._cdata <= max
            } else {
              return el.PRIX._cdata >= min && el.PRIX._cdata <= max
            }
          })
        }
      }
      if (this.filters.surface) {
        const min =
          parseFloat(this.filters.surface.min.replace(/\s+/g, '')) || 0
        const max =
          parseFloat(this.filters.surface.max.replace(/\s+/g, '')) || Infinity

        if (
          this.filters.surface.min !== '' ||
          this.filters.surface.max !== ''
        ) {
          this.goods = this.goods.filter((el) => {
            if (el.SURF_HAB) {
              return el.SURF_HAB._cdata >= min && el.SURF_HAB._cdata <= max
            } else {
              return (
                el.SURFACEPROFESSIONNELLE._cdata >= min &&
                el.SURFACEPROFESSIONNELLE._cdata <= max
              )
            }
          })
        }
      }
      if (this.filters.ref) {
        if (this.filters.ref !== '') {
          this.goods = this.goods.filter((el) =>
            el.NO_DOSSIER._cdata.startsWith(this.filters.ref)
          )
        }
      }
      if (this.filters.localization) {
        if (this.filters.localization !== '') {
          this.goods = this.goods.filter((el) => {
            if (el.VILLE_OFFRE) {
              const offre = el.VILLE_OFFRE._cdata
              if (offre) {
                return offre
                  .toLowerCase()
                  .includes(this.filters.localization.toLowerCase())
              }
            } else {
              const offre = el.VILLE_AGENCE._cdata
              if (offre) {
                return offre
                  .toLowerCase()
                  .includes(this.filters.localization.toLowerCase())
              }
            }
          })
        }
      }
    },
  },
}
</script>
