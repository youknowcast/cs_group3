<template>
  <div>
    <h1>Orders</h1>
    <div class="orders">
      <ag-grid-vue style="width: 600px; height: 500px;"
                       class="ag-theme-balham"
                       :columnDefs="columnDefs"
                       :rowData="rowData"
                       :modules="modules">
          </ag-grid-vue>
    </div>
  </div>
</template>

<script>
import {AgGridVue} from "@ag-grid-community/vue";
import {AllCommunityModules} from '@ag-grid-community/all-modules';

export default {
  name: 'Orders',
  data() {
    return {
      ColumnDefs: null,
      rowData: null,
      modules: AllCommunityModules
    }
  },
  components: {
    AgGridVue
  },
  beforeMount() {
    this.columnDefs = [
      {headerName: 'CallerID', field: 'caller_id'},
      {headerName: 'Confirmation', field: 'conf_number'},
      {headerName: 'PizzaType', field: 'pizza_type'},
      {headerName: 'Count', field: 'count'},
      {headerName: 'OrderTime', field: 'order_time'},
      {headerName: 'PickupTime', field: 'pickup_time'}
    ];
//    this.rowData = [
//      {make: 'Toyota', model: 'Celica', price: 35000},
//      {make: 'Ford', model: 'Mondeo', price: 32000},
//      {make: 'Porsche', model: 'Boxter', price: 72000}
//    ];
    fetch('https://qltfx6os16.execute-api.us-east-1.amazonaws.com/dev')
        .then(result => result.json())
        .then(rowData => this.rowData = rowData);

  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../node_modules/@ag-grid-community/all-modules/dist/styles/ag-grid.css";
  @import "../../node_modules/@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.orders {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
