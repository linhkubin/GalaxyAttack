"use strict";
cc._RF.push(module, '1f1a08OphpAoou9lIViF04J', 'PoolControl');
// _Game/Script/Pool/PoolControl.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolAmount = void 0;
var SimplePool_1 = require("./SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, inspector = _a.inspector;
var PoolAmount = /** @class */ (function () {
    function PoolAmount() {
        this.root = null;
        this.prefab = null;
        this.amount = 0;
    }
    __decorate([
        property(cc.Node)
    ], PoolAmount.prototype, "root", void 0);
    __decorate([
        property(cc.Prefab)
    ], PoolAmount.prototype, "prefab", void 0);
    __decorate([
        property(cc.Integer)
    ], PoolAmount.prototype, "amount", void 0);
    PoolAmount = __decorate([
        ccclass
    ], PoolAmount);
    return PoolAmount;
}());
exports.PoolAmount = PoolAmount;
var PoolControl = /** @class */ (function (_super) {
    __extends(PoolControl, _super);
    function PoolControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pools = [];
        return _this;
    }
    // @property(cc.Prefab)
    // public prefab: PoolMember = null;
    PoolControl.prototype.onLoad = function () {
        for (var i = 0; i < this.pools.length; i++) {
            SimplePool_1.default.preload(this.pools[i].prefab, this.pools[i].root, this.pools[i].amount);
        }
        // let member = cc.instantiate(this.prefab).getComponent(PoolMember);
        // console.log(member != null);
        // console.log(member.node != null);
        // console.log(member.i);
        // member.node.setParent(this.node);
        // member.node.setPosition(cc.v3(0,0,0));
        // SimplePool.preload(this.prefab, this.node, 2);
        // Bullet_Info.node.setPosition(Pos);
        // Bullet_Info.node.setParent(this.BulletHold);
        // let member = SimplePool.spawn(PoolType.Bullet_1, cc.v3(0,0,0), 90);
        // console.log(member.node.angle);
        // SimplePool.spawn(PoolType.Bullet_1, cc.v3(100,0,0), 180).i = 100;
        // SimplePool.spawn(PoolType.Bullet_1, cc.v3(200,0,0), 30).i = 100;
        // SimplePool.despawn(member);
    };
    __decorate([
        property({
            type: [PoolAmount],
            displayName: "Custom Objects",
            serializable: true,
        })
    ], PoolControl.prototype, "pools", void 0);
    PoolControl = __decorate([
        ccclass
    ], PoolControl);
    return PoolControl;
}(cc.Component));
exports.default = PoolControl;

cc._RF.pop();