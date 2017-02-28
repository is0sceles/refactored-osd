<template>
  <div> 
    I am a : <custom-selection :selections='["Male", "Female"]' :on-change='setGender'></custom-selection>
    Looking for a <custom-selection  :selections='["Male", "Female"]' :on-change='setLookingFor'></custom-selection>
    <custom-button class='primaryButton' :click-handler='signup' button-text='Sign Up'></custom-button>
  </div>
</template>
<script>
  import CustomSelection from '../../../selection';
  import CustomButton from '../../../button';

  export default {
    components: {
      CustomButton,
      CustomSelection,
    },
    props:[
      'signup',
      'setGender',
      'setLookingFor'
    ],
  };
</script>