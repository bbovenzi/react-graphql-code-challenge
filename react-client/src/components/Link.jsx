import React from "react";

import 'styles/base.css';
import style from 'styles/Link.module.css';

function Link({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener" className={style.link}>
      {children}
    </a>
  )
}

export default Link;
