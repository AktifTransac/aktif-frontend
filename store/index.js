import cookie from 'vue-cookies'
const convert = require('xml-js')

export const state = () => ({
  goods: [],
  likes: [],
})

export const getters = {
  newGoods(state) {
    let goods = state.goods.slice()
    goods.sort((a, b) => {
      return new Date(b.DATE_OFFRE._cdata) - new Date(a.DATE_OFFRE._cdata)
    })
    goods = goods.filter((el) => el.TYPE_OFFRE._cdata <= 7)
    const newGoods = goods.splice(0, 5)
    return newGoods
  },
  goods(state) {
    const goods = state.goods.slice()
    return goods
  },
  likes(state) {
    return state.likes
  },
  numberOfLikes(state) {
    return state.likes.length
  },
  goodsLiked(state) {
    const goods = state.goods.slice()
    return goods
  },
  single: (state) => (id) => {
    return state.goods.find((el) => el.NO_DOSSIER._cdata === id)
  },
}

export const mutations = {
  async setGoods(state, data) {
    const biens = convert.xml2json(data, { compact: true, spaces: 4 })
    const formated = await JSON.parse(biens)
    await formated.BIENS.BIEN.forEach((el) => {
      const format = el.DATE_OFFRE._cdata.split('/').reverse().join('/')
      el.DATE_OFFRE._cdata = format
    })
    state.goods = formated.BIENS.BIEN
  },
  like(state, dossier) {
    if (!cookie.isKey('likes')) {
      const cookies = []
      cookies.push(dossier)
      cookie.set('likes', JSON.stringify(cookies))
    } else {
      const cookies = JSON.parse(cookie.get('likes'))
      cookies.push(dossier)
      cookie.set('likes', JSON.stringify(cookies))
    }
    state.likes = JSON.parse(cookie.get('likes'))
  },
  dislike(state, dossier) {
    const cookies = JSON.parse(cookie.get('likes'))
    const index = cookies.findIndex((el) => el === dossier)
    cookies.splice(index, 1)
    if (cookies.length === 0) {
      cookie.remove('likes')
      state.likes = []
    } else {
      cookie.set('likes', JSON.stringify(cookies))
      state.likes = JSON.parse(cookie.get('likes'))
    }
  },
  setLikes(state) {
    state.likes = JSON.parse(cookie.get('likes'))
  },
}

export const actions = {
  async getGoods({ commit }) {
    const data = await this.$axios.$get('https://api.aktif-transac.com/biens')
    await commit('setGoods', data)
  },
}
