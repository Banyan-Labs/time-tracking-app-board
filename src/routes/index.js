const routes = [
  { path: "/", component: () => <h2>Landing Page</h2>, isProtected: false },
  {
    path: "/sign-up",
    component: () => <h2>Sign up page</h2>,
    isProtected: false,
  },
  {
    path: "/sign-in",
    component: () => <h2>SIgn in page</h2>,
    isProtected: false,
  },
  {
    path: "/dashboard",
    component: () => <h2>Dashboard page</h2>,
    isProtected: false,
  },
];

export default routes;
