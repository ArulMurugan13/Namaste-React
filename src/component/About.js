import { Divider } from "../shared/Divider";
import Header from "./Header";
import UserClass from "./UserClass";

const About = ()=>{
    return (
       <div>
        <Header/>
        <Divider/>
        <div>
            <UserClass name={"Arul"} age={23}/>
        </div>
       </div>
    );
}

export default About;
