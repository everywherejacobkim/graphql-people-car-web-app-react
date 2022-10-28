import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../queries';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import DeletePerson from '../buttons/DeletePerson';
import EditPerson from '../buttons/EditPerson';

const PersonCard = () => {

  const { loading, error, data } = useQuery(GET_ALL_PEOPLE)
  if (loading) return <p>Loading...</p>;
  if (error) return `Error... ${error.message}`;

  return (
    data.allPeople.map(({ id, firstName, lastName }) => (
      <Card key={id} title={firstName + ' ' + lastName} style={{ marginTop: 40, width: 940 }} cover={
        <div style={{ display: 'flex', gap: 20, justifyContent: 'flex-start', marginLeft: 30 }}>
          <Link to={'/people/edit'}>
            <EditPerson />
          </Link>
          <DeletePerson id={id} firstName={firstName} lastName={lastName} />
        </div>
        }>
        <CarCard />
      </Card>
      ))
  )
}


export default PersonCard



