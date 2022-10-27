import { gql } from "@apollo/client";

export const GET_ALL_PEOPLE = gql`
    query GetAllPeople {
        allPeople {
        id
        firstName
        lastName
    }
}
`;

export const GET_ALL_CARS = gql`
    query GetAllCars {
        allCars {
        id
        year
        make
        model
        price
        personId
    }
}
`;

export const ADD_PEOPLE = gql`
    mutation AddPeople($id: String!, $firstName: String!, $lastName: String!) {
        addPeople(id: $id, firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`;

export const UPDATE_PEOPLE = gql`
    mutation UpdatePerson($id: String!, $firstName: String!, $lastName: String!) {
        updatePeople(id: $id, firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`;

export const REMOVE_PEOPLE = gql`
    mutation RemovePerson($id: String!) {
        removePeople(id: $id) {
            id
            firstName
            lastName
        }
    }
`;


export const ADD_CAR = gql`
    mutation AddCar($id: String!, $year: Int!, $make: String!, $model: String!, $price: Float!, $personId: String!) {
        addCar(id: $id, year: $year, make: $make, model: $model, price: $price, personId: $personId) {
            id
            year
            make
            model
            price
            personId
        }
    }
`;

export const UPDATE_CAR = gql`
    mutation UpdateCar($id: String!, $year: Int!, $make: String!, $model: String!, $price: Float!, $personId: String!) {
        updateCar(id: $id, year: $year, make: $make, model: $model, price: $price, personId: $personId) {
            id
            year
            make
            model
            price
            personId
        }
    }
`;

export const REMOVE_CAR = gql`
    mutation RemoveCar($id: String!) {
        removeCar(id: $id) {
            id
            year
            make
            model
            price
            personId
        }
    }
`;