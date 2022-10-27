import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Card } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@apollo/client';
import { ADD_PEOPLE, GET_PEOPLE } from '../../queries';
import { UserAddOutlined } from '@ant-design/icons';


const AddPerson = () => {

    const [id, setId] = useState(uuidv4());
    const [addPeople] = useMutation(ADD_PEOPLE);

    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        const { firstName, lastName } = values;
        setId(uuidv4());

        addPeople({
            variables: {
                id,
                firstName,
                lastName
            },
            update: (proxy, { data: { addPerson } }) => {
                const data = proxy.readQuery({ query: GET_PEOPLE });
                proxy.writeQuery({ query: GET_PEOPLE, data: { ...data, people: [...data.people, addPerson] } });
            }
        })
    }

    return (
    <Card title="Add New People" cover={<UserAddOutlined style={{fontSize: 25, marginTop: 10}} />}  style={{ width: 400 }}>
        <Form form={form}  name='people-form' onFinish={onFinish}>
            <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: "Please input your first name"}]}>
                <Input placeholder='John'/>
            </Form.Item>
            <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: "Please input your last name"}]}>
                <Input placeholder='Doe'/>
            </Form.Item>
                <Form.Item shouldUpdate={true} wrapperCol={{ offset: 8, span: 16 }}>
                    {() => (
                        <Button style={{ marginTop: 20 }}  type="primary" htmlType="submit" disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length}>
                            Add
                        </Button>
                    )}
            </Form.Item>
        </Form>
    </Card>
    )
}

export default AddPerson