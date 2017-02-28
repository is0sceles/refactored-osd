import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '../components/LandingPage';
import NavBar from '../components/NavBar';

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
      // children: [
        // {
        //   path: 'signup',
        //   name: 'SignupMain',
        //   component: SignUp,
        //   children: [
        //     {
        //       path: ':id',
        //       component: SignupStep
        //     }
        //   ]
        // },
      // ]
    },
  ],
});
