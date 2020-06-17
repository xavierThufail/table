<template>
  <div class="mt-3">
    <h4>Filter :</h4>
    <b-form @submit.prevent="onSubmit" class="mb-3" inline>
      <b-input
        class="mr-3 w-25"
        v-model="search"
        placeholder="input name or username"
      ></b-input>
      <b-button type="submit" variant="primary">Filter</b-button>
    </b-form>
  </div>
</template>

<script>
import { EventBus } from "@/eventBus";

export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    onSubmit() {}
  },
  watch: {
    search() {
      EventBus.$emit("filter", this.search);
    }
  }
};
</script>
