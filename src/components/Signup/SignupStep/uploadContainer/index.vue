<template> 
  <div class="container"> 
    <image-upload class="profileLoader"/>
    <div class="moreImages">
      <image-upload />
      <image-upload />
      <image-upload />
      <image-upload />
      <image-upload />
    </div>
  </div>
</template>

<script>
  import imageUpload from '../imageUpload'
 
  export default {
    components: {
      imageUpload
    }
  }
</script>

<style>
  /** dropbox container  */
  .container {
    border: 2px dashed #C2C;
  }
  /** main image dropbox  */
  .profileLoader {
    display: block;
    margin-left: 33%;
    
  }
  /** dropbox row */
  .moreImages {
    padding: 25px 15px 25px 15px;
    border: 2px solid #CCC;
    display: flex;
  }
</style>