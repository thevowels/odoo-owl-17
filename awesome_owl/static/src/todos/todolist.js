/** @odoo-module */

import { Component, useState, useRef, onMounted } from "@odoo/owl";
import { TodoItem } from "./todoitem";
export class TodoList extends Component{
    static template="awesome_owl.TodoList";
    static components = {TodoItem}

    setup(){
        this.todos = useState([]);
        this.nextId= 0;
        this.todo_input = useRef("ref_input")
        onMounted(()=>{
            this.todo_input.el.focus()
        })
    }

    addTodo(ev){
        if(ev.keyCode == 13 && ev.target.value != ""){
            this.todos.push({
                id:this.nextId++,
                description: ev.target.value,
                isCompleted: false
            })
            ev.target.value = ""
        }
    }

}