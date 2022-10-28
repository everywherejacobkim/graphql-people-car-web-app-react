import { useMutation } from '@apollo/client';
import { filter } from "lodash";
import { GET_PEOPLE, REMOVE_PEOPLE } from "../../queries";
import { UserDeleteOutlined } from '@ant-design/icons';

const DeletePerson = (props) => {
    const { id, firstName, lastName } = props;
    
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

    const handleDelete = () => {
        let result = window.confirm(`Are you sure you want to delete ${firstName} ${lastName}?`);
        if (result) {
            removePerson({
                variables: {
                    id
                }
            })
        }
    }
    return (
        <UserDeleteOutlined
            onClick={handleDelete}
            style={{ fontSize: 24, marginTop: 10 }} />
    )
}

export default DeletePerson;