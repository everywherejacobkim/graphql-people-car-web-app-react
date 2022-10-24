import { gql } from 'apollo-server-express';
import { find, remove } from 'lodash';

const allPeople_data = [
    {
        id: '1',
        firstName: 'Bill',
        lastName: 'Gates'
    },
    {
        id: '2',
        firstName: 'Steve',
        lastName: 'Jobs'
    },
    {
        id: '3',
        firstName: 'Linux',
        lastName: 'Torvalds'
    }
]

const allCars_data = [
    {
        id: '1',
        year: '2019',
        make: 'Toyota',
        model: 'Corolla',
        price: '40000',
        personId: '1'
    },
    {
        id: '2',
        year: '2018',
        make: 'Lexus',
        model: 'LX 600',
        price: '13000',
        personId: '1'
    },
    {
        id: '3',
        year: '2017',
        make: 'Honda',
        model: 'Civic',
        price: '20000',
        personId: '1'
    },
    {
        id: '4',
        year: '2019',
        make: 'Acura ',
        model: 'MDX',
        price: '60000',
        personId: '2'
    },
    {
        id: '5',
        year: '2018',
        make: 'Ford',
        model: 'Focus',
        price: '35000',
        personId: '2'
    },
    {
        id: '6',
        year: '2017',
        make: 'Honda',
        model: 'Pilot',
        price: '45000',
        personId: '2'
    },
    {
        id: '7',
        year: '2019',
        make: 'Volkswagen',
        model: 'Golf',
        price: '40000',
        personId: '3'
    },
    {
        id: '8',
        year: '2018',
        make: 'Kia',
        model: 'Sorento',
        price: '45000',
        personId: '3'
    },
    {
        id: '9',
        year: '2017',
        make: 'Volvo',
        model: 'XC40',
        price: '55000',
        personId: '3'
    }
]

const typeDefs = gql`
    type People {
        id: String!
        firstName: String
        lastName: String
    }

    type Car {
        id: String!
        year: Int
        make: String
        model: String
        price: Float
        personId: String
    }

    type Query {
        allPeople: [People]
        people(id: String): People
    
        allCars: [Car]
        car(id: String): Car
    }

    type Mutation {
        addPeople(id: String!, firstName: String!, lastName: String!): People,
        removePeople(id: String!): People,
        updatePeople(id: String!, firstName: String, lastName: String): People,
        
        addCar(id: String!, year: Int!, make: String!, model: String!, price: Float!, personId: String!): Car,
        removeCar(id: String!): Car,
        updateCar(id: String!, year: Int, make: String, model: String, price: Float, personId: String): Car,
    }
`

const resolvers = {
    Query: {
        allPeople: () => allPeople_data,
        people(parent, args, context, info) {
            return find(allPeople_data, { id: args.id })
        },
        allCars: () => allCars_data,
        car(parent, args, context, info) {
            return find(allCars_data, { id: args.id })
        },
    },
    Mutation: {
        addPeople: (root, args) => {
            const newPeople = {
                id: args.id,
                firstName: args.firstName,
                lastName: args.lastName
            }
            allPeople_data.push(newPeople)
            return newPeople
        },
        removePeople: (root, args) => {
            const peopleWillBeRemoved = find(allPeople_data, { id: args.id })
            if (!peopleWillBeRemoved) {
                throw new Error(`Couldn't find people with id ${args.id}`)
            }
            remove(allPeople_data, people => {
                return people.id === peopleWillBeRemoved.id
            })
            return peopleWillBeRemoved
        },
        updatePeople: (root, args) => {
            const people = find(allPeople_data, { id: args.id })
            if (!people) {
                throw new Error(`Couldn't find people with id ${args.id}`)
            }
            people.firstName = args.firstName
            people.lastName = args.lastName
        },

        addCar: (root, args) => {
            const newCar = {
                id: args.id,
                year: args.year,
                make: args.make,
                model: args.model,
                price: args.price,
                personId: args.personId
            }
            allCars_data.push(newCar)
            return newCar
        },
        removeCar: (root, args) => {
            const carWillBeRemoved = find(allCars_data, { id: args.id })
            if (!carWillBeRemoved) {
                throw new Error(`Couldn't find car with id ${args.id}`)
            }
            remove(allCars_data, car => {
                return car.id === carWillBeRemoved.id
            })
            return carWillBeRemoved
        },
        updateCar: (root, args) => {
            const car = find(allCars_data, { id: args.id })
            if (!car) {
                throw new Error(`Couldn't find car with id ${args.id}`)
            }
            car.firstName = args.firstName,
            car.year = args.year,
            car.make = args.make,
            car.model = args.model,
            car.price = args.price,
            car.personId = args.personId
        },
    }
}

export { typeDefs, resolvers }
