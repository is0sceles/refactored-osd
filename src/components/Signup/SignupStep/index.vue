<template>
<div>
  <dating-prefs v-if="this.$route.params.step === 'dating'" :set-property='setProperty'></dating-prefs>
  <image-upload v-else-if='this.$route.params.step === "image"' :set-property='setProperty'></image-upload>
  <personal-info v-else-if='this.$route.params.step === "personal"' :set-property='setProperty'></personal-info>
</div>
</template>
<script>
import datingPrefs from './datingPrefs';
import imageUpload from './imageUpload';
import personalInfo from './personalInfo';

export default {
  computed: {
  },
  components: {
    datingPrefs,
    imageUpload,
    personalInfo,
  },
  props: [
    'setProperty',
  ],
};

</script>