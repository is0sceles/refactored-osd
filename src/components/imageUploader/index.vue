<template>
  <div v-if="!image">
    <h3> Select an image </h3>
    <input type="file" onChange="onchange">
  </div>
 <div v-else>
   <img :src="image" />
    <button @click="removeImage">Remove image</button>
 </div>

</template>

<script>
 export default {
   data: {},
  methods: {
      onchange(e) {
        console.log('inside onchange', e)
      }
  }
 } 
</script>

<style>
</style>