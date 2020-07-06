export const state = () => ({
  related: null
})

export const mutations = {
  setRelated (state, v) {
    state.related = v
  }
}

export const getters = {
  related (state) {
    return state.related
  }
}
