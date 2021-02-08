import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
// import backgroundImage from './assets/background.jpg';
import api from './services/api';
import axios from 'axios';

function App() {
    const [projects, setProjects] = useState([]);

    async function handleAddProject() {
       const response = await api.post('projects',{title:`New project ${Date.now()}`,owner:'Billie'})
        setProjects([...projects, response.data]);
    }

    useEffect(()=>{
        api.get('projects').then(response=>{
            setProjects(response.data);
        })
    },[])

    return (
        <>
            <Header title="Homepage" />
            {/*  <img width="300" src={backgroundImage} /> */}
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;
