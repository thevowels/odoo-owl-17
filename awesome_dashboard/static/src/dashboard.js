/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ControlPanel } from "@web/search/control_panel/control_panel";
import { Layout } from "@web/search/layout";



class AwesomeDashboard extends Component {
    setup(){
        this.display= {
            ControlPanel:{},
        }
    }
}


AwesomeDashboard.template = "awesome_dashboard.AwesomeDashboard";
AwesomeDashboard.components = { Layout }

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
