export const state = () => ({
  source: ''
})

export const mutations = {
  setSource(state, payload) {
    state.source = payload.source
  }
}
