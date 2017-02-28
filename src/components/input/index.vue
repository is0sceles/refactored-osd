<template>
  <div> 
    <label>{{label}}</label>
    <input type="text" :placeholder='placeholder' v-on:change='(event)=>onChange(event.target.value)' />
  </div>
</template>
<script>
  export default {
    stateless: true,
    props: [
      'onChange',
      'placeholder',
      'label',
    ],
  };
</script>