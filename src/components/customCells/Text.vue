<template>
  <div>
    <p v-b-modal="`modal-${field}-${index}`" class="cell-modal">{{ text }}</p>
    <ModalDetail :data="rowData" :field="field" :index="index" />
  </div>
</template>

<script>
import ModalDetail from "@/components/modals/Detail";

export default {
  name: "other",
  components: {
    ModalDetail
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
  computed: {
    text() {
      return this.rowData[this.field];
    }
  }
};
</script>

<style>
.cell-modal {
  outline: none;
  border-color: none;
}
</style>
