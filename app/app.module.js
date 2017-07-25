"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var systemfilter_pipe_1 = require("./systems/systemfilter.pipe");
var developersfilter_pipe_1 = require("./developers/developersfilter.pipe");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var developers_list_component_1 = require("./developers/developers-list.component");
var systems_component_1 = require("./systems/systems.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: welcome_component_1.WelcomeComponent },
                { path: 'developers', component: developers_list_component_1.DevelopersListComponent },
                { path: 'systems', component: systems_component_1.SystemsComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ]),
            forms_1.FormsModule,
        ],
        declarations: [app_component_1.AppComponent, developers_list_component_1.DevelopersListComponent, systems_component_1.SystemsComponent, welcome_component_1.WelcomeComponent, systemfilter_pipe_1.SystemFilter, developersfilter_pipe_1.DeveloperFilter],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map