"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroeTarjetaComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var HeroeTarjetaComponent = /** @class */ (function () {
    function HeroeTarjetaComponent(router) {
        this.router = router;
        this.heroe = {};
        this.index = 0;
        this.heroeSeleccionado = new core_2.EventEmitter();
    }
    HeroeTarjetaComponent.prototype.ngOnInit = function () {
    };
    HeroeTarjetaComponent.prototype.verHeroe = function () {
        // console.log(this.index);
        this.router.navigate(['/heroe', this.index]);
        //this.heroeSeleccionado.emit(this.index);
    };
    __decorate([
        core_1.Input()
    ], HeroeTarjetaComponent.prototype, "heroe", void 0);
    __decorate([
        core_1.Input()
    ], HeroeTarjetaComponent.prototype, "index", void 0);
    __decorate([
        core_1.Output()
    ], HeroeTarjetaComponent.prototype, "heroeSeleccionado", void 0);
    HeroeTarjetaComponent = __decorate([
        core_1.Component({
            selector: 'app-heroe-tarjeta',
            templateUrl: './heroe-tarjeta.component.html',
            styleUrls: ['./heroe-tarjeta.component.css']
        })
    ], HeroeTarjetaComponent);
    return HeroeTarjetaComponent;
}());
exports.HeroeTarjetaComponent = HeroeTarjetaComponent;
