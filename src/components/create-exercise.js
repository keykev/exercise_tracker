import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


function CreateExercise() {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())

    //Use as dropdown in form.
    const [users, setUsers] = useState([])

    //ComponentDidMount
    useEffect(() => {
        axios.get('http://localhost:8000/users/')
            .then(res => {
                if(res.data.length > 0) {
                    //console.log(res.data)
                    setUsers(res.data.map(user => user.username))
                    setUsername(res.data[0].username)
                }
            })
    },[])

    // Change Username
    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    // Change Description
    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    //Change duration
    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    }

    //Change Date
    const onChangeDate = (date) => {
        setDate(date)
    }

    //Submit
    const onSubmit = (e) => {
        e.preventDefault()

        const exercise = {
            username,
            description,
            duration,
            date
        }
        
        axios.post("http://localhost:8000/exercises/add",exercise).then(res => console.log(res.data))
        
        window.location = '/';
    }

    return (
        <div>
            <h1>Create New Exercise Log</h1>
            <form onSubmit = {onSubmit}>
                <div className = "form-group">
                    <label>Username:</label>
                    <select href = "userInput" required className = 'form-control' value = {username} onChange = {onChangeUsername}>
                            {users.map((user) => {
                                return (
                                    <option key = {user} value = {user}>{user}</option>
                                )
                            })}
                    </select>
                </div>
                <div className = "form-group">
                    <label>Description:</label>
                    <input type = 'text' required className = "form-control" value = {description} onChange = {onChangeDescription} />
                </div>
                <div className = "form-group">
                    <label>Duration (in minutes):</label>
                    <input type = 'text' required className = "form-control" value = {duration} onChange = {onChangeDuration} />
                </div>
                <div className = "form-group">
                    <label>Date:</label>
                    <div>
                        <DatePicker selected = {date} onChange = {onChangeDate} />
                    </div>
                </div>
                <div className = "form-group">
                    <input type = "submit" value = "Create Exercise Log" className = "btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateExercise















