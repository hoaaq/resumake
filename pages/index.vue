<template>
  <div class="fill-height">
    <v-container class="fill-height">
      <v-row>
        <v-col cols="12" md="5">
          <div class="d-flex flex-column justify-center align-center">
            <h1 class="headline">RESUMAKE</h1>
            <v-btn class="mt-5" color="primary" nuxt to="/generator/template"
              >Make new resume</v-btn
            >
            <v-btn
              class="mt-3"
              color="primary"
              outlined
              @click="handleClickImport"
              >Import</v-btn
            >
          </div>
        </v-col>
        <v-col cols="7" class="d-none d-md-block"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'abc'
    }
  },
  methods: {
    handleClickImport() {
      alert('click import')
    }
  }
}
</script>
