/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todoitem";
export class TodoList extends Component{
    static template="awesome_owl.TodoList";

    setup(){
        this.todos = useState([{id:1,description:"Item 1",isCompleted:false},{id:2,description:"Item 2",isCompleted:true}])
    }
    static components = {TodoItem}



}