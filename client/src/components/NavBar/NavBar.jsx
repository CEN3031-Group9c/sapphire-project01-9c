import React from 'react';
import './NavBar.less';
import config from './NavBarConfig.json';
import Logo from '../../assets/CodeSparks_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { removeUserSession } from '../../Utils/AuthRequests';
import { useGlobalState } from '../../Utils/userState';

export default function NavBar() {
  const [value] = useGlobalState('currUser');
  let currentRoute = window.location.pathname;
  let navigate = useNavigate();
  let routes = config.routes;

  const handleLogout = () => {
    removeUserSession();
    navigate('/');
  };

  const handleRouteChange = (route) => {
    navigate(route);
  };

  const shouldShowRoute = (route) => {
    if (currentRoute === routes[route]) return false;
    return (
      config.users[value.role].includes(route) ||
      (value.role === 'Teacher' && route === 'TeacherLogin') ||
      (value.role === 'Student' && route === 'StudentLogin') ||
      (value.role === 'Researcher' && route === 'ResearcherLogin') ||
      (value.role === 'ContentCreator' && route === 'ContentCreatorLogin')
    );
  };

  const menu = (
    <Menu>
      {shouldShowRoute('Home') ? (
        <Menu.Item key='0' onClick={() => handleRouteChange(routes.Home)}>
          <i className='fa fa-home' />
          &nbsp; Home
        </Menu.Item>
      ) : null}
      {shouldShowRoute('Dashboard') ? (
        <Menu.Item key='1' onClick={() => handleRouteChange(routes.Dashboard)}>
          <i className='fa fa-home' />
          &nbsp; Dashboard
        </Menu.Item>
      ) : null}
      {shouldShowRoute('ContentCreatorDashboard') ? (
        <Menu.Item
          key='2'
          onClick={() => handleRouteChange(routes.ContentCreatorDashboard)}
        >
          <i className='fa fa-home' />
          &nbsp; Dashboard
        </Menu.Item>
      ) : null}
      {shouldShowRoute('ResearcherDashboard') ? (
        <Menu.Item
          key='3'
          onClick={() => handleRouteChange(routes.ResearcherDashboard)}
        >
          <i className='fa fa-home' />
          &nbsp; Dashboard
        </Menu.Item>
      ) : null}
      {shouldShowRoute('Sandbox') ? (
        <Menu.Item
          key='4'
          onClick={() => {
            localStorage.removeItem('sandbox-activity');
            handleRouteChange(routes.Sandbox);
          }}
        >
          <i className='fa fa-window-maximize' />
          &nbsp; Sandbox
        </Menu.Item>
      ) : null}
    </Menu>
  );

  return (
    <span id='navBar'>
      <Link
        id='link'
        to={
          value.role === 'ContentCreator'
            ? '/ccdashboard'
            : value.role === 'Mentor'
            ? '/dashboard'
            : value.role === 'Student'
            ? '/student'
            : value.role === 'Researcher'
            ? '/report'
            : '/'
        }
      >
        <img src={Logo} id='CodeSparks-logo' alt='logo' />
      </Link>
      <div id='menu-links'>
        <Link id='menu-link' to={routes.About}>
          <i className='fa fa-info-circle' />
          &nbsp; About
        </Link>
        {/* Add a link for "Help" */}
        <Link id='menu-link' to={routes.Help}>
          <i className='fa fa-question-circle' />
          &nbsp; Help
        </Link>
        {/* Add a link for "FAQs" */}
        <Link id='menu-link' to={routes.FAQs}>
          <i className='fa fa-question-circle' />
          &nbsp; FAQs
        </Link>
        <button
          className="menu-button"
          onClick={() => handleRouteChange(routes.TeacherLogin)}
        >
          Login
        </button>
        <button
          className="menu-right-button"
          onClick={() => handleRouteChange(routes.SignUp)}
        >
          SignUp
        </button>
      </div>
      <div id='dropdown-menu'>
        <Dropdown overlay={menu} trigger={['click']}>
          <button
            className='ant-dropdown-link'
            onClick={(e) => e.preventDefault()}
          >
            {value.name ? value.name : 'Menu'} <DownOutlined />
          </button>
        </Dropdown>
      </div>
    </span>
  );
}
