import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '../components/LandingPage';
import NavBar from '../components/NavBar';
<<<<<<< HEAD
import SignupStep from '../components/Signup/SignupStep'
import Signup from '../components/Signup'
=======
import Calendar from '../components/Calendar';
>>>>>>> Updated router to have basic path to calendar

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
<<<<<<< HEAD
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
=======
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
        {
          path: 'calendar',
          name: 'calendar',
          component: Calendar,
        }
>>>>>>> Updated user path to go to calendar
      ]
    },
  ],
});
