import React from 'react';
import { Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import DeleteCar from '../buttons/DeleteCar';

const CarCard = (props) => {
    const { ownCars } = props;

    return (
        ownCars.map(({ id, year, make, model, price }) => (
            <Card key={id} title={year + ' ' + make + ' ' + model + ' -> $' + price}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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