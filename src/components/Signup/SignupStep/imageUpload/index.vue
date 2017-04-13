<template>
  <div>
      <div v-if="!image">
          <div @dragover.prevent @drop="onDrop" class="dragDrop"></div>
      </div>
      <div v-else>
          <img class="images" :src="image" />
          <br />
          <button @click="removeImage">Go Back / Remove </button>
          <button @click="continueUpoadProcess">Continue</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
     return {
      image: '',
     }
  },
  methods: {
    onDrop: function (e) {
      e.preventDefault()

      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files)
    },
    createImage(files) {
      let image = new Image()
      let reader = new FileReader()

      //onload will fire after reader.readAsDataURL has vaild file
      reader.onload = (e) => {
         this.image = e.target.result
         //save to localStorage to make it accessible. Q: better to save to browser memory than in app alloted memory?
         localStorage.DOWEprofileImage = this.image
      };
      if (files && files[0].type.match('image.*')) {
        reader.readAsDataURL(files[0])
      }
    },
    removeImage: function (e) {
      this.image = ''
      if (localStorage) {
        localStorage.removeItem('DOWEprofileImage')
      }
    },
    continueUpoadProcess: function () {
      //give users assurance their intentions were met
      alert('saved!')
      console.log('everything is saved')
      // handle the 'continue' process here...
    }
  }
}

</script>

<style>
  /** render image after drop  */
  .images {
    height: 200px;
    width: 200px;
  }
  /** dropbox div */
  .dragDrop {
    background: url('../../../../assets/dropDiv.png');
    background-repeat: no-repeat;
    background-size: contain;
    border: 2px solid #000;
    height: 200px;
    width: 200px;
  }
</style>

