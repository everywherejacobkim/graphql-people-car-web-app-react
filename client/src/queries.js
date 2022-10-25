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