import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import TasksList from "./TasksList";

library.add(faTrash);

class Task extends Component {

    constructor() {
        super();

        this.state = {
            tasks: [],
            currentTask: {
                text: "",
                key: "",
            },
        };
    }

    // METHODE1 : modifie l'état de l'objet currentTask
    handleChange = (e) => {
        this.setState({
            currentTask: {
                // Récupère la valeur tapée ds l'input
                text: e.target.value,
                // Définit la date comme clé unique
                key: Date.now(),
            },
        });
    }

    // METHODE2 : ajoute une tâche à la liste existante
    addTask = (e) => {
        // Empêche le rechargement de la page
        e.preventDefault();
        // Stockage de l'état de l'objet currentTask ds une variable newTask
        const newTask = this.state.currentTask;
        // Si champ non vide
        if (newTask.text !== "") {
            // Copie de l'état de la liste des tâches + ajoute la nelle tâche
            const tasks = [...this.state.tasks, newTask];
            // Modification de l'état des tâches
            this.setState({
                tasks,
                // Réinitialisation de l'objet currentTask
                currentTask: {
                    text: "",
                    key: "",
                },
            });
        }
    }

    // METHODE3 : supprime une tâche avec filter()
    deleteTask = (key) => {
        const filteredTasks = this.state.tasks.filter((task) => task.key !== key);
        // Modifie l'état des tâches
        this.setState({
            tasks: filteredTasks,
        });
    }
 
    // METHODE4 : permet de modifier une tâche 
    updateTask = (text, key) => {
        //console.log("tasks:" + this.state.tasks);
        // Récupère l'état des tâches
        const tasks = this.state.tasks;
        // Boucle sur chacune des tâches
        tasks.map(task => {
            // Si la clé de la tâche est la même clé
            if (task.key === key) {
            //console.log(task.key + "    " + key)
            // contenu de la tâche = contenu
                return task.text = text;
            } else { 
                return null; 
            }
        });
        // Modifie l'état des tâches
        this.setState({
            tasks,
        });
    }

    // METHODE5 : vide le placeholder au focus
    handleFocus = ({ type }) => {
        this._input.placeholder = type === 'focus' ? '' : 'Saisir une tâche';
    };

    render() {
        return (
            <>
            <div className="col-sm-12 col-md-6 mx-auto">
                <form id="to-do-form" className="w-100 form-inline" onSubmit={ this.addTask }>
                    <input type="text" placeholder="Enter a task" className="form-control shadow-none w-75 mx-auto"
                        value={ this.state.currentTask.text }
                        onChange={ this.handleChange }
                        ref={(t) => (this._input = t)}
                        onFocus={ this.handleFocus }
                        onBlur={ this.handleFocus }
                    />
                    <button type="submit" className="btn btn-dark shadow-none mx-auto w-25">ADD</button>
                </form>
                <p>{this.state.tasks.text}</p>
                <TasksList
                    tasks={ this.state.tasks }
                    deleteTask={ this.deleteTask }
                    updateTask={ this.updateTask }
                />
            </div>
            </>                   
        );
    }
}

export default Task;