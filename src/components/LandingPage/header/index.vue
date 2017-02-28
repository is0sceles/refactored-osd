<template>
  <div> 
    <custom-button :click-handler='signIn' button-text='Sign in'></custom-button>
    <h1>Do-We</h1>
    <h3>Online Speed-Dating</h3>
    <landing-signup></landing-signup>
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
  };
</script>