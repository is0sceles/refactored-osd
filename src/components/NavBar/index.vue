<template>
<div>
  <h1 v-on:click='redirect("/")'>Do-We</h1>
  <button v-on:click='redirect("/calendar")'><calendar-glyph></calendar-glyph></button>
  <button v-on:click='toggleMessages'><message-glyph></message-glyph></button>
  <button v-on:click='toggleDropdown' ><hamburger></hamburger></button>
  <dropdown :redirect='redirect' v-if='showDropdown'></dropdown>
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
  
</style>

