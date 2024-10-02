import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    function fetchTasks() {
        axios.get('http://localhost:8000/tasks/')
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function addTask(e) {
        e.preventDefault();
        axios.post('http://localhost:8000/tasks/', {title: title, completed: false})
            .then(() => {
                fetchTasks();
                setTitle('');
            })
            .catch(error => {
                console.log(error);
            });
    }

    function deleteTask(id) {
        axios.delete(`http://localhost:8000/tasks/${id}/`)
            .then(() => {
                setTasks(tasks.filter(task => task.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function updateTask(id, task) {
        const updatedTask = {
            title: task.title,
            completed: !task.completed
        };
        axios.put(`http://localhost:8000/tasks/${id}/`, updatedTask)
            .then(() => {
                fetchTasks();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchTasks();
    },[])

    return (
        <div className="app-container">
            <h1 className="app-title">Ma Todo Liste</h1>
            <div className='task-input'>
                <form onSubmit={addTask}>
                    <input className="input-field" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Nouvelle tâche'/>
                    <button className="add-button" type='submit'>Ajouter</button>
                </form>
            </div>

            <h3 className="section-title">Tâches en cours</h3>
            <div className='task-section'>
                <ul className="task-list">
                    {tasks.map(task => ( !task.completed && (
                        <li key={task.id} className="task-item">
                            <span>{task.title}</span>
                            <div className="task-actions">
                                <input className="checkbox" type="checkbox" checked={task.completed} onChange={() => updateTask(task.id, task)} />
                                <button className="delete-button" onClick={() => deleteTask(task.id)}>Supprimer</button>
                            </div>
                        </li>
                    )))}
                </ul>
            </div>

            <h3 className="section-title">Tâches terminées</h3>
            <div className="task-section">
                <ul className="task-list">
                    {tasks.map(task => ( task.completed && (
                        <li key={task.id} className="task-item completed">
                            <span>{task.title}</span>
                            <div className="task-actions">
                                <input className="checkbox" type="checkbox" checked={task.completed} onChange={() => updateTask(task.id, task)} />
                                <button className="delete-button" onClick={() => deleteTask(task.id)}>Supprimer</button>
                            </div>
                        </li>
                    )))}
                </ul>
            </div>
        </div>
    );
}

export default App;
