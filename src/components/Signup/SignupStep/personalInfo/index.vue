<template>  
<div>
  <h2 v-on:click='submitData'>Personal Info</h2>
  <custom-input label='First Name' placeholder='Enter your First Name' v-model='firstName'></custom-input>
  <custom-input label='Last Name' placeholder='Enter your Last Name' v-model='lastName'></custom-input>
  <custom-input label='Username' placeholder='Enter your Username' v-model='username'></custom-input>
  <custom-input label='Password' placeholder='Enter your Password' v-model='password'></custom-input>
  <h2>Location</h2>
  <custom-input label='Address' placeholder='Enter your Address' v-model='address.address'></custom-input>
  <custom-input label='City' placeholder='Enter your City' v-model='address.city'></custom-input>
  <custom-input label='Zip' placeholder='Enter your Zip' v-model='address.zip'></custom-input>
  <custom-input label='State' placeholder='Enter your State' v-model='address.state'></custom-input>

  <h5 >Bio</h5> 
  <textarea v-model='bio' id="" cols="30" rows="10"></textarea>
  
  <h3>Birthday</h3>
  <custom-input placeholder='Month' v-model='birthday.month'></custom-input>
  <custom-input placeholder='Day' v-model='birthday.day'></custom-input>
  <custom-input placeholder='Year' v-model='birthday.year'></custom-input>
</div>
</template>
<script>
import customInput from '../../../customComponents/input';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      password: '',
      username: '',
      address: {
        city: '',
        state: '',
        zip: '',
        address: '',
      },
      birthday: {
        day: null,
        month: null,
        year: null,
      },
      bio: '',
      ethnicity: '',
    };
  },
  props: [
    'setProperty'
  ],
  methods: {
    submitData() {
      Object.keys(this.$data).forEach((key) => {
        this.setProperty(key, this.$data[key]);
      });
    },
  },
  components: {
    customInput,
  },
};
</script>