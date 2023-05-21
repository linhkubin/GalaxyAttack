
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f5a32QkdpE/pa75V2ZRKSA', 'Enemy');
// _Game/Script/Enemy.ts

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
var Character_1 = require("./Character");
var LevelManager_1 = require("./Manager/LevelManager");
var SoundManager_1 = require("./Manager/SoundManager");
var SimplePool_1 = require("./Pool/SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //nhận damage
    Enemy.prototype.onHit = function (damage) {
        _super.prototype.onHit.call(this, damage);
        // console.log("hit");
    };
    //enemy death sẽ đưa nó về pool
    Enemy.prototype.onDeath = function () {
        // super.onDeath();
        LevelManager_1.default.Ins.onEnemyDeath(this);
        SimplePool_1.default.spawn(SimplePool_1.PoolType.VFX_Explore, this.node.getWorldPosition(), 0);
        SimplePool_1.default.despawn(this);
        SoundManager_1.default.Ins.PlayClip(SoundManager_1.AudioType.FX_EnemyDie);
    };
    //hàm di chuyển sang vị trí mới
    Enemy.prototype.moveTo = function (target, duration, isWorldSpace) {
        // Lấy vị trí target position của node
        var targetPosition = isWorldSpace ? this.node.getLocalPosition(target) : target;
        // Tạo một tween để di chuyển node từ vị trí hiện tại đến vị trí mới (position)
        cc.tween(this.node)
            .to(duration, { position: targetPosition }, { easing: "linear", })
            .start();
    };
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(Character_1.default));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcRW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUNBQW9DO0FBQ3BDLHVEQUFrRDtBQUNsRCx1REFBaUU7QUFDakUsZ0RBQXlEO0FBRW5ELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFTO0lBQTVDOztJQStCQSxDQUFDO0lBN0JHLGFBQWE7SUFDTixxQkFBSyxHQUFaLFVBQWEsTUFBYztRQUN2QixpQkFBTSxLQUFLLFlBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsc0JBQXNCO0lBQzFCLENBQUM7SUFFRCwrQkFBK0I7SUFDckIsdUJBQU8sR0FBakI7UUFDSSxtQkFBbUI7UUFDbkIsc0JBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLG9CQUFVLENBQUMsS0FBSyxDQUFDLHFCQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixzQkFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsd0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsK0JBQStCO0lBQ3hCLHNCQUFNLEdBQWIsVUFBYyxNQUFlLEVBQUUsUUFBZ0IsRUFBRSxZQUFxQjtRQUNsRSxzQ0FBc0M7UUFDdEMsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFbEYsK0VBQStFO1FBQy9FLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxRQUFRLEVBQ1IsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEVBQzVCLEVBQUksTUFBTSxFQUFFLFFBQVEsR0FBRyxDQUN0QjthQUNKLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUE3QmdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0ErQnpCO0lBQUQsWUFBQztDQS9CRCxBQStCQyxDQS9Ca0MsbUJBQVMsR0ErQjNDO2tCQS9Cb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vQ2hhcmFjdGVyXCI7XHJcbmltcG9ydCBMZXZlbE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9MZXZlbE1hbmFnZXJcIjtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciwgeyBBdWRpb1R5cGUgfSBmcm9tIFwiLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCwgeyBQb29sVHlwZSB9IGZyb20gXCIuL1Bvb2wvU2ltcGxlUG9vbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIENoYXJhY3RlciB7XHJcblxyXG4gICAgLy9uaOG6rW4gZGFtYWdlXHJcbiAgICBwdWJsaWMgb25IaXQoZGFtYWdlOiBudW1iZXIpe1xyXG4gICAgICAgIHN1cGVyLm9uSGl0KGRhbWFnZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoaXRcIik7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC8vZW5lbXkgZGVhdGggc+G6vSDEkcawYSBuw7MgduG7gSBwb29sXHJcbiAgICBwcm90ZWN0ZWQgb25EZWF0aCgpe1xyXG4gICAgICAgIC8vIHN1cGVyLm9uRGVhdGgoKTtcclxuICAgICAgICBMZXZlbE1hbmFnZXIuSW5zLm9uRW5lbXlEZWF0aCh0aGlzKTtcclxuICAgICAgICBTaW1wbGVQb29sLnNwYXduKFBvb2xUeXBlLlZGWF9FeHBsb3JlLCB0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpLCAwKTtcclxuICAgICAgICBTaW1wbGVQb29sLmRlc3Bhd24odGhpcyk7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLklucy5QbGF5Q2xpcChBdWRpb1R5cGUuRlhfRW5lbXlEaWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaMOgbSBkaSBjaHV54buDbiBzYW5nIHbhu4sgdHLDrSBt4bubaVxyXG4gICAgcHVibGljIG1vdmVUbyh0YXJnZXQ6IGNjLlZlYzMsIGR1cmF0aW9uOiBudW1iZXIsIGlzV29ybGRTcGFjZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSB0YXJnZXQgcG9zaXRpb24gY+G7p2Egbm9kZVxyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gaXNXb3JsZFNwYWNlID8gdGhpcy5ub2RlLmdldExvY2FsUG9zaXRpb24odGFyZ2V0KSA6IHRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gVOG6oW8gbeG7mXQgdHdlZW4gxJHhu4MgZGkgY2h1eeG7g24gbm9kZSB04burIHbhu4sgdHLDrSBoaeG7h24gdOG6oWkgxJHhur9uIHbhu4sgdHLDrSBt4bubaSAocG9zaXRpb24pXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSxcclxuICAgICAgICAgICAgICAgIHsgICBlYXNpbmc6IFwibGluZWFyXCIsIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==