import React from 'react'
import Title from '../components/layout/Title';
import AddPerson from '../components/form/AddPerson';
import PersonCard from '../components/cards/PersonCard';
import AddCar from '../components/form/AddCar';

const Home = () => {
    return (
        <div>
            <Title />
            <div style={{ display: 'flex', gap: 40 }}>
                <AddPerson />
                <AddCar />
            </div>
            <PersonCard />
        </div>
    )
}

export default Home