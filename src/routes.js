import React from 'react';

const Starter = React.lazy(() => import('./views/Starter/Starter.js'));
const Income = React.lazy(() => import('./views/page/Income.js'));
const expenses = React.lazy(() => import('./views/page/Expenses'));
const incomechart = React.lazy(() => import('./views/page/charts/Income_chart'));
const expenseschart = React.lazy(() => import('./views/page/charts/Expenses_chart'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/starter', name: 'Starter Dashboard', component: Starter },
  { path:'/Income', name:'Income',component:Income},
  { path:'/expenses', name:'expenses',component:expenses},
  { path:'/Incomechart', name:'Incomechart',component:incomechart},
  { path:'/expenseschart', name:'expenseschart',component:expenseschart},
  

];

export default routes;
