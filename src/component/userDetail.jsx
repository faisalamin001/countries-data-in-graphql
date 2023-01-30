import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';

export default function Country() {
  const { id: myId } = useParams();

  const GET_User = gql`
    query getCountry($code: ID!) {
      country(code: $code) {
        name
        native
        phone
        capital
        currency
        languages {
          name
        }
        emoji
        states {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_User, {
    variables: {
      code: String(myId),
    },
  });

  if (loading) return <h3>Loading...</h3>;
  if (error) return console.log(error);
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
        Country detail
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <span
          style={{
            fontSize: '500px',
            marginTop: '-150px',
            paddingRight: '200px',
          }}
        >
          {' '}
          {data?.country.emoji}{' '}
        </span>
        <div
          style={{
            fontSize: '20px',
            fontFamily: 'sans-serif',
            fontWeight: '900',
            marginLeft: '-200px',
            color: 'black',
          }}
        >
          <p>
            <span>Name : </span> {data?.country.name}
          </p>
          <p>
            <span>Native : </span> {data?.country.native}
          </p>
          <p>
            <span>Capital : </span> {data?.country.capital}
          </p>
          <p>
            <span>Phone : </span> {data?.country.phone}
          </p>
          <p>
            <span>Currency : </span> {data?.country.currency}
          </p>
          <span>Languages : </span>
          {data?.country.languages.map((language) => (
            <span key={language.name}>{language.name} , </span>
          ))}
          {data?.country.states.map((state) => (
            <p key={state.name}>
              <span>States : </span> {state.name}
            </p>
          ))}
        </div>
      </div>
      <h1 style={{ marginTop: '-100px' }}>
        <Link style={{ color: 'blue' }} to='/'>
          Home
        </Link>
      </h1>
    </div>
  );
}
