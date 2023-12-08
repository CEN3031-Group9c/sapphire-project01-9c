import React from 'react';
import { Link } from 'react-router-dom';
import './RouteButton.less';

export default function RouteButton({ link, id, size, variant, children, ariaLabel }) {
  return (
    <Link to={link}>
      <button 
        id={id} 
        className={`btn-${variant} btn-${size}`} 
        type='button'
        aria-label={ariaLabel || children}
      >
        {children}
      </button>
    </Link>
  );
}
