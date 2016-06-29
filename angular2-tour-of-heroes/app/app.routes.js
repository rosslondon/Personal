"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var routes = [
    {
        path: '/heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map