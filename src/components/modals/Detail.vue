<template>
  <b-modal :id="`modal-${field}-${index}`">
    <template v-slot:modal-title>
      Detail
    </template>
    <p>Name : {{ data.name }}</p>
    <p>Username : {{ data.username }}</p>
    <p>Address : {{ data.address }}</p>
  </b-modal>
</template>

<script>
export default {
  props: ["data", "field", "index"]
};
</script>
