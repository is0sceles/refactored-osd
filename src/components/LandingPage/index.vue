<template>
<div> 
  <custom-header :set-gender='setGender' :set-looking-for='setLookingFor' :signup='signup'></custom-header>
  <about-us :signup='signup'></about-us>
</div>
</template>
<script>
  import CustomHeader from './header';
  import AboutUs from './aboutUs';

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
      CustomHeader,
      AboutUs,
    },

  };
</script>
