<template>
<div>

  <div class='navbar'>
    <h1 class='navbarText' v-on:click='redirect("/")'>Do-We</h1>
    <button class='navbarButton' v-on:click='redirect("/calendar")'><calendar-glyph></calendar-glyph></button>
    <button class='navbarButton' v-on:click='toggleMessages'><message-glyph></message-glyph></button>
    <button class='navbarButton' v-on:click='toggleDropdown' ><hamburger></hamburger></button>
  </div>
  <dropdown :redirect='redirect' v-if='showDropdown'></dropdown>
  <router-view></router-view>
</div>
</template>

<script>
  import hamburger from '../../assets/hamburger.vue'
  import messageGlyph from '../../assets/messageGlyph.vue'
  import calendarGlyph from '../../assets/calendarGlyph.vue'
  import Dropdown from './dropdown'

  export default {
    data() {
      return {
        username: 'elliottBirch',
        showDropdown: false,
        }
    },
    methods: {
      redirect(path){
        console.log('go to ', path);
      },
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      toggleMessages() {
        console.log('toggle messages')
      }
    },
    components:{
      hamburger,
      messageGlyph,
      calendarGlyph,
      Dropdown,
    }
  }
</script>

<style>
  .navbar {
    margin: 0px;
    display: flex;
    background: #8D0011;
    padding-left: 25px;
  }

  .navbarButton {
    flex: 1;
    background: #8D0011;
    border: 0px;
  }

  .navbarText{
    flex: 15;
    color: white;
  }
  /* Rectangle 2: */
</style>

