/** @odoo-module */
import { Component } from "@odoo/owl";

export class Card extends Component{
    static template="awesome_owl.Card"

    // static defaultProps={
    //     title:"Title",
    //     content:"Content"
    // }
    static props={
        title:{type:String},
        slots: {
            type:Object,
            shape:{
                default: true
            }
        }
    }
}