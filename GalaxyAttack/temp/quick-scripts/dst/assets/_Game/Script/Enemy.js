
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
var LevelManager_1 = require("./LevelManager");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcRW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUMxQyxnREFBeUQ7QUFFbkQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVM7SUFBNUM7O0lBOEJBLENBQUM7SUE1QkcsYUFBYTtJQUNOLHFCQUFLLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLGlCQUFNLEtBQUssWUFBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixzQkFBc0I7SUFDMUIsQ0FBQztJQUVELCtCQUErQjtJQUNyQix1QkFBTyxHQUFqQjtRQUNJLG1CQUFtQjtRQUNuQixzQkFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsb0JBQVUsQ0FBQyxLQUFLLENBQUMscUJBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLG9CQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQkFBK0I7SUFDeEIsc0JBQU0sR0FBYixVQUFjLE1BQWUsRUFBRSxRQUFnQixFQUFFLFlBQXFCO1FBQ2xFLHNDQUFzQztRQUN0QyxJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVsRiwrRUFBK0U7UUFDL0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLFFBQVEsRUFDUixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsRUFDNUIsRUFBSSxNQUFNLEVBQUUsUUFBUSxHQUFHLENBQ3RCO2FBQ0osS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQTVCZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQThCekI7SUFBRCxZQUFDO0NBOUJELEFBOEJDLENBOUJrQyxtQkFBUyxHQThCM0M7a0JBOUJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9DaGFyYWN0ZXJcIjtcclxuaW1wb3J0IExldmVsTWFuYWdlciBmcm9tIFwiLi9MZXZlbE1hbmFnZXJcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuICAgIC8vbmjhuq1uIGRhbWFnZVxyXG4gICAgcHVibGljIG9uSGl0KGRhbWFnZTogbnVtYmVyKXtcclxuICAgICAgICBzdXBlci5vbkhpdChkYW1hZ2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0XCIpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAvL2VuZW15IGRlYXRoIHPhur0gxJHGsGEgbsOzIHbhu4EgcG9vbFxyXG4gICAgcHJvdGVjdGVkIG9uRGVhdGgoKXtcclxuICAgICAgICAvLyBzdXBlci5vbkRlYXRoKCk7XHJcbiAgICAgICAgTGV2ZWxNYW5hZ2VyLklucy5vbkVuZW15RGVhdGgodGhpcyk7XHJcbiAgICAgICAgU2ltcGxlUG9vbC5zcGF3bihQb29sVHlwZS5WRlhfRXhwbG9yZSwgdGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgMCk7XHJcbiAgICAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaMOgbSBkaSBjaHV54buDbiBzYW5nIHbhu4sgdHLDrSBt4bubaVxyXG4gICAgcHVibGljIG1vdmVUbyh0YXJnZXQ6IGNjLlZlYzMsIGR1cmF0aW9uOiBudW1iZXIsIGlzV29ybGRTcGFjZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSB0YXJnZXQgcG9zaXRpb24gY+G7p2Egbm9kZVxyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gaXNXb3JsZFNwYWNlID8gdGhpcy5ub2RlLmdldExvY2FsUG9zaXRpb24odGFyZ2V0KSA6IHRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gVOG6oW8gbeG7mXQgdHdlZW4gxJHhu4MgZGkgY2h1eeG7g24gbm9kZSB04burIHbhu4sgdHLDrSBoaeG7h24gdOG6oWkgxJHhur9uIHbhu4sgdHLDrSBt4bubaSAocG9zaXRpb24pXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSxcclxuICAgICAgICAgICAgICAgIHsgICBlYXNpbmc6IFwibGluZWFyXCIsIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==