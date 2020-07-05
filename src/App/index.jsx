import React from 'react';
import Layout from './Layout';
import { NAV_LIST} from "./configComponents";

function App() {
  //const appRoutes = NAV_LIST.map(page => page);
 const appRoutes = NAV_LIST[1];
  console.log("appRoutes  "+appRoutes.name +"  "+appRoutes.path);
  
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
    
    <Layout  {...appRoutes}>{React.createElement(appRoutes.component)}</Layout>
   
  );
}

export default App;
