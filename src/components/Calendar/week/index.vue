<template>
  <div>
    <div v-for='days in daysOfTheWeek'>
      <day></day>
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
        daysOfTheWeek: [1,2,3,4,5,6,7]
      }
    }
  }
</script>