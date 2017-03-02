<template>
  <div>
    <table class='dayTable'>
      <thead>
        <tr>
          <th><slot></slot></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='hour in hours'>
          <td >{{hour}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    created() {
      console.log('days created')
      let temp = [];
      for(let i = 1; i <= 24; i++) {
        temp.push(i);
      };
      this.$data.hours = temp;
    }, 
    data () {
      return {
        hours: null,
      }
    }
  }
</script>


<!-- CSS Code: Place this code in the document's head (between the 'head' tags) -->
<style>
table.dayTable {
  width: 10%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 1px;
  border-style: solid;
  color: #000000;
  float: left;
  text-align: center;
}

table.dayTable td, table.dayTable th {
  border-width: 1px;
  border-color: black;
  border-style: solid;
  padding: 3px;
}

table.dayTable thead {
  background-color: #white;
}
</style>


