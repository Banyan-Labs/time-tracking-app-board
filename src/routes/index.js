import SampleComponent from '../Components/SampleComponent';

const routes = [
  { path: '/', component: SampleComponent, isProtected: false },
  { path: '/sign-up', component: SampleComponent, isProtected: false },
  { path: '/sign-in', component: SampleComponent, isProtected: false },
  { path: '/dashboard', component: SampleComponent, isProtected: false },
];

export default routes;
