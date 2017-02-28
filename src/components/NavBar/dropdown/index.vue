<template>
  <div class='dropdown'>
    <ul>
      <li class='dropdownListItem' v-for='item in dropdown' v-on:click='()=>redirect(item.path)'>{{item.name}}</li>
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
<style>
  .dropdown {
    background: #EFE7E8;
    float:right;
    width: 20vw;
  }

  .dropdownListItem {
    font-size: 20px;
    padding: 2px;
    list-style-type: none;
  }
  ul {
    padding-left: 20px;
  }
</style>