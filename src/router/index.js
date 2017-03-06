import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '../components/LandingPage';
import NavBar from '../components/NavBar';
import SignupStep from '../components/Signup/SignupStep'
import Signup from '../components/Signup'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage,
    },
    {
      path: '/user',
      name: 'user',
      component: NavBar,
      children: [
        {
          path: 'signup',
          name: 'SignupMain',
          component: Signup,
          children: [
            {
              path: ':step',
              component: SignupStep
            }
          ]
        },
      ]
    },
  ],
});
