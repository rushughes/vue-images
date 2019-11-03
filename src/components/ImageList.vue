<template>
  <div class="image-container">
    <img
      v-for="image in allImages"
      :key="image.id"
      :src="image.link"
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters(['allImages']),
  created() {
    this.fetchImages();
  },
  methods: mapActions(['fetchImages']),

};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>
