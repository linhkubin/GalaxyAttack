"use strict";
cc._RF.push(module, 'd581aEULKZLyoJxBrbPfh89', 'Bullet');
// _Game/Script/Bullet.ts

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
var PoolMember_1 = require("./Pool/PoolMember");
var SimplePool_1 = require("./Pool/SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 2000;
        _this.damage = 4;
        return _this;
    }
    Bullet.prototype.onInit = function (damage) {
        this.damage = damage;
    };
    Bullet.prototype.update = function (dt) {
        var velocity = this.node.up.mul(dt).mul(this.speed);
        var newPos = this.node.position.add(velocity);
        // move bullet forward with info of spawn point (pivot & rotation)
        this.node.setPosition(newPos);
        // despawn bullet if out of bound
        if (this.node.position.y >= 950) {
            // NodePool.getInstance().putNode(this.node);
            SimplePool_1.default.despawn(this);
        }
    };
    // Despawn bullet if col with enemy
    Bullet.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === 'enemy') {
            //     // spawn a Sparkle 
            //     // const Sparkle = SparklePool.getInstance().getSparkle();
            //     // Sparkle.setPosition(this.node.position);
            //     // Sparkle.setParent(GameManager.getInstance().Explosion_Hold);
            //     //TODO: test
            //     other.getComponent(Character).onHit(this.damage);
            SimplePool_1.default.despawn(this);
        }
        console.log("contact");
    };
    __decorate([
        property
    ], Bullet.prototype, "speed", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(PoolMember_1.default));
exports.default = Bullet;

cc._RF.pop();