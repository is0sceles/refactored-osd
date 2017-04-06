<template>
<div>
  <dating-prefs v-if="this.$route.params.step === 'dating'" :set-property='setProperty'></dating-prefs>
  <upload-container v-else-if='this.$route.params.step === "image"' :set-property='setProperty'></upload-container>
  <personal-info v-else-if='this.$route.params.step === "personal"' :set-property='setProperty'></personal-info>
</div>
</template>
<script>
import datingPrefs from './datingPrefs';
import uploadContainer from './uploadContainer';
import personalInfo from './personalInfo';

export default {
  computed: {
  },
  components: {
    datingPrefs,
    uploadContainer,
    personalInfo,
  },
  props: [
    'setProperty',
  ],
};

</script>