import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import Footer from './Footer';
import Content from './Content';
import Body from './Body';

const Layout = (props) => {
  return (
    <div>
      <Toolbar />
        <Sidebar/>
        <Content/>
        <Body/>
       <Footer/>
     </div>
  );
};
export default Layout;
