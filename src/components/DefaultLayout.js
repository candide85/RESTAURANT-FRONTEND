import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'

import {
    ShoppingCartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UnorderedListOutlined,
    HomeOutlined,
    UserOutlined,
    LogoutOutlined,
    DollarCircleOutlined
  } from '@ant-design/icons';

  import { Layout, Menu } from 'antd';

  import '../styles/defaultLayout.css'
  import Spinner from './Spinner';
  
  const { Header, Sider, Content } = Layout;
  
  const DefaultLayout = ({children}) => {
    const {cartItems, loading} = useSelector(state => state.rootReducer)
    const [collapsed, setCollapsed] = useState(false);
    
    const navigate = useNavigate()

    useEffect(() => {      
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])
    
    
    return (
      <Layout>
        {loading && <Spinner />}
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h2 className=' text-center text-light font-weight-bold'>POS</h2>
          </div>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={window.location.pathname}>
            <Menu.Item key='/' icon={<HomeOutlined />}>
                <Link to='/' >HOME</Link>
            </Menu.Item>
            <Menu.Item key='/bills' icon={<DollarCircleOutlined />}>
                <Link to='/bills' >BILLS</Link>
            </Menu.Item>
            <Menu.Item key='/items' icon={<UnorderedListOutlined />}>
                <Link to='/items' >ITEMS</Link>
            </Menu.Item>
            <Menu.Item key='customers' icon={<UserOutlined />}>
                <Link to='/customers' >CUSTOMERS</Link>
            </Menu.Item>
            <Menu.Item key='/logout' icon={<LogoutOutlined />}>
                <Link to='/logout' >LOGOUT</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, display:'flex', justifyContent:'space-between', alignItems:'center' }}>          
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <div className='cart-item' style={{display:'flex'}} onClick={() => navigate('/cart')}>
              <p style={{fontSize:'25px'}}>{cartItems.length}</p>
              <ShoppingCartOutlined style={{marginTop:'40px', marginRight:'50px'}}/>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default DefaultLayout;