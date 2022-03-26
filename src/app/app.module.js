"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//rutas
var app_routes_1 = require("./app.routes");
//servicios
var heroes_service_1 = require("./servicios/heroes.service");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/shared/navbar/navbar.component");
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var heroes_component_1 = require("./components/heroes/heroes.component");
var heroe_component_1 = require("./components/heroe/heroe.component");
var buscador_component_1 = require("./components/buscador/buscador.component");
var heroe_tarjeta_component_1 = require("./components/heroe-tarjeta/heroe-tarjeta.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                heroes_component_1.HeroesComponent,
                heroe_component_1.HeroeComponent,
                buscador_component_1.BuscadorComponent,
                heroe_tarjeta_component_1.HeroeTarjetaComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.APP_ROUTING
            ],
            providers: [
                heroes_service_1.HeroesService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
