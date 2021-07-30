import { useState } from 'react';
import { Form, Input, InputNumber, Button,  Modal } from 'antd';
import valids from './valids'
import './App.css';

function App() {
  const [modalVisble,setModaVisible] = useState(false)
  const [data,setData] = useState({})
  const [erros,setErros] = useState({})
  //para el otro formulario
  const onSignup = () => {
      let todoOK = false
      for(let key in erros){
          if(key){
            todoOK = true
          }
      }

      if(todoOK){
        console.log("tienes errores",erros)
      }else{
        setModaVisible(false)
        console.log("data",data)
      }
      
  }
  const handleChange = (e) => {
    const {name,value} = e.target
    if(name === "email"){
       erros["email"] = valids.isValidMail(value)
       if(erros["email"]){
         console.log("hay un error",erros)
         setErros(erros)
       }else{
         delete erros["email"]
       }
       setErros(erros)
    }
    setData( { ...data, [name] : value    } )
    //setData( { ...data, [e.target.name] : e.target.value    } )
  }

  // Props para el el form
  const layout = {
    labelCol: { span:4},
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const onFinish = (values) => {
    //almacena los datos
    console.log(values);
  };
  return (
    <div className="App">
        {/* Aqui va un formulario para registro */}
        
        <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name={['user', 'website']} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={['peerro', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
      </Form>

      <Button onClick={()=>setModaVisible(true)}>
        Open Modal
      </Button>


      <Modal 
        title="Otro Signup" 
        visible={modalVisble} 
        onOk={onSignup}
        onCancel={()=>setModaVisible(false)}
        > 
          <div>
            <span>Nombre:</span>
             <Input name="name" onChange={handleChange} />
          </div>
          <div>
            <span>Correo:</span>
             <Input name="email" onChange={handleChange} />
          </div>
          <div>
            <span>Password:</span>
             <Input name="password" onChange={handleChange} />
          </div>
      </Modal>


    </div>
  );
}

export default App;
