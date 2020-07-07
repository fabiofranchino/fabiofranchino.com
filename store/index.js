export const state = () => ({
  related: null,
  prevSlug: null,
  nextSlug: null,
  current:null
})

export const mutations = {
  setRelated (state, v) {
    state.related = v
  },
  setNextSlug (state, v) {
    state.nextSlug = v
  },
  setPrevSlug (state, v) {
    state.prevSlug = v
  },
  setCurrent (state, v) {
    state.current = v
  }
}

export const getters = {
  related (state) {
    return state.related
  },
  prevSlug (state) {
    return state.prevSlug
  },
  nextSlug (state) {
    return state.nextSlug
  },
  current(state) {
    return state.current
  }
}
