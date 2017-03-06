<template>
  <div> 
    I am a : <custom-selection :selections='["Male", "Female"]' :on-change='setGender'></custom-selection>
    Looking for a <custom-selection  :selections='["Male", "Female"]' :on-change='setLookingFor'></custom-selection>
  </div>
</template>
<script>
  import CustomSelection from '../../../customComponents/selection';
  import CustomButton from '../../../customComponents/button';

  export default {
    stateless: true,
    components: {
      CustomButton,
      CustomSelection,
    },
    props: [
      'setGender',
      'setLookingFor',
    ],
  };
</script>