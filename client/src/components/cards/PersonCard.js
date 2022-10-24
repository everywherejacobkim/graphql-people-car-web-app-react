import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../queries';

const PersonCard = () => {

  const { loading, error, data } = useQuery(GET_ALL_PEOPLE)
  if (loading) return <p>Loading...</p>;
  if (error) return `Error... ${error.message}`;

  console.log('all People Data', data.allPeople);


  return (
      <div>PersonCard</div>
  )
}



export default PersonCard