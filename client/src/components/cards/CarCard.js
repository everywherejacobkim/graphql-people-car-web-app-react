import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CARS } from '../../queries';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import DeleteCar from '../buttons/DeleteCar';

const CarCard = () => {
    const { personId } = useParams();
    const { loading, error, data } = useQuery(GET_CARS, {variables: {personId}});
    if (loading) return <p>Loading...</p>;
    if (error) return `Error... ${error.message}`;

    return (
        data.allCars.map(({ id, year, make, model, price }) => (
        <Card key={id} title={year + ' ' + make + ' ' + model + ' -> $'+ price}>
                <div style={{ display: 'flex', justifyContent:'space-around'}}>
                    <Link to={'/people/:personId'}>
                        <EditOutlined style={{ fontSize: 20 }} />  
                    </Link>
                    <DeleteCar id={id} year={year} make={make} model={model} price={price} />
            </div>
        </Card>
        ))
    )
}

export default CarCard