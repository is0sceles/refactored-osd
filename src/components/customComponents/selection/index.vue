<template>
  <select v-on:input='event=>onChange(event.target.value)'>
    <option v-for='selection in selections'>{{selection}}</option>
  </select>
</template>
<script>
  export default {
    stateless: true,
    props: [
      'selections',
      'onChange',
    ],
  };
</script>