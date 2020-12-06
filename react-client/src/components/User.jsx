import React from "react";

import style from 'styles/User.module.css';
import Link from 'components/Link';

function User({ user }) {
  return (
    <div className={style.user}>
      <h2 className={style.name}>{user.name}</h2>
      <Link href={`mailto:${user.email}`}>
        <p>{user.email}</p>
      </Link>
      <Link href={`tel:${user.phone}`}>
        <p>{user.phone}</p>
      </Link>
    </div>
  )
}

export default User;
