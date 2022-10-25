import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../queries';
import { Card } from 'antd';
import CarCard from './CarCard';

const PersonCard = () => {

  const { loading, error, data } = useQuery(GET_ALL_PEOPLE)
  if (loading) return <p>Loading...</p>;
  if (error) return `Error... ${error.message}`;

  return (
    data.allPeople.map(({ id, firstName, lastName }) => (
      <Card title={firstName + ' ' + lastName} style={{marginTop: 40, width: 940}}>

        <CarCard />

      </Card>
      ))
  )
}


export default PersonCard



