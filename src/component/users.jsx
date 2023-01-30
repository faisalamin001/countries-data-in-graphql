import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

export default function Countries() {
  const GET_Users = gql`
    {
      countries {
        name
        code
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_Users);

  if (loading) return <h3>Loading...</h3>;
  console.log(data);

  return (
    <div>
      <h1
        style={{
          fontSize: '90px',
          fontFamily: 'sans-serif',
          fontWeight: '900',
          color: 'black',
        }}
      >
        Countries name
      </h1>
      {data?.countries.map(({ name, code }) => (
        <Link to={'/country/' + code} key={code}>
          <p style={{ fontSize: '20px', fontWeight: '' }}>{name}</p>
        </Link>
      ))}
    </div>
  );
}
