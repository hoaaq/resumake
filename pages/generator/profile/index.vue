<template>
  <div>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="email" label="Email" type="email"></v-text-field>
  </div>
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.profile.item.name
      },
      set(name) {
        this.$store.commit('profile/setItem', { name })
      }
    },
    email: {
      get() {
        return this.$store.state.profile.item.email
      },
      set(email) {
        this.$store.commit('profile/setItem', { email })
      }
    }
  }
}
</script>
