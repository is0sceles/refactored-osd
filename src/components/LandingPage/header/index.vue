<template>
  <div> 
    <custom-button class='secondaryButton' :click-handler='signIn' button-text='Sign in'></custom-button>
    <h1>Do-We</h1>
    <h3>Online Speed-Dating</h3>
    <landing-signup :set-gender='setGender' :set-looking-for='setLookingFor' :signup='signup'></landing-signup>
  </div>
</template>
<script>
  import LandingSignup from './signup';
  import CustomButton from '../../button';

  export default {
    methods: {
      signIn(){
        console.log('i want to sign in')
      }
    },
    components: {
      CustomButton,
      LandingSignup,
    },
    props:[
      'signup',
      'setGender',
      'setLookingFor'
    ],
  };
</script>