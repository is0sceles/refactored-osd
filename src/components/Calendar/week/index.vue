<template>
  <div id='weekComp'>
    <div v-for='days in currentWeek' class='weekClass'>
      <day>{{days}}</day>
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
        currentWeek: null,
      }
    }, 
    created() {
      this.calculateDate(this.$data);
    },
    methods: {
      calculateDate: (data)=> {
        let today = new Date();
        let past = today.getDay() - 0;
        let future = 6 - today.getDay();
        let thisWeek = [];
        for(var i = 0; i < past; i++) {
          let date = moment().subtract(past - i, 'days');
          thisWeek = thisWeek.concat(date.format("ddd, Do"));
        }
          thisWeek = thisWeek.concat(moment().format("ddd, Do"));
        for(var i = 1 ; i <= future; i++ ) {
          let date = moment().add(i, 'days');
          thisWeek = thisWeek.concat(date.format("ddd, Do"));
        }
        data.currentWeek = thisWeek;
        console.log(data.currentWeek);
        return data.currentWeek;
      }
    }
  }
</script>

<style>
  div#weekComp {
    width: 100%;
    padding-top: 5%;
    margin-left: 15%;
  }
  div.weekClass {
    display: inline;
    height: inherit;
  }
</style>