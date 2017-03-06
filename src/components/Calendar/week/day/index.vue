<template>
  <div>
    <table class='dayTable'>
      <thead>
        <tr>
          <th><slot></slot> 20</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='hour in hours'>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    created() {
      let temp = [];
      for(let i = 0; i <= 14; i++) {
        temp.push(i);
      };
      this.$data.hours = temp;
    }, 
    data () {
      return {
        hours: null,
        today: new Date(),
      }
    },
  }
</script>


<!-- CSS Code: Place this code in the document's head (between the 'head' tags) -->
<style>
table.dayTable {
  width: 10%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-right: 1px solid black;
  color: #000000;
  float: left;
  text-align: center;
}

table.dayTable td, table.dayTable th {
  padding: 3px;
  height: 20px;
}

table.dayTable td:hover {
  background: #F1F1F1;
  cursor: default;
  box-shadow: 1px 2px 2px #705848;
}

table.dayTable th {
  cursor: default;
}

table.dayTable thead {
  background-color: #white;
}
</style>


