<template>
<div>
  <md-card>
      <md-card-media>
        <img class="images logo" src="https://vuejs.org/images/logo.png" alt="People">
      </md-card-media>
      <md-card-header>
        <div class="md-title"> Title goes here </div>
        <div class="md-subhead"> Subtitle here </div>
      </md-card-header>
      <md-card-actions>
        <md-button> Action </md-button>
        <md-button> Action </md-button>
      </md-card-actions>
      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
      </md-card-content>
  </md-card>
  <div>
      <div v-if="!image">
          <h3> {{ header }} </h3>
          <input type="file" @change="onchange" multiple>
      </div>
      <div v-else>
          <img class="images" :src="image" />
          <br />
          <button @click="removeImage">Remove image</button>
          <button @click="saveImage">Save image</button>
      </div>
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
  components: 'md-card',
  methods: {
    onchange(e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return;
      }
      console.log('ONCHANGE------>')
      console.log('files', files)
      this.createImage(files[0])
    },
    createImage(file) {
      let image = new Image()
      let reader = new FileReader()
      //save to localStorage
      let storage = {}
      
      console.log(file)

      //onload event will fire after reader.readAsDataURL
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      if (file && file.type.match('image.*')) {
        reader.readAsDataURL(file);
      }
      console.log('CREATEIMAGE! ------>')
      console.log('this.image', this)
      console.log('<----------->------>')
      console.log('storage', storage)
      console.log('<----------->------>')
      console.log('file is ', file)
      console.log('<----------->------>')
      console.log('localStorage', localStorage)
    },
    removeImage: function (e) {
      this.image = '';
    },
    saveImage: function (e) {
      console.log('save')
    }
  }
}

//** material design
//app.use(VueMaterial)

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