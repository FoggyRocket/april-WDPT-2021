import { Row,Col,Typography,Divider,Button } from "antd";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Ctx } from "../../hooks/context";
const {Title} = Typography;


const Profile = () => {
    const {user,logout} = useContext(Ctx)

    console.log("pofile",user)
    return user ?  (
        <Row>
            <Col offset={3} span={21}>
                <Title level={1}> Profile</Title>
            </Col>
            <Divider/>
            <Col offset={3} span={21}>
                <Title level={2}>Username: {user.username}</Title>
                <Title level={1}>Username: {user.email}</Title>
                <img src={user.avatar} alt={"avatar"} width={200}/>
                <Button  onClick={()=>logout()}>
                    Logout
                </Button>
            </Col>
        </Row>

    ) : ( <Redirect to={"/auth"}/> )
}


export default Profile;