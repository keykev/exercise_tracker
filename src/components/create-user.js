import React,{useState} from 'react';
import axios from 'axios';


function CreateUser() {
    const[username,setUsername] = useState('')

    //Change Username
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    //On submit
    const onSubmit = (e) => {
        e.preventDefault()

        const user = {
            username
        }

        //axios post request
        axios.post('http://localhost:8000/users/add',user)
        .then(res => {
            console.log(res.data)
        })

        setUsername('')
    }

    return(
        <div>
            <h3>Create a New User</h3>
            <form onSubmit = {onSubmit}>
                <div className = "form-group">
                    <label>Username: </label>
                    <input type ='text' value = {username} onChange = {onChangeUsername} className = "form-control" required  />
                </div>
                <div className = "form-group">
                    <input type = 'submit' className = "btn btn-primary" value = "Create User"/>
                </div>
            </form>
        </div>
    )
}

export default CreateUser