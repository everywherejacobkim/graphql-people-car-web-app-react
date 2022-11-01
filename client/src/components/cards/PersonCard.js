import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE_AND_CARS } from '../../queries';
import { Card, Collapse } from 'antd';
import CarCard from './CarCard';
import DeletePerson from '../buttons/DeletePerson';
import EditPerson from '../buttons/EditPerson';
import UpdatePerson from '../form/UpdatePerson';


const PersonCard = () => {

  const { loading, error, data } = useQuery(GET_ALL_PEOPLE_AND_CARS)
  if (loading) return <p>Loading...</p>;
  if (error) return `Error... ${error.message}`;

  const { Panel } = Collapse;

  const peopleWithCars = data.allPeople.map((people) => {
    return {
        ...people,
        ownCars: data.allCars.filter((cars) => cars.personId === people.id),
    };
    });

  return (
    peopleWithCars.map(({ id, firstName, lastName, ownCars }) => (
      <Card key={id} title={firstName + ' ' + lastName} style={{ marginTop: 40, width: 940 }} cover={
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-start', marginLeft: 30 }}>
          <DeletePerson id={id} firstName={firstName} lastName={lastName} />
          <Collapse bordered={false} defaultActiveKey={['1']} style={{background: 'none'}}>
            <Panel showArrow={false} header={<EditPerson />}>
              <UpdatePerson />
            </Panel>
          </Collapse>
        </div>
        }>
        <CarCard ownCars={ownCars}/>
      </Card>
      ))
  )
}


export default PersonCard



