import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_PEOPLE_WITH_CARS } from '../queries'; 
import { Card } from "antd";
import { CarOutlined } from '@ant-design/icons';

const Detail = () => { 
    const { id } = useParams();
    
    const { loading, error, data } = useQuery(GET_PEOPLE_WITH_CARS, {variables: {personId: id}});  
    if (loading) return <p>Loading...</p>;
    if (error) return `Error... ${error.message}`;

    const { people, allCars } = data;
    const { firstName, lastName } = people;

    const peopleOwnCar = []

    for (let i=0; i<allCars.length; i++) {
        if (allCars[i].personId === people.id) {
            peopleOwnCar.push(allCars[i])
        }
    }

    // console.log(peopleOwnCar);

    return <>
        <h1>Owner: {firstName} {lastName}</h1>
        <Card style={{ width: 350 }}>
            {peopleOwnCar.map((car) => (
                <h3 key={car.id} style={{marginBottom: 30, paddingTop: 15, paddingLeft: 15}}>
                    <CarOutlined style={{marginRight: 10}} />
                    {car.year} {car.make} {car.model} ${car.price}
                </h3>
            ))}
        </Card>
    
    </>
        
            

}

export default Detail