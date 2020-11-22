import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

import './TasksList.css';

const TasksList = (props) => {
    // Récupère les props des tâches
    const tasks = props.tasks;
    // Boucle map() sur chacune des tâches
    const tasksList = tasks.map(({ key, text }) => {
        return (
            <div className="list" key={ key }>
                <p>
                    <input 
                        type="text" 
                        id={ key } 
                        value={ text } 
                        onChange={ (e) => { props.updateTask(e.target.value, key) }}
                    />
                    <span>
                        <FontAwesomeIcon 
                            className="icon"
                            icon="trash"
                            onClick={ () => { props.deleteTask(key) }} 
                        />
                    </span>
                </p>
            </div>
        );
    });
    
    return (
        <div>
            <FlipMove 
                duration={ 250 } 
                easing="ease-in-out"
                >
                { tasksList }
            </FlipMove>
        </div>
        
    );
}

export default TasksList;



