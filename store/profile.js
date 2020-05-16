export const state = () => ({
  item: {}
})

export const mutations = {
  setItem(state, payload) {
    if (payload.name !== null) state.item.name = payload.name
    if (payload.email !== null) state.item.email = payload.email
  }
}
