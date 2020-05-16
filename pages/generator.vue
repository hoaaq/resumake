<template>
  <div class="fill-height">
    <v-container class="fill-height" fluid>
      <v-row class="fill-height">
        <v-col cols="12" md="2">
          <v-list>
            <v-list-item nuxt dense to="/generator/template">
              <v-list-item-content>
                <v-list-item-title>Template</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item nuxt dense to="/generator/profile">
              <v-list-item-content>
                <v-list-item-title>Profile</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item nuxt dense to="/generator/education">
              <v-list-item-content>
                <v-list-item-title>Education</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item nuxt dense to="/generator/works">
              <v-list-item-content>
                <v-list-item-title>Works</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item nuxt dense to="/generator/skills">
              <v-list-item-content>
                <v-list-item-title>Skills</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item nuxt dense to="/generator/projects">
              <v-list-item-content>
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item nuxt dense to="/generator/awards">
              <v-list-item-content>
                <v-list-item-title>Awards</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <div class="text-center">
            <v-btn color="success" class="mt-3" rounded @click="handleClickMake"
              >Make</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="fullheight">
            <nuxt-child />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <!-- <div>Profile: {{ profile }}</div> -->
          <object
            :data="pdfsource"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Your web browser doesn't have a PDF plugin. Instead you can
              <a :href="pdfsource">click here to download the PDF file.</a>
            </p>
          </object>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.fullheight {
  height: calc(100vh - 150px);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>

<script>
export default {
  middleware({ route, redirect }) {
    if (route.fullPath === '/generator') {
      return redirect('/generator/template')
    }
  },
  computed: {
    pdfsource() {
      return this.$store.state.document.source
    },
    profile() {
      return this.$store.state.profile.item
    }
  },
  methods: {
    handleClickMake() {
      this.$store.commit('document/setSource', { source: '/test.pdf' })
    }
  }
}
</script>
