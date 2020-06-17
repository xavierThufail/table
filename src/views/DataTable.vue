<template>
  <div class="d-flex justify-content-center">
    <div style="width: 860px">
      <FormFilter />
      <Table />
    </div>
  </div>
</template>

<script>
import Table from "@/components/DataTable/Table";
import FormFilter from "@/components/DataTable/FormFilter";

export default {
  name: "DataTable",
  components: {
    Table,
    FormFilter
  }
};
</script>
