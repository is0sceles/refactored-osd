<template>
  <div> 
    I am a : <custom-selection :selections='["Male", "Female"]' :on-change='setGender'></custom-selection>
    Looking for a <custom-selection  :selections='["Male", "Female"]' :on-change='setLookingFor'></custom-selection>
    <custom-button :click-handler='signup' button-text='Sign Up'></custom-button>
  </div>
</template>
<script>
  import CustomSelection from '../../../selection';
  import CustomButton from '../../../button';

  export default {
    data() {
      return {
        gender: 'Male',
        lookingFor: 'Male',
      };
    },
    methods: {
      signup() {
        console.log('I am:', this.gender, 'looking for,', this.lookingFor);
      },
      setGender(gender) {
        this.gender = gender;
        console.log(gender);
      },
      setLookingFor(lookingFor) {
        this.lookingFor = lookingFor;
        console.log(lookingFor);
      },
    },
    components: {
      CustomButton,
      CustomSelection,
    },
  };
</script>