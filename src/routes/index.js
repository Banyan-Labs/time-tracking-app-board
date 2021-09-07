import SampleComponent from '../Components/SampleComponent';
import LandingPage from '../Pages/LandingPage';
import DashboardPage from '../Pages/DashboardPage';
import SignUpPage from '../Pages/SignUpPage';
import SignInPage from '../Pages/SignInPage';

const routes = [
  { path: '/', component: LandingPage, isProtected: false },
  { path: '/sign-up', component: SignUpPage, isProtected: false },
  { path: '/sign-in', component: SignInPage, isProtected: false },
  { path: '/dashboard', component: DashboardPage, isProtected: false },
  { path: '/dev', component: SampleComponent, isProtected: false },
];

export default routes;
