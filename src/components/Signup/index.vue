<template>
  <div>
    <progress-header></progress-header>
    <router-view :set-property='setProperty'></router-view>
  </div>
</template>

<script>
  import progressHeader from './progressHeader';

  export default {
    data() {
      return {
        username: '',
        password: '',
        ethnicity: '',
        birthday: 0,
        bio: '',
        address: {
          address: '',
          city: '',
          zip: '',
          state: '',
        },
        name: '',
      };
    },
    methods: {
      setProperty(propname, value) {
        console.log('setting ' + propname + ' to ', value)
        this[propname] = value;
      },
    },
    components: {
      progressHeader,
    },
  };

</script>