import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../queries';
import { Card, Collapse } from 'antd';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import DeletePerson from '../buttons/DeletePerson';
import EditPerson from '../buttons/EditPerson';
import UpdatePerson from '../form/UpdatePerson';

const PersonCard = () => {

  const { loading, error, data } = useQuery(GET_ALL_PEOPLE)
  if (loading) return <p>Loading...</p>;
  if (error) return `Error... ${error.message}`;

  const { Panel } = Collapse;

  return (
    data.allPeople.map(({ id, firstName, lastName }) => (
      <Card key={id} title={firstName + ' ' + lastName} style={{ marginTop: 40, width: 940 }} cover={
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-start', marginLeft: 30 }}>
          <Collapse bordered={false} defaultActiveKey={['1']} style={{background: 'none'}}>
            <Panel header={<EditPerson />}>
              <UpdatePerson />
            </Panel>
          </Collapse>
          <DeletePerson id={id} firstName={firstName} lastName={lastName} />
        </div>
        }>
        <CarCard />
      </Card>
      ))
  )
}


export default PersonCard



