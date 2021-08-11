import {Form,Input} from 'antd'



const ItemForm = ({label,name,type}) => (
    <Form.Item name={name} label={label}>
        <Input/>
    </Form.Item>
)

export default ItemForm 