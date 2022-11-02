import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Card, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@apollo/client';
import { UPDATE_CAR, GET_ALL_PEOPLE_AND_CARS } from '../../queries';
import { CarOutlined } from '@ant-design/icons';
import { useQuery } from "@apollo/client";

const UpdateCar = () => {

    const [id, setId] = useState(uuidv4());
    const [personId, setPersonId] = useState('')
    const [updateCar] = useMutation(UPDATE_CAR);

    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        const { make, model } = values;
        const year = parseInt(values.year);
        const price = parseFloat(values.price);
        setId(uuidv4());
        
        updateCar({
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

    const { loading, error, data } = useQuery(GET_ALL_PEOPLE_AND_CARS);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    const formStyles = () => ({
        flex: {
            display: 'flex',
            gap: 10
        }
    })
    const styles = formStyles()

    return (
        <Card title="Update Car" cover={<CarOutlined style={{fontSize: 25, marginTop: 10}} />} style={{ width: 500 }}>
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
                    <Form.Item name="personId" label="Person ID" rules={[{ required: true, message: "Please select owner id of the car"}]}>
                        <Select placeholder="Please select" onChange={(value) => setPersonId(value)}>
                            {data.allPeople.map((people) => (
                                <Select.Option key={people.id} value={people.id}>
                                    {people.id}    
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item shouldUpdate={true} wrapperCol={{ offset: 8, span: 16 }}>
                        {() => (
                            <Button style={{ marginTop: 20 }}  type="primary" htmlType="submit" disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length}>
                                Update
                            </Button>
                        )}
                </Form.Item>
            </Form>
        </Card>
    )
}

export default UpdateCar