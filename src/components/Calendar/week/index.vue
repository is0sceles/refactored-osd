<template>
  <div id='weekComp'>
    <div v-for='days in daysOfTheWeek' class='weekClass'>
      <day>{{days}} {{ calculateDate}}</day>
    </div>
  </div>
</template>

<script>
  import day from './day';
  const moment = require('moment');

  export default {
    components: {
      day,
    },
    data () {
      return {
        daysOfTheWeek: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
        currentWeek: null,
      }
    }, 
    computed: {
      calculateDate: ($data)=> {
        let today = new Date();
        let past = today.getDay() - 0;
        let future = 6 - today.getDay();
        let thisWeek = [];
        for(var i = 0; i < past; i++) {
          let date = moment().subtract(past - i, 'days');
          thisWeek = thisWeek.concat(date.format("dddd, MMMM Do "));
        }
          thisWeek = thisWeek.concat(moment().format("dddd, MMMM Do "));
        for(var i = 1 ; i <= future; i++ ) {
          let date = moment().add(i, 'days');
          thisWeek = thisWeek.concat(date.format("dddd, MMMM Do "));
        }
        console.log(thisWeek);
        return $data.daysOfTheWeek[today.getDay()];
      }
    },
  }
</script>

<style>
  div#weekComp {
    width: 100%;
    padding-top: 8%;
    margin-left: 15%;
  }
  div.weekClass {
    display: inline;
    height: inherit;
  }
</style>