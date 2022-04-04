import react, { useState } from "react"
import LoginForm from "./components/LoginForm";
import React from "react";

function App(){
    const AdminUser = {
        email : "admin@admin.com",
        password : "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, SetError] = useState("");

    const Login = details => {
        console.log(details);

        if(details.email == AdminUser.email && details.password == AdminUser.password){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        }
            
        else{
            console.log("Details do not match");
            SetError("Details do not match!");
        }
    }

    const Logout = () => {
        setUser({ name: "", email:"" });
    }

   return (
        <div className="App">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
                ) : (
                <LoginForm Login={Login} error={error}/>
                ) 
            }
        </div>
    );

}

export default App;




