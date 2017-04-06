<template> 
  <div> 
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
  .moreImages {
    display: flex;
    padding: 15px 15px 15px 15px;
    margin-left: 20%;
    margin-right: 20%;
    border: 2px solid #CCC;
  }
  .profileLoader {
    display: block;
    margin: auto;
    height: 200px;
    width: 200px;
    border: 2px solid #000;
  }
</style>