import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import Footer from './Footer';
import Content from './Content';

const Layout = (props) => {
  return (
    <div>
      <Toolbar />
        <Sidebar/>
        <Content/>
       <Footer/>
     </div>
  );
};
export default Layout;
