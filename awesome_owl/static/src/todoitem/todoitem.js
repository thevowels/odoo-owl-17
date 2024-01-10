/** @odoo-module */
import { Component, useState } from "@odoo/owl";

export class TodoItem extends Component{
    static template="awesome_owl.TodoItem";

    setup(){
        this.props = useState({id:1,description:"abcd"})
    }
}