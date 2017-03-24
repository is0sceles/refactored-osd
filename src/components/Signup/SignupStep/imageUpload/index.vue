<template>
  <div>
      <div v-if="!image">
          <h3> {{ header }} </h3>
          <input type="file" @change="onchange" multiple>
      </div>
      <div v-else>
          <img class="images" :src="image" />
          <br />
          <button class="danger" @click="removeImage">Remove image</button>
          <button @click="saveImage">Save image</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
     return {
      image: '',
      header: 'Select an image'
     }
  },
  methods: {
    onchange(e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return;
      }
      console.log('ONCHANGE------> e')
      console.log(e)
      this.createImage(files)
    },
    createImage(files) {
      let image = new Image()
      let reader = new FileReader()
      //save to localStorage
      let storage = {}
      storage.images = files
  
      this.saveImage(storage)
      //onload event will fire after reader.readAsDataURL
      reader.onload = (e) => {
         this.image = e.target.result;
      };
      if (files && files[0].type.match('image.*')) {
        reader.readAsDataURL(files[0]);
      }
    },
    removeImage: function (e) {
      this.image = '';
    },
    saveImage: function (obj) {
      
    }
  }
}

</script>

<style>
  .images {
    height: 200px;
    width: 200px;
  }
  .logo {
    height: 50px;
    width: 50px;
  }
</style>