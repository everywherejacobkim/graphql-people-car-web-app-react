import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Card, Cascader } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@apollo/client';
import { ADD_CAR } from '../../queries';
import { CarOutlined } from '@ant-design/icons';

const CarForm = () => {

    const [id] = useState(uuidv4());
    const [addCar] = useMutation(ADD_CAR);

    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        const {
            year,
            make,
            model,
            price,
            personId
        } = values;
        
        addCar({
            variables: {
                id,
                year,
                make,
                model,
                price,
                personId
            }
        })
    }

    const options = [
        {
            value: '1',
            label: '1',
        },
        {
            value: '2',
            label: '2',
        },
        {
            value: '3',
            label: '3',
        },
    ]

    const formStyles = () => ({
        flex: {
            display: 'flex',
            gap: 10
        }
    })
    const styles = formStyles()

    return (
        <Card title="Add New Car" cover={<CarOutlined style={{fontSize: 25, marginTop: 10}} />} style={{ width: 500 }}>
            <Form form={form} name='car-form' onFinish={onFinish}>
                <div style={styles.flex}>
                    <Form.Item name="year" label="Year" rules={[{ required: true, message: "Please input the year of your car"}]}>
                        <Input placeholder='2022'/>
                    </Form.Item>
                    <Form.Item name="make" label="Make" rules={[{ required: true, message: "Please input the make of your car"}]}>
                        <Input placeholder='Toyota'/>
                    </Form.Item>
                </div>
                <div style={styles.flex}>
                    <Form.Item name="model" label="Model" rules={[{ required: true, message: "Please input the model of your car"}]}>
                        <Input placeholder='Corolla'/>
                    </Form.Item>
                    <Form.Item name="price" label="Price" rules={[{ required: true, message: "Please input the price of your car"}]}>
                        <Input placeholder='30000'/>
                    </Form.Item>
                </div>
                <Form.Item name="personId" label="Person ID" rules={[{ required: true, message: "Please input the make of your car"}]}>
                    <Cascader options={options} placeholder="Please select" />
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

export default CarForm