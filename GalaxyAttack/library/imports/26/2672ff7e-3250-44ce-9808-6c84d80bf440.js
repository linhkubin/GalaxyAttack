"use strict";
cc._RF.push(module, '2672f9+MlBEzpgIbITYC/RA', 'CacheComponent');
// _Game/Script/CacheComponent.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = require("./Character");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CacheComponent = /** @class */ (function () {
    function CacheComponent() {
    }
    CacheComponent.getCharacter = function (col) {
        if (!this.linkCharacter.has(col)) {
            this.linkCharacter.set(col, col.getComponent(Character_1.default));
        }
        return this.linkCharacter.get(col);
    };
    CacheComponent.linkCharacter = new Map;
    CacheComponent = __decorate([
        ccclass
    ], CacheComponent);
    return CacheComponent;
}());
exports.default = CacheComponent;

cc._RF.pop();