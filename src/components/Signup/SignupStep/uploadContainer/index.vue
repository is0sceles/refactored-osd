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
  /** main image dropbox  */
  .profileLoader {
    display: block;
    margin-left: 33%;
  }
  /** dropbox row */
  .moreImages {
    padding: 25px 15px 25px 15px;
    display: flex;
  }
  div.dragDrop {
    border: none;
  }
</style>