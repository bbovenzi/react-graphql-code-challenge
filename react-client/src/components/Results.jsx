import React from 'react';
import { gql, useQuery } from '@apollo/client';

import style from 'styles/Results.module.css';
import User from 'components/User';

export const GET_USERS = gql`
  query users {
    users {
      id
      name
      email
      phone
    }
  }
`;

function Results() {
  const { loading, error, data } = useQuery(GET_USERS)

  if (error) {
    console.log(error);
    return <div>Error :(</div>;
  }
  if (loading) return <div>Loading...</div>;

  return (
    <div className={style.results}>
      {data.users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
};

export default Results;
