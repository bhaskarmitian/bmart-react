import React from 'react';
import Layout from './Layout';
import { NAV_LIST } from "./configComponents";
import { Redirect, Route, Switch } from 'react-router-dom';

function App(props) {
  let currentRoute = window.location.pathname;
  console.log(currentRoute);
   return (
     <Layout >
      <Switch>
        {NAV_LIST.map(page => (
          <Route key={page.name} path={page.path} component={page.component}/>
        ))}
        {/* <Redirect to={currentRoute} /> */}
      </Switch>
    </Layout>
   );
  //return pages;
}

export default App;
