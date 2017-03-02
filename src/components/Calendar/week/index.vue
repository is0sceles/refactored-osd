<template>
  <div id='weekComp'>
    <div v-for='days in daysOfTheWeek' class='weekClass'>
      <day>{{days}}</day>
    </div>
  </div>
</template>

<script>
  import day from './day';
  export default {
    components: {
      day,
    },
    data () {
      return {
        daysOfTheWeek: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
      }
    }
  }
</script>

<style>
  div#weekComp {
    width: 100%;
    padding-left: 15%;
  }
  div.weekClass {
    display: inline;
  }
</style>