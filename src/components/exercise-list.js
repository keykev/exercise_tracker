import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

//Exercise component
const Exercise = ({ exercise, deleteExercise }) => {
    return (
        <tr>
            <td>{exercise.username}</td>
            <td>{exercise.description}</td>
            <td>{exercise.duration}</td>
            <td>{exercise.date.substring(0,10)}</td>
            <td>
                <Link to={'/edit/' + exercise._id}>Edit</Link> |
                <a href = "#" onClick = {() => {deleteExercise(exercise._id)}}>Delete</a>
            </td>
        </tr>
    )
}


//ExerciseList component
function ExerciseList() {
    const[exercises,setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/exercises')
            .then(res => {
                console.log(res.data)
                setExercises(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    //Delete exercise
    const deleteExercise = (id) => {
        axios.delete('http://localhost:8000/exercises/'+id)
            .then(res => {
                console.log('exercise deleted')
                setExercises(exercises.filter(user => user._id !== id))
            })
    }

    //exerciseList 
    const exerciseList = () => {
        return exercises.map(exercise => {
            return <Exercise exercise = {exercise} deleteExercise = {deleteExercise} key = {exercise._id} />
        })
    }

    return(
        <div>
            <h3>Logged Exercises</h3>
            <table className = "table">
                <thead className = "thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Durations</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
            </table>
        </div>
    )
}

export default ExerciseList