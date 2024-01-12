/** @odoo-module */

import { Component, useState, useRef, onMounted } from "@odoo/owl";
import { TodoItem } from "./todoitem";
import { useAutoFocus } from "../utils";



export class TodoList extends Component{
    static template="awesome_owl.TodoList";
    static components = {TodoItem}

    setup(){
        this.todos = useState([]);
        this.nextId= 0;
        useAutoFocus("ref_input")
    }

    addTodo(ev){
        if(ev.keyCode == 13 && ev.target.value != ""){
            this.todos.push({
                id:++this.nextId,
                description: ev.target.value,
                isCompleted: false
            })
            ev.target.value = ""
        }
    }
    
    toggleTodo(todoId){
        const todo = this.todos.find((todo) => todo.id === todoId)

        if(todo){
            todo.isCompleted = !todo.isCompleted
        }

    }

}