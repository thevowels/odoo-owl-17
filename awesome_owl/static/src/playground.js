/** @odoo-module **/
import { Counter } from "./counter/counter";
import {Card} from "./card/card";
import { Component, useState } from "@odoo/owl";

export class Playground extends Component {
    static template = "awesome_owl.playground";
    static components = {Counter, Card};
}

