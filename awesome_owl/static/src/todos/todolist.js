/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todoitem";
export class TodoList extends Component{
    static template="awesome_owl.TodoList";

    setup(){
        this.todos = useState([{id:1,description:"do something",isCompleted:false},{id:2,description:"Do Nothing",isCompleted:true}])
    }
    static components = {TodoItem}



}