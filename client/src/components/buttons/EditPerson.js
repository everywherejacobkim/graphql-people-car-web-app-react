import React, {useState} from 'react';
import { EditOutlined } from '@ant-design/icons';

const EditPerson = () => {
    const [editMode, setEditMode] = useState(false);

    const handleButtonClick = ()=> {
        setEditMode(!editMode)
    }

return (
    <EditOutlined style={{ fontSize: 24, marginTop: 10 }} onClick={handleButtonClick} />
)
}

export default EditPerson