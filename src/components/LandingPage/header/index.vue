<template>
  <div> 
    <custom-button class='secondaryButton' :click-handler='signIn' button-text='Sign in'></custom-button>
    <h1>Do-We</h1>
    <h3>Online Speed-Dating</h3>
    <landing-signup :set-gender='setGender' :set-looking-for='setLookingFor'></landing-signup>
    <custom-button class='primaryButton' :click-handler='signup' button-text='Sign Up'></custom-button>
  </div>
</template>
<script>
  import LandingSignup from './landingSelection';
  import CustomButton from '../../customComponents/button';

  export default {
    methods: {
      signIn() {
        console.log('i want to sign in');
      },
    },
    components: {
      CustomButton,
      LandingSignup,
    },
    props: [
      'signup',
      'setGender',
      'setLookingFor',
    ],
  };
</script>