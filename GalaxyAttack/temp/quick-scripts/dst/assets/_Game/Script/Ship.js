
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Ship.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adedd2JHO1FYqcUR+0zXeNA', 'Ship');
// _Game/Script/Ship.ts

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
var SimplePool_1 = require("./Pool/SimplePool");
var Utilities_1 = require("./Utilities");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletPoints_1 = [];
        _this.bulletPoints_2 = [];
        //list đạn bắn ra  
        _this.bulletPoints = [];
        _this.screen = new cc.Vec2(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
        //------------------------------
        _this.timer = 0;
        return _this;
    }
    Ship.prototype.onLoad = function () {
        // this.player = cc.find('player');
        //set up move object
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.screen = new cc.Vec2(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
        this.clampHorizon = new cc.Vec2(-0.5, 0.5).mul(this.screen.x);
        this.clampVertical = new cc.Vec2(-0.5, 0.5).mul(this.screen.y);
        this.bulletPoints = this.bulletPoints_1;
    };
    Ship.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
    };
    //Move
    //bat dau an xuong
    Ship.prototype.onTouchBegan = function (event) {
        this.touchOffset = Utilities_1.default.vec3ToVec2(this.node.position).subtract(this.getMousePoint(event));
    };
    //di chuyen chuot
    Ship.prototype.onTouchMoved = function (event) {
        var newPos = this.getMousePoint(event).add(this.touchOffset);
        newPos.x = cc.misc.clampf(newPos.x, this.clampHorizon.x, this.clampHorizon.y);
        newPos.y = cc.misc.clampf(newPos.y, this.clampVertical.x, this.clampVertical.y);
        this.node.position = Utilities_1.default.vec2ToVec3(newPos);
    };
    //lay vi tri chuot bam xuong
    Ship.prototype.getMousePoint = function (event) {
        return event.getLocation().sub(cc.v2(this.screen.x * 0.5, this.screen.y * 0.5));
    };
    Ship.prototype.update = function (dt) {
        //moi 0.5s bắn 1 lần
        if (this.timer <= 0) {
            this.timer = 0.5;
            this.shoot();
        }
        this.timer -= dt;
    };
    Ship.prototype.shoot = function () {
        for (var i = 0; i < this.bulletPoints.length; i++) {
            SimplePool_1.default.spawn(SimplePool_1.PoolType.Bullet_1, this.bulletPoints[i].getWorldPosition(), this.bulletPoints[i].angle).onInit(10);
        }
    };
    Ship.prototype.onPowerUp = function () {
        this.bulletPoints = this.bulletPoints_2;
    };
    Ship.prototype.onShield = function () {
    };
    Ship.prototype.onStart = function () {
    };
    Ship.prototype.onFinish = function () {
    };
    __decorate([
        property({
            type: [cc.Node],
            tooltip: 'bulletPoints_1'
        })
    ], Ship.prototype, "bulletPoints_1", void 0);
    __decorate([
        property({
            type: [cc.Node],
            tooltip: 'bulletPoints_2'
        })
    ], Ship.prototype, "bulletPoints_2", void 0);
    Ship = __decorate([
        ccclass
    ], Ship);
    return Ship;
}(cc.Component));
exports.default = Ship;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcU2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixnREFBeUQ7QUFDekQseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBdUdDO1FBaEdRLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBTy9CLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRXRDLG1CQUFtQjtRQUNYLGtCQUFZLEdBQWUsRUFBRSxDQUFDO1FBSzlCLFlBQU0sR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQThDdkcsZ0NBQWdDO1FBRXhCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBaUM1QixDQUFDO0lBNUVDLHFCQUFNLEdBQU47UUFDRSxtQ0FBbUM7UUFDbkMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFB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SSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxvQkFBVSxDQUFDLEtBQUssQ0FBQyxxQkFBUSxDQUFDLFFBQVEsRUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakk7SUFDSCxDQUFDO0lBRU0sd0JBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDMUMsQ0FBQztJQUVNLHVCQUFRLEdBQWY7SUFFQSxDQUFDO0lBRU0sc0JBQU8sR0FBZDtJQUVBLENBQUM7SUFFTSx1QkFBUSxHQUFmO0lBRUEsQ0FBQztJQS9GRDtRQUxDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLEVBQUUsZ0JBQWdCO1NBQzFCLENBQUM7Z0RBRW9DO0lBT3RDO1FBTEMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLE9BQU8sRUFBRSxnQkFBZ0I7U0FDMUIsQ0FBQztnREFFb0M7SUFkbkIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXVHeEI7SUFBRCxXQUFDO0NBdkdELEFBdUdDLENBdkdpQyxFQUFFLENBQUMsU0FBUyxHQXVHN0M7a0JBdkdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi9CdWxsZXRcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KHtcclxuICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgIHRvb2x0aXA6ICdidWxsZXRQb2ludHNfMSdcclxuICB9KVxyXG4gIC8vbGlzdCDEkeG6oW4gYmFuIMSR4bqndVxyXG4gIHB1YmxpYyBidWxsZXRQb2ludHNfMTogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBbY2MuTm9kZV0sXHJcbiAgICB0b29sdGlwOiAnYnVsbGV0UG9pbnRzXzInXHJcbiAgfSlcclxuICAvL2xpc3QgxJHhuqFuIHNhdSBraGkgbGV2ZWwgdXBcclxuICBwdWJsaWMgYnVsbGV0UG9pbnRzXzI6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAvL2xpc3QgxJHhuqFuIGLhuq9uIHJhICBcclxuICBwcml2YXRlIGJ1bGxldFBvaW50cyA6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAvLyBwcml2YXRlIHBsYXllcjogY2MuTm9kZTtcclxuICBwcml2YXRlIHRvdWNoT2Zmc2V0OiBjYy5WZWMyO1xyXG5cclxuICBwcml2YXRlIHNjcmVlbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aCwgY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodCk7XHJcbiAgcHJpdmF0ZSBjbGFtcEhvcml6b246IGNjLlZlYzI7Ly8gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi54KTtcclxuICBwcml2YXRlIGNsYW1wVmVydGljYWw6IGNjLlZlYzI7Ly8gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi55KTtcclxuICBcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gdGhpcy5wbGF5ZXIgPSBjYy5maW5kKCdwbGF5ZXInKTtcclxuICAgIC8vc2V0IHVwIG1vdmUgb2JqZWN0XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5zY3JlZW4gPSBuZXcgY2MuVmVjMihjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGgsIGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQpO1xyXG4gICAgdGhpcy5jbGFtcEhvcml6b24gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi54KTtcclxuICAgIHRoaXMuY2xhbXBWZXJ0aWNhbCA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLnkpO1xyXG5cclxuICAgIHRoaXMuYnVsbGV0UG9pbnRzID0gdGhpcy5idWxsZXRQb2ludHNfMTtcclxuICB9XHJcblxyXG4gIFxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy9Nb3ZlXHJcblxyXG4gIC8vYmF0IGRhdSBhbiB4dW9uZ1xyXG4gIHByaXZhdGUgb25Ub3VjaEJlZ2FuKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKS8qOiBib29sZWFuKi8ge1xyXG4gICAgdGhpcy50b3VjaE9mZnNldCA9IFV0aWxpdGllcy52ZWMzVG9WZWMyKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5nZXRNb3VzZVBvaW50KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICAvL2RpIGNodXllbiBjaHVvdFxyXG4gIHByaXZhdGUgb25Ub3VjaE1vdmVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICBjb25zdCBuZXdQb3MgPSB0aGlzLmdldE1vdXNlUG9pbnQoZXZlbnQpLmFkZCh0aGlzLnRvdWNoT2Zmc2V0KTtcclxuXHJcbiAgICBuZXdQb3MueCA9IGNjLm1pc2MuY2xhbXBmKG5ld1Bvcy54LCB0aGlzLmNsYW1wSG9yaXpvbi54LCB0aGlzLmNsYW1wSG9yaXpvbi55KTtcclxuICAgIG5ld1Bvcy55ID0gY2MubWlzYy5jbGFtcGYobmV3UG9zLnksIHRoaXMuY2xhbXBWZXJ0aWNhbC54LCB0aGlzLmNsYW1wVmVydGljYWwueSk7XHJcbiAgICBcclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IFV0aWxpdGllcy52ZWMyVG9WZWMzKG5ld1Bvcyk7XHJcbiAgfVxyXG5cclxuICAvL2xheSB2aSB0cmkgY2h1b3QgYmFtIHh1b25nXHJcbiAgcHJpdmF0ZSBnZXRNb3VzZVBvaW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogY2MuVmVjMntcclxuICAgIHJldHVybiBldmVudC5nZXRMb2NhdGlvbigpLnN1YihjYy52Mih0aGlzLnNjcmVlbi54ICogMC41LCB0aGlzLnNjcmVlbi55ICogMC41KSk7XHJcbiAgfVxyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgLy9tb2kgMC41cyBi4bqvbiAxIGzhuqduXHJcbiAgICBpZih0aGlzLnRpbWVyIDw9IDApe1xyXG4gICAgICB0aGlzLnRpbWVyID0gMC41O1xyXG4gICAgICB0aGlzLnNob290KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lciAtPSBkdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvb3QoKXtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWxsZXRQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgKFNpbXBsZVBvb2wuc3Bhd24oUG9vbFR5cGUuQnVsbGV0XzEsICB0aGlzLmJ1bGxldFBvaW50c1tpXS5nZXRXb3JsZFBvc2l0aW9uKCksdGhpcy5idWxsZXRQb2ludHNbaV0uYW5nbGUpIGFzIEJ1bGxldCkub25Jbml0KDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBvd2VyVXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1bGxldFBvaW50cyA9IHRoaXMuYnVsbGV0UG9pbnRzXzI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TaGllbGQoKTogdm9pZCB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25GaW5pc2goKTogdm9pZCB7XHJcbiAgICBcclxuICB9XHJcbn1cclxuIl19