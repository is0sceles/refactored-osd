<template>
  <div> 
    <label>{{label}}</label>
    <input type="text" ref='input' :placeholder='placeholder' :value='value' @input='updateValue($event.target.value)'/>
  </div>
</template>
<script>
  export default {
    methods: {
      updateValue(value) {
        this.$refs.input.value = value;
        this.$emit('input', value);
      },
    },
    props: [
      'value',
      'placeholder',
      'label',
    ],
  };
</script>