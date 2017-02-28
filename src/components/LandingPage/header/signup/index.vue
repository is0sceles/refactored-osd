<template>
  <div> 
    <custom-input label='Username' placeholder='Enter Username' :on-change='setUsername'></custom-input>
    <custom-input label='Password' placeholder='Enter Password' :on-change='setPassword'></custom-input>
    <custom-button :click-handler='signup' button-text='Sign Up'></custom-button>
  </div>
</template>
<script>
  import CustomInput from '../../../input';
  import CustomButton from '../../../button';

  export default {
    data() {
      return {
        password: '',
        username: '',
      };
    },
    methods: {
      signup() {
        console.log('username:', this.username, 'password,', this.password);
      },
      setPassword(password) {
        this.password = password;
        console.log(password);
      },
      setUsername(username) {
        this.username = username;
        console.log(username);
      },
    },
    components: {
      CustomButton,
      CustomInput,
    },
  };
</script>