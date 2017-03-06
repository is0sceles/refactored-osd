<template>  
<div>
  <h2>Dating Preferences</h2>
  <h3>Age Preference</h3>
  <div>
    <label >Minimum Age</label>
    <input type="range" min='5' max='100' v-model='minAge'> 
    <span> {{minAge}} </span>
  </div>
  <div>
    <label >Maximum Age</label>
    <input type="range" min='5' max='100' v-model='maxAge'> 
    <span> {{maxAge}} </span>
  </div>
  <h3 >Distance Willing to Travel</h3>
  <div>
    <input type="range" min='5' max='100' v-model='travelDistance'> 
    <span> {{`${travelDistance} miles`}} </span>
  </div>
  <h3>Ethnicity Preference</h3>
  <div>
    <div>
      <input type="checkbox" name='ethnicity' value='white' v-on:change='addEthnicityPreference'>
      <label>White</label>
    </div>
    <div>
      <input type="checkbox" name='ethnicity' value='Black' v-on:change='addEthnicityPreference'>
      <label>Black</label>
    </div>
    <div>
      <input type="checkbox" name='ethnicity' value='Middle Eastern' v-on:change='addEthnicityPreference'>
      <label>Middle Eastern</label>
    </div>
    <div>
      <input type="checkbox" name='ethnicity' value='Asian' v-on:change='addEthnicityPreference'>
      <label>Asian</label>
    </div>
    <div>
      <input type="checkbox" name='ethnicity' value='Other' v-on:change='addEthnicityPreference'>
      <label>Other</label>
    </div>
  </div>
  <h3>Sexual Preference</h3>
  <div>
    <landing-selection  
    :set-gender='(value) => this.setProperty("gender", value)' 
    :set-looking-for='(value) => this.setProperty("lookingFor", value)'>
    </landing-selection>
  </div>
  
</div>
</template>
<script>
import landingSelection from '../../../LandingPage/header/landingSelection';

export default {
  data() {
    return {
      minAge: 0,
      maxAge: 0,
      travelDistance: 0,
      ethnicityPreferences: [],
    };
  },
  props: [
    'setProperty',
  ],
  methods: {
    submitData() {
      Object.keys(this.$data).forEach((key) => {
        this.setProperty(key, this.$data[key]);
      });
    },
    addEthnicityPreference({ target: { value } }) {
      console.log(value);
      if (this.ethnicityPreferences.includes(value)) {
        this.ethnicityPreferences.splice(this.ethnicityPreferences.indexOf(value), 1);
      } else {
        this.ethnicityPreferences.push(value);
      }
      console.log(this.ethnicityPreferences);
    },
  },
  components: {
    landingSelection,
  },
};
</script>