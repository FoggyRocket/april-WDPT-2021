import {
    Row,
    Col,
    Typography,
    Form,
    Input,
    Button,
    Divider,
    message
} from 'antd'
//services 
//useState, useEffect
import {ItemForm} from '../../components'
import {loginWS,signupWS} from '../../services/auth-endpoint'
import { useContext } from 'react';
import {Ctx} from '../../hooks/context'
const {Title} = Typography

          //  props = {match,history,location,perro...}
function Auth ({match,history,location,...restProps}){ //restPropss= {perro...}
   
    const {login} = useContext(Ctx)
    const handleSubmit = async (user) => {
        try{
            const perrito = match.path === "/signup" ? signupWS : loginWS
            const {data} = await perrito(user)
            if(match.path === "/auth" ){
                login(data.result)
            }
            history.push("/profile")
            console.log("data",data)
        }catch(error){
            console.log("el erro",error.response)
        }
    }
    return (
        <Row gutter={[16,16]}>
            <Col span={24}>
                <Title>{match.path === "/signup" ? "Signup" : "Login"}</Title>
                <Form onFinish={handleSubmit}>
                    <ItemForm name="email"  label="Email"/>
                    <ItemForm name="password"  label="Password"/>
                    {match.path === "/signup" &&
                    <ItemForm name="username"  label="Username"/> }

                    {/*match.path === "/signup" ?
                        <ItemForm name="username"  label="Username"/>
                        : 'No hay nada'*/ }

                    <Button type='primary' block htmlType='submit'>
                        {match.path === "/signup" ? "Signup" : "Login"}
                    </Button>
                </Form>
            </Col>
            <Col span={24}>
                <Divider>Or</Divider>
            </Col>
            {/* Signup o login con red social */}
            <Col span={18} offset={3}>
                <Button block>
                    <a href="http://localhost:3001/api/auth/google">Google</a>
                </Button>
            </Col>
        </Row>
    )
}

export default Auth;