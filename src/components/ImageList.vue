<template>
  <div>
    ImageList

    {{ allImages.length }}
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
