<template>
  <b-modal :id="`edit-${i}`" hide-footer>
    <template v-slot:modal-title>
      Edit
    </template>
    <b-form @submit.prevent="onSubmit">
      <div class="d-flex">
        <b-form-group id="name" label="Name :" label-for="name" class="w-50">
          <b-form-input
            id="name"
            :value="data.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="username"
          label="Username :"
          label-for="username"
          class="w-50 ml-3"
        >
          <b-form-input
            id="username"
            :value="data.username"
            required
            placeholder="Enter username"
          ></b-form-input>
        </b-form-group>
      </div>
      <b-form-group id="address" label="Address :" label-for="address">
        <b-form-input
          id="address"
          :value="data.address"
          required
          placeholder="Enter address"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" class="mr-2" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["data", "field", "i"],
  methods: {
    onSubmit(event) {
      const payload = {
        ...this.data,
        name: event.target[0].value,
        username: event.target[1].value,
        address: event.target[2].value
      };
      const index = this.getIndex(this.i);

      // edit state vuex
      this.$store.dispatch("editData", { ...payload, index });

      // close modal
      this.$root.$emit("bv::hide::modal", "edit-" + this.i);
    }
  },
  computed: {
    ...mapGetters("index", ["getIndex"])
  }
};
</script>
