import React from "react";

class UserClass extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
           userInfo : null
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ArulMurugan13");
        const json = await data.json();

        console.log(json);
       this.setState({
        userInfo : json
       });

    }

    render(){

        

        const { userInfo } = this.state;

         if (!userInfo) {
           // Show a loading message or placeholder content while data is being fetched
           return <div>Loading...</div>;
         }

        const { name, id, login} = userInfo;
        return (
            <div>
                <h1>{name}</h1>
                <h1>{id}</h1>
                <h1>{login}</h1>
            </div>
        );
    }

}

export default UserClass;