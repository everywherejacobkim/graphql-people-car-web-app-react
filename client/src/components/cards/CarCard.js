import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from '../../queries';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CarCard = () => {

    const { loading, error, data } = useQuery(GET_ALL_CARS)
    if (loading) return <p>Loading...</p>;
    if (error) return `Error... ${error.message}`;

    return (
        data.allCars.map(({ id, year, make, model, price }) => (
        <Card key={id} title={year + ' ' + make + ' ' + model + ' -> $'+ price}>
                <div style={{ display: 'flex', justifyContent:'space-around'}}>
                <EditOutlined />   
                <DeleteOutlined />
            </div>
        </Card>
        ))
    )
}


export default CarCard