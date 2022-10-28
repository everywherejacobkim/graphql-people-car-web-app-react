import { useMutation } from '@apollo/client';
import { filter } from "lodash";
import { GET_CARS, REMOVE_CAR } from "../../queries";
import { DeleteOutlined } from '@ant-design/icons';

const DeleteCar = (props) => {
    const { id, make, model } = props;

    const [removeCar] = useMutation(REMOVE_CAR, {
    update(cache, { data: { removeCar } }) {
        const { car } = cache.readQuery({ query: GET_CARS });
        cache.writeQuery({
        query: GET_CARS,
        data: {
            car: filter(car, (c) => c.id !== removeCar.id),
        },
        });
    },
    });

    const handleDelete = () => {
        let result = window.confirm(`Are you sure you want to delete ${make} ${model}?`);
        if (result) {
            removeCar({
                variables: {
                    id
                }
            })
        }
    }
    return (
        <DeleteOutlined style={{ fontSize: 20 }} onClick={handleDelete} />
    )
}

export default DeleteCar;