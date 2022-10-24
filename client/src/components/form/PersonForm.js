import React from 'react';
import { Form, Input, Button } from 'antd';

const PersonForm = () => {
    return (
    <Form name='people-form'>
        <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: "Please input your first name"}]}>
            <Input placeholder='John'/>
        </Form.Item>
        <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: "Please input your last name"}]}>
            <Input placeholder='Doe'/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
    )
}

export default PersonForm