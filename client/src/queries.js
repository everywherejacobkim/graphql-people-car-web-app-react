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

export const UPDATE_PEOPLE = gql`
    mutation UpdatePeople($id: ID!, $firstName: String!, $lastName: String!) {
        updatePeople(id: $id, firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`