import React, {useState, useEffect} from 'react';
import { Form, Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@apollo/client';
import { UPDATE_PEOPLE } from '../../queries';


const PersonForm = () => {

    const [id] = useState(uuidv4());
    const [updatePeople] = useMutation(UPDATE_PEOPLE);

    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => { 
        const { firstName, lastName } = values;
        console.log('firstName', firstName);
        console.log('lastName', lastName);
    }


    return (
    <Form form={form}  name='people-form' onFinish={onFinish}>
        <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: "Please input your first name"}]}>
            <Input placeholder='John'/>
        </Form.Item>
        <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: "Please input your last name"}]}>
            <Input placeholder='Doe'/>
        </Form.Item>
            <Form.Item shouldUpdate={true} wrapperCol={{ offset: 8, span: 16 }}>
                {() => (
                    <Button type="primary" htmlType="submit" disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length}>
                        Submit
                    </Button>
                )}
        </Form.Item>
    </Form>
    )
}

export default PersonForm