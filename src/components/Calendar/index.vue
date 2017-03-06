<template>
  <div>
      <h2 id='monthName'> {{month[today.getMonth()]}} </h2>
      <week></week>
  </div>
</template>


<script>
  import week from './week';

  export default {
    components: {
      week,
    },
    data () {
      return {
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        today: new Date(),
      }
    },
    methods: {

    },
    computed: {
      now: ()=> {
      }
    }
  }

</script>

<style>
  h2#monthName {
    font-size: 2em;
    text-align: center;
  }
</style>