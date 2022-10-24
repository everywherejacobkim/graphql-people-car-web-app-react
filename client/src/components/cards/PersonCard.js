import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../queries';
import { List } from 'antd';

const PersonCard = () => {

  const { loading, error, data } = useQuery(GET_ALL_PEOPLE)
  if (loading) return <p>Loading...</p>;
  if (error) return `Error... ${error.message}`;

  console.log('all People Data', data.allPeople);


  return (
    <List>
      {
        data.allPeople.map(({id, firstName, lastName}) => (
            <List.Item key={id}>
              <h3>{firstName} {lastName}</h3>
            </List.Item>
        ))
      }
    </List>
  )
}



export default PersonCard