<template>
  <div>
    <h2 class="title">Choose a template</h2>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="6">
        <div class="d-flex flex-column justify-center align-center">
          <v-img :src="item.source"></v-img>
          <v-btn
            class="mt-3"
            color="success"
            outlined
            @click="handleClickTemplate(item)"
            >Template {{ item.id }}</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          source: '/1.png'
        },
        {
          id: 2,
          source: '/2.png'
        },
        {
          id: 3,
          source: '/3.png'
        },
        {
          id: 4,
          source: '/4.png'
        },
        {
          id: 5,
          source: '/5.png'
        }
      ]
    }
  },
  methods: {
    handleClickTemplate(item) {
      alert('Click template ' + item.id)
    }
  }
}
</script>
