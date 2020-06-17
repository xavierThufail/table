<template>
  <b-modal :id="`delete-${i}`" size="sm">
    <template v-slot:modal-title>
      Confirm Delete
    </template>
    <p>Are you sure to delete this data?</p>
    <template v-slot:modal-footer="{ cancel }">
      <b-button
        class="mr-2"
        variant="danger"
        @click="
          () => {
            deleteData();
            cancel();
          }
        "
        >Delete</b-button
      >
      <b-button @click="cancel()">Cancel</b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["data", "field", "i"],
  methods: {
    deleteData() {
      const index = this.getIndex(this.i);
      this.$store.dispatch("deleteData", index);
    }
  },
  computed: {
    ...mapGetters("index", ["getIndex"])
  }
};
</script>
