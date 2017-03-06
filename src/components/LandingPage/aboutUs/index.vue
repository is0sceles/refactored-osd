<template>
<div> 
  <h1>How It Works</h1>
  <happy-picture></happy-picture>
  <p>were awesome heres why were awesome heres why were awesome heres why were awesome heres why were awesome heres why were awesome heres why were awesome heres why were awesome heres why</p>
  <custom-button :click-handler='signup' button-text='Sign Up!'></custom-button>
</div>
</template>
<script>
import HappyPicture from './happyPicture.vue';
import CustomButton from '../../customComponents/button'

export default {
  stateless: true,
  components: {
    CustomButton,
    HappyPicture,
  },
  props: [
    'signup',
  ],
};

</script>

