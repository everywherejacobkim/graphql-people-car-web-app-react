import { useMutation } from '@apollo/client';
import { filter } from "lodash";
import { GET_PEOPLE, REMOVE_PEOPLE } from "../../queries";
import { UserDeleteOutlined } from '@ant-design/icons';

const DeletePerson = (props) => {
    const { id } = props
    const [removePerson] = useMutation(REMOVE_PEOPLE, {
    update(cache, { data: { removePerson } }) {
        const { people } = cache.readQuery({ query: GET_PEOPLE });
        cache.writeQuery({
        query: GET_PEOPLE,
        data: {
            people: filter(people, (c) => c.id !== removePerson.id),
        },
        });
    },
    });

    const handleDelete = ()=> {
        removePerson({
        variables: {
            id
        }
        })
    }
    return (
        <UserDeleteOutlined
            onClick={handleDelete}
            style={{ fontSize: 25, marginTop: 10 }} />
    )
}

export default DeletePerson;