<template>
  <div class="d-flex justify-content-around mt-1">
    <b-button size="sm" variant="primary" v-b-modal="`edit-${index}`"
      >Edit</b-button
    >
    <b-button size="sm" variant="danger" v-b-modal="`delete-${index}`"
      >Delete</b-button
    >
    <ModalEdit
      :data="{
        name: rowData.name,
        username: rowData.username,
        address: rowData.address
      }"
      :field="field"
      :i="index"
    />
    <ModalDelete :data="rowData" :field="field" :i="index" />
  </div>
</template>

<script>
import ModalEdit from "@/components/modals/Edit";
import ModalDelete from "@/components/modals/Delete";

export default {
  name: "actions",
  components: {
    ModalEdit,
    ModalDelete
  },
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
  },
  computed: {}
};
</script>
