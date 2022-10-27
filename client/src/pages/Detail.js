import React from 'react';
// import { useQuery } from '@apollo/client';
// import { useParams } from 'react-router-dom';
// import { GET_PEOPLE_AND_CARS } from '../queries';
// import { Card } from 'antd';
import UpdateCar from '../components/form/UpdateCar';

const Detail = () => {
    // const { id } = useParams();

    // const { loading, error, data } = useQuery(GET_PEOPLE_AND_CARS, {variables: {id}});
    // if (loading) return "Loading...";
    // if (error) return `Error ${error.message}`;

    return <>
        <UpdateCar />
    </>

}

export default Detail