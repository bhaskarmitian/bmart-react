import React from 'react';
import Layout from './Layout';
import { NAV_LIST} from "./configComponents";

function App() {
  const appRoutes = NAV_LIST.map(page => page);
//   console.log("appRoutes  "+appRoutes)
//   if (
//     authRoutes.includes(currentRoute) ||
//     (props.auth.isAuthenticated && !appRoutes.includes(currentRoute))
//   )
//     currentRoute = "/dashboard";
//   pages = (
//     <Layout auth={props.auth} route={props.location}>
//       <Suspense fallback={<Loader />}>
//         <Switch>
//           {NAV_LIST.map(page => (
//             <Route
//               key={page.name}
//               path={page.path}
//               component={page.component}
//             />
//           ))}
//           <Redirect to={currentRoute} />
//         </Switch>
//       </Suspense>
//     </Layout>
//   );
// }
  return (
    <Layout {...{ title: appRoutes.name }}>{React.createElement(appRoutes.component)}</Layout>
    // if(appRoutes.includes('/login')){
    //   <Layout {...{ title: appRoutes.name }}>{React.createElement(appRoutes.component)}</Layout>
    // }else{
    //   <Layout {...{ title: appRoutes.name }}>{React.createElement(appRoutes.component)}</Layout>
    // }

    
        
  );
}

export default App;
