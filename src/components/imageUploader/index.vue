<template>
    <div v-if="!image">
        <h3> {{ header }} </h3>
        <input type="file" @change="onchange">
    </div>
  <div v-else>
        <img :src="image" />
        <button @click="removeImage">Remove image</button>
  </div>
</template>

<script>
  export default {
    data: {
    image: '',
    header: 'Select an image'
  },
  methods: {
    onchange(e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return;
      this.createImage(files[0])
    },
    createImage(file) {
      let image = new Image()
      let reader = new FileReader()
      let model = this
      console.log(model)
      reader.onload = (e) => {
        model.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
  } 
</script>

<style>
</style>