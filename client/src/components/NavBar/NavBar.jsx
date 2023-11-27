import React from 'react';
import './NavBar.less';
import config from './NavBarConfig.json';
import Logo from '../../assets/CodeSparks_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { removeUserSession } from '../../Utils/AuthRequests';
import { useGlobalState } from '../../Utils/userState';
import { Select } from 'antd'; 
import { useSettings } from '../../settingsContext';

export default function NavBar() {
  const { Option } = Select;
  const [value] = useGlobalState('currUser');
  const { settings, updateSettings } = useSettings();
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

  const colorOptions = [
    { label: 'Black', value: '#000000' },
    { label: 'White', value: '#ffffff' },
    { label: 'Red', value: '#ff0000' },
    { label: 'Green', value: '#00ff00' },
    { label: 'Blue', value: '#0000ff' },
    { label: 'Yellow', value: '#ffff00' },
    { label: 'Orange', value: '#ff9900' },
    { label: 'Purple', value: '#800080' },
    { label: 'Pink', value: '#ffc0cb' },
    { label: 'Brown', value: '#a52a2a' },
    { label: 'Gray', value: '#808080' },
    { label: 'Cyan', value: '#00ffff' },
    { label: 'Lime', value: '#00ff00' },
    { label: 'Magenta', value: '#ff00ff' },
    { label: 'Teal', value: '#008080' },
    { label: 'Indigo', value: '#4b0082' },
    { label: 'Silver', value: '#c0c0c0' },
    { label: 'Gold', value: '#ffd700' },
    { label: 'Maroon', value: '#800000' },
    { label: 'Olive', value: '#808000' },
    { label: 'Navy', value: '#000080' },
    { label: 'Aquamarine', value: '#7fffd4' },
    { label: 'Turquoise', value: '#40e0d0' },
    { label: 'SlateGray', value: '#708090' },
    { label: 'DarkSlateGray', value: '#2f4f4f' },
    { label: 'MediumPurple', value: '#9370db' },
    { label: 'RoyalBlue', value: '#4169e1' },
    { label: 'DeepSkyBlue', value: '#00bfff' },
    { label: 'MediumAquamarine', value: '#66cdaa' },
    { label: 'SteelBlue', value: '#4682b4' },
    { label: 'Tomato', value: '#ff6347' },
    { label: 'SeaGreen', value: '#2e8b57' },
    { label: 'Sienna', value: '#a0522d' },
    { label: 'RosyBrown', value: '#bc8f8f' },
    { label: 'PaleVioletRed', value: '#db7093' },
  ];

  const fontOptions = [
    { label: 'Arial', value: 'Arial, sans-serif' },
    { label: 'Arial Black', value: '"Arial Black", sans-serif' },
    { label: 'Arial Narrow', value: '"Arial Narrow", sans-serif' },
    { label: 'Courier New', value: '"Courier New", monospace' },
    { label: 'Georgia', value: 'Georgia, serif' },
    { label: 'Impact', value: 'Impact, sans-serif' },
    { label: 'Lucida Console', value: '"Lucida Console", monospace' },
    { label: 'Lucida Sans Unicode', value: '"Lucida Sans Unicode", sans-serif' },
    { label: 'Palatino Linotype', value: '"Palatino Linotype", serif' },
    { label: 'Tahoma', value: 'Tahoma, sans-serif' },
    { label: 'Times New Roman', value: '"Times New Roman", serif' },
    { label: 'Trebuchet MS', value: '"Trebuchet MS", sans-serif' },
    { label: 'Verdana', value: 'Verdana, sans-serif' },
    { label: 'Symbol', value: 'Symbol, sans-serif' },
    { label: 'Webdings', value: 'Webdings, sans-serif' },
    { label: 'Wingdings', value: 'Wingdings, sans-serif' },
    { label: 'MS Sans Serif', value: '"MS Sans Serif", sans-serif' },
    { label: 'MS Serif', value: '"MS Serif", sans-serif' },
    { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive' },
    { label: 'Courier', value: 'Courier, monospace' },
    { label: 'Garamond', value: 'Garamond, serif' },
    { label: 'Monotype Corsiva', value: '"Monotype Corsiva", cursive' },
    { label: 'Brush Script MT', value: '"Brush Script MT", cursive' },
  ];  

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
      const handleFontSizeChange = (fontSize) => {
        updateSettings({ fontSize });
      };
    
      const handleFontStyleChange = (fontStyle) => {
        let fontWeight = 'normal';
      
        if (fontStyle === 'bold') {
          fontWeight = 'bold';
        }
      
        updateSettings({ fontStyle, fontWeight });
      };
      
    
      const handleFontColorChange = (fontColor) => {
        updateSettings({ fontColor });
      };
 
      const handleFontFamilyChange = (fontFamily) => {
        updateSettings({ fontFamily });
      };

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
        <Link id='menu-link' to={routes.Help}>
          <i className='fa fa-question-circle' />
          &nbsp; Help
        </Link>
        <Link id='menu-link' to={routes.FAQs}>
          <i className='fa fa-question-circle' />
          &nbsp; FAQs
        </Link>
        <Link id='menu-link' to={routes.Settings}>
          <i className='fa fa-cogs' />
          &nbsp; Readability
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
      <Select
        value={settings.fontSize}
        onChange={handleFontSizeChange}
        style={{ width: 120 }}
      >
        <Select.Option value="small">Small</Select.Option>
        <Select.Option value="medium">Medium</Select.Option>
        <Select.Option value="large">Large</Select.Option>
      </Select>
      <Select
        value={settings.fontStyle}
        onChange={handleFontStyleChange}
        style={{ width: 120 }}
      >
        <Select.Option value="normal">Normal</Select.Option>
        <Select.Option value="italic">Italic</Select.Option>
        <Select.Option value="bold">Bold</Select.Option>
      </Select>
      <Select
        value={settings.fontColor}
        onChange={handleFontColorChange}
        style={{ width: 120 }}
      >
        {colorOptions.map((color) => (
          <Option key={color.value} value={color.value}>
            {color.label}
          </Option>
        ))}
      </Select>
      <Select
        value={settings.fontFamily}
        onChange={handleFontFamilyChange}
        style={{ width: 120, marginLeft: 10 }}
      >
        {fontOptions.map((font) => (
          <Option key={font.value} value={font.value}>
            {font.label}
          </Option>
        ))}
      </Select>
    </span>
  );
}
