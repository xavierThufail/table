<template>
  <b-form-checkbox
    class="d-flex justify-content-center mt-2 ml-2"
    :id="`checkbox${index}`"
    v-model="rowData.checkbox"
    name="checkbox"
    :value="`check${index}`"
    :unchecked-value="`uncheck${index}`"
  >
  </b-form-checkbox>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    rowData: {
      type: Object
    },
    field: {
      type: String
    },
    index: {
      type: Number
    }
  }
};
</script>
