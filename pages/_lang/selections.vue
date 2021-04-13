<template>
  <div>
    <Number></Number>
    <Filters :filters.sync="filters" @filter="filter"></Filters>
    <Goods :filteredgoods="filteredGoods"></Goods>
  </div>
</template>

<script>
import Number from '@/components/Selections/Number'
import Filters from '@/components/Selections/Filters'
import Goods from '@/components/Selections/Goods'

export default {
  layout: 'bien',
  components: {
    Number,
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
      goods: this.$store.getters.goodsLiked.slice(),
    }
  },
  computed: {
    filteredGoods() {
      let goods = this.goods.slice()
      goods = goods.filter((el) =>
        this.$store.state.likes.includes(el.INFO_GENERALES.AFF_NUM._text)
      )
      if (this.filters.tri) {
        switch (this.filters.tri) {
          case 'date_desc':
          case 'date_asc':
            goods.sort((a, b) => {
              return (
                new Date(b.INFO_GENERALES.DATE_CREATION._text) -
                new Date(a.INFO_GENERALES.DATE_CREATION._text)
              )
            })
            if (this.filters.tri === 'date_asc') {
              goods.reverse()
            }
            break
          case 'prix_desc':
          case 'prix_asc':
            goods.sort((a, b) => {
              if (b.VENTE.PRIX && a.VENTE.PRIX) {
                return (
                  parseFloat(b.VENTE.PRIX._text) -
                  parseFloat(a.VENTE.PRIX._text)
                )
              } else if (b.LOCATION.LOYER && a.LOCATION.LOYER) {
                return (
                  parseFloat(b.LOCATION.LOYER._text) -
                  parseFloat(a.LOCATION.LOYER._text)
                )
              } else if (b.VENTE.PRIX && a.LOCATION.LOYER) {
                return (
                  parseFloat(b.VENTE.PRIX._text) -
                  parseFloat(a.LOCATION.LOYER._text)
                )
              } else {
                return (
                  parseFloat(b.LOCATION.LOYER._text) -
                  parseFloat(a.VENTE.PRIX._text)
                )
              }
            })
            if (this.filters.tri === 'prix_asc') {
              goods.reverse()
            }
            break
          case 'surface_desc':
          case 'surface_asc':
            goods.sort((a, b) => {
              if (a.APPARTEMENT && b.APPARTEMENT) {
                if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) >
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) <
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.MAISON && b.MAISON) {
                if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) >
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) <
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.TERRAIN && b.TERRAIN) {
                if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) >
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) <
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.IMMEUBLE && b.IMMEUBLE) {
                if (
                  parseFloat(a.IMMEUBLE.SURFACE_HABITABLE._text) >
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.IMMEUBLE.SURFACE_HABITABLE._text) <
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.LOCAL_PROFESSIONNEL && b.LOCAL_PROFESSIONNEL) {
                if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) >
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) <
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.FOND_COMMERCE && b.FOND_COMMERCE) {
                if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) >
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) <
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else {
                  return 0
                }
              } else if (a.PARKING && b.PARKING) {
                if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) >
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) <
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.APPARTEMENT && b.MAISON) {
                if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) >
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) <
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.APPARTEMENT && b.TERRAIN) {
                if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) >
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) <
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.APPARTEMENT && b.IMMEUBLE) {
                if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) >
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) <
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.APPARTEMENT && b.LOCAL_PROFESSIONNEL) {
                if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) >
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) <
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.APPARTEMENT && b.FOND_COMMERCE) {
                if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) >
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) <
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.APPARTEMENT && b.PARKING) {
                if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) >
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.APPARTEMENT.SURFACE_HABITABLE._text) <
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.MAISON && b.APPARTEMENT) {
                if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) >
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) <
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.MAISON && b.TERRAIN) {
                if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) >
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) <
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.MAISON && b.IMMEUBLE) {
                if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) >
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) <
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.MAISON && b.LOCAL_PROFESSIONNEL) {
                if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) >
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) <
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.MAISON && b.FOND_COMMERCE) {
                if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) >
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) <
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.MAISON && b.PARKING) {
                if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) >
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.MAISON.SURFACE_HABITABLE._text) <
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.TERRAIN && b.APPARTEMENT) {
                if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) >
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) <
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.TERRAIN && b.MAISON) {
                if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) >
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) <
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.TERRAIN && b.IMMEUBLE) {
                if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) >
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) <
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.TERRAIN && b.LOCAL_PROFESSIONNEL) {
                if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) >
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) <
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.TERRAIN && b.FOND_COMMERCE) {
                if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) >
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) <
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.TERRAIN && b.PARKING) {
                if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) >
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.TERRAIN.SURFACE_HABITABLE._text) <
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.LOCAL_PROFESSIONNEL && b.APPARTEMENT) {
                if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) >
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) <
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.LOCAL_PROFESSIONNEL && b.MAISON) {
                if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) >
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) <
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.LOCAL_PROFESSIONNEL && b.IMMEUBLE) {
                if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) >
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) <
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.LOCAL_PROFESSIONNEL && b.TERRAIN) {
                if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) >
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) <
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.LOCAL_PROFESSIONNEL && b.FOND_COMMERCE) {
                if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) >
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) <
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.LOCAL_PROFESSIONNEL && b.PARKING) {
                if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) >
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text) <
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.FOND_COMMERCE && b.APPARTEMENT) {
                if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) >
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) <
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.FOND_COMMERCE && b.MAISON) {
                if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) >
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) <
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.FOND_COMMERCE && b.IMMEUBLE) {
                if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) >
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) <
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.FOND_COMMERCE && b.LOCAL_PROFESSIONNEL) {
                if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) >
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) <
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.FOND_COMMERCE && b.TERRAIN) {
                if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) >
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) <
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.FOND_COMMERCE && b.PARKING) {
                if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) >
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.FOND_COMMERCE.SURFACE_HABITABLE._text) <
                  parseFloat(b.PARKING.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.PARKING && b.APPARTEMENT) {
                if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) >
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) <
                  parseFloat(b.APPARTEMENT.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.PARKING && b.MAISON) {
                if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) >
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) <
                  parseFloat(b.MAISON.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.PARKING && b.IMMEUBLE) {
                if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) >
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) <
                  parseFloat(b.IMMEUBLE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.PARKING && b.LOCAL_PROFESSIONNEL) {
                if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) >
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) <
                  parseFloat(b.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.PARKING && b.FOND_COMMERCE) {
                if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) >
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) <
                  parseFloat(b.FOND_COMMERCE.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
              } else if (a.PARKING && b.TERRAIN) {
                if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) >
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return -1
                } else if (
                  parseFloat(a.PARKING.SURFACE_HABITABLE._text) <
                  parseFloat(b.TERRAIN.SURFACE_HABITABLE._text)
                ) {
                  return 1
                } else {
                  return 0
                }
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
          goods = goods.filter((el) => el.VENTE)
        } else if (
          !this.filters.prestations.vente &&
          this.filters.prestations.location
        ) {
          goods = goods.filter((el) => el.LOCATION)
        } else {
          goods = goods.filter((el) => el)
        }
      }
      if (this.filters.type) {
        const categories = []
        if (this.filters.type.maison) {
          categories.push('MAISON')
        }
        if (this.filters.type.appartement) {
          categories.push('APPARTEMENT')
        }
        if (this.filters.type.terrain) {
          categories.push('TERRAIN')
        }
        if (this.filters.type.boutique) {
          categories.push('LOCAL_PROFESSIONNEL', 'FOND_COMMERCE')
        }
        if (this.filters.type.parking) {
          categories.push('PARKING')
        }
        if (this.filters.type.autre) {
          categories.push('LOCAL_PROFESSIONNEL', 'FOND_COMMERCE', 'IMMEUBLE')
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
          return (goods = goods.filter((el) => el))
        } else {
          goods = goods.filter(
            (el) =>
              el[
                Object.keys(el).filter((element) =>
                  categories.includes(element)
                )
              ]
          )
        }
      }
      return goods
    },
  },
  methods: {
    filter() {
      this.goods = this.$store.getters.goodsLiked.slice()
      if (this.filters.budget) {
        const min = parseFloat(this.filters.budget.min.replace(/\s+/g, '')) || 0
        const max =
          parseFloat(this.filters.budget.max.replace(/\s+/g, '')) || Infinity
        if (this.filters.budget.min !== '' || this.filters.budget.max !== '') {
          this.goods = this.goods.filter((el) => {
            if (el.LOCATION) {
              return (
                el.LOCATION.LOYER._text >= min && el.LOCATION.LOYER._text <= max
              )
            } else {
              return el.VENTE.PRIX._text >= min && el.VENTE.PRIX._text <= max
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
            if (el.APPARTEMENT) {
              return (
                el.APPARTEMENT.SURFACE_HABITABLE._text >= min &&
                el.APPARTEMENT.SURFACE_HABITABLE._text <= max
              )
            } else if (el.MAISON) {
              return (
                el.MAISON.SURFACE_HABITABLE._text >= min &&
                el.MAISON.SURFACE_HABITABLE._text <= max
              )
            } else if (el.TERRAIN) {
              return (
                el.TERRAIN.SURFACE_HABITABLE._text >= min &&
                el.TERRAIN.SURFACE_HABITABLE._text <= max
              )
            } else if (el.IMMEUBLE) {
              return (
                el.IMMEUBLE.SURFACE_HABITABLE._text >= min &&
                el.IMMEUBLE.SURFACE_HABITABLE._text <= max
              )
            } else if (el.LOCAL_PROFESSIONNEL) {
              return (
                el.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text >= min &&
                el.LOCAL_PROFESSIONNEL.SURFACE_HABITABLE._text <= max
              )
            } else if (el.FOND_COMMERCE) {
              return (
                el.FOND_COMMERCE.SURFACE_HABITABLE._text >= min &&
                el.FOND_COMMERCE.SURFACE_HABITABLE._text <= max
              )
            } else if (el.PARKING) {
              return (
                el.PARKING.SURFACE_HABITABLE._text >= min &&
                el.PARKING.SURFACE_HABITABLE._text <= max
              )
            }
          })
        }
      }
      if (this.filters.ref) {
        if (this.filters.ref !== '') {
          this.goods = this.goods.filter((el) =>
            el.INFO_GENERALES.AFF_NUM._text.startsWith(this.filters.ref)
          )
        }
      }
      if (this.filters.localization) {
        if (this.filters.localization !== '') {
          this.goods = this.goods.filter((el) => {
            if (el.LOCALISATION.VILLE) {
              const offre = el.LOCALISATION.VILLE._cdata
              if (offre) {
                return offre
                  .toLowerCase()
                  .includes(this.filters.localization.toLowerCase())
              }
            } else {
              const offre = el.AGENCE.AGENCE_VILLE._cdata
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
  head() {
    return {
      title: `${this.$t('links.selection')} - Aktif Transac`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.selection'),
        },
      ],
    }
  },
}
</script>

<style></style>
