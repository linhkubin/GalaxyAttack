
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLGdEQUEyQztBQUMzQyxnREFBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVU7SUFBOUM7UUFBQSxxRUF3Q0M7UUFyQ1csV0FBSyxHQUFXLElBQUksQ0FBQztRQUNyQixZQUFNLEdBQVcsQ0FBQyxDQUFDOztJQW9DL0IsQ0FBQztJQWxDVSx1QkFBTSxHQUFiLFVBQWMsTUFBYztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlCLGlDQUFpQztRQUNqQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDN0IsNkNBQTZDO1lBQzdDLG9CQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxpQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUVsRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtZQUNsQywwQkFBMEI7WUFDMUIsaUVBQWlFO1lBQ2pFLGtEQUFrRDtZQUNsRCxzRUFBc0U7WUFDdEUsbUJBQW1CO1lBQ25CLHdEQUF3RDtZQUNwRCxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQW5DRDtRQURDLFFBQVE7eUNBQ29CO0lBSFosTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXdDMUI7SUFBRCxhQUFDO0NBeENELEFBd0NDLENBeENtQyxvQkFBVSxHQXdDN0M7a0JBeENvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9DaGFyYWN0ZXJcIjtcclxuaW1wb3J0IFBvb2xNZW1iZXIgZnJvbSBcIi4vUG9vbC9Qb29sTWVtYmVyXCI7XHJcbmltcG9ydCBTaW1wbGVQb29sIGZyb20gXCIuL1Bvb2wvU2ltcGxlUG9vbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBQb29sTWVtYmVyIHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDIwMDA7XHJcbiAgICBwcml2YXRlIGRhbWFnZTogbnVtYmVyID0gNDtcclxuXHJcbiAgICBwdWJsaWMgb25Jbml0KGRhbWFnZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IHRoaXMubm9kZS51cC5tdWwoZHQpLm11bCh0aGlzLnNwZWVkKTtcclxuICAgICAgICBjb25zdCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHZlbG9jaXR5KTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBidWxsZXQgZm9yd2FyZCB3aXRoIGluZm8gb2Ygc3Bhd24gcG9pbnQgKHBpdm90ICYgcm90YXRpb24pXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvcyk7XHJcblxyXG4gICAgICAgIC8vIGRlc3Bhd24gYnVsbGV0IGlmIG91dCBvZiBib3VuZFxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucG9zaXRpb24ueSA+PSA5NTApIHtcclxuICAgICAgICAgICAgLy8gTm9kZVBvb2wuZ2V0SW5zdGFuY2UoKS5wdXROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIFNpbXBsZVBvb2wuZGVzcGF3bih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVzcGF3biBidWxsZXQgaWYgY29sIHdpdGggZW5lbXlcclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xyXG5cclxuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ2VuZW15Jykge1xyXG4gICAgICAgIC8vICAgICAvLyBzcGF3biBhIFNwYXJrbGUgXHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnN0IFNwYXJrbGUgPSBTcGFya2xlUG9vbC5nZXRJbnN0YW5jZSgpLmdldFNwYXJrbGUoKTtcclxuICAgICAgICAvLyAgICAgLy8gU3BhcmtsZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIC8vICAgICAvLyBTcGFya2xlLnNldFBhcmVudChHYW1lTWFuYWdlci5nZXRJbnN0YW5jZSgpLkV4cGxvc2lvbl9Ib2xkKTtcclxuICAgICAgICAvLyAgICAgLy9UT0RPOiB0ZXN0XHJcbiAgICAgICAgLy8gICAgIG90aGVyLmdldENvbXBvbmVudChDaGFyYWN0ZXIpLm9uSGl0KHRoaXMuZGFtYWdlKTtcclxuICAgICAgICAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250YWN0XCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=