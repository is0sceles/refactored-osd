<template>
  <div>
    <ul>
      <li v-for='item in dropdown' v-on:click='()=>redirect(item.path)'>{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        dropdown: [
          {
            name: 'Profile',
            path: '/user/:userid'
          },
          {
            name: 'Matches',
            path: '/user/:userid/matches'
          },
          {
            name: 'Schedule',
            path: '/user/:userid/calendar'
          },
        ]
      }
    },
    props: [
      'redirect'
    ]
  }
</script>