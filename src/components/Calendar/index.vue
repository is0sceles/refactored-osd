<template>
  <div>
      <h3> {{month[today.getMonth()]}} </h3>
      <week></week>
  </div>
</template>


<script>
  import week from './week';
  import Calendar from 'vue-calendar-mobile';

  export default {
    components: {
      Calendar,
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
