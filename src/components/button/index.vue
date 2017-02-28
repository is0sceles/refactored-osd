<template>
  <button v-on:click="clickHandler">{{buttonText}}</button>
</template>
<script>
  export default {
    props: ['clickHandler', 'buttonText'],
  };
</script>
<style lang="css">
  
</style>
