
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
var SoundManager_1 = require("./Manager/SoundManager");
var UIManager_1 = require("./Manager/UIManager");
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
        _this.ripple = null;
        _this.shield = null;
        //giới hạn khu vực điều khiển
        _this.screen = new cc.Vec2(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
        _this.isShooting = false;
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
        this.onStart();
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
        if (this.isShooting) {
            //mỗi 0.2s bắn 1 lần
            if (this.timer <= 0) {
                this.timer += 0.2;
                this.shoot();
            }
            this.timer -= dt;
        }
    };
    //bắn đạn
    Ship.prototype.shoot = function () {
        SoundManager_1.default.Ins.PlayClip(SoundManager_1.AudioType.FX_Bullet);
        for (var i = 0; i < this.bulletPoints.length; i++) {
            SimplePool_1.default.spawn(SimplePool_1.PoolType.Bullet_1, this.bulletPoints[i].getWorldPosition(), this.bulletPoints[i].angle).onInit(10);
        }
    };
    Ship.prototype.onPowerUp = function () {
        this.bulletPoints = this.bulletPoints_2;
        this.shield.active = true;
        SoundManager_1.default.Ins.PlayClip(SoundManager_1.AudioType.FX_Booster);
    };
    Ship.prototype.onAwake = function () {
        var _this = this;
        this.moveTo(cc.Vec3.UP.mul(-500), 1, function () {
            //bật tut
            //bật fx
            _this.ripple.active = true;
            UIManager_1.default.Ins.onOpen(0);
        }, false);
    };
    //khi player bắt đầu ấn xuống
    Ship.prototype.onStart = function () {
        //bắt đầu bắn đạn
        if (!this.isShooting) {
            this.isShooting = true;
            //tắt tut
            //tắt fx
            this.ripple.active = false;
            UIManager_1.default.Ins.onClose(0);
        }
    };
    Ship.prototype.onFinish = function () {
        var _this = this;
        //tàu k bắn đạn nữa, vụt đi
        this.isShooting = false;
        this.moveTo(this.node.position.add(cc.Vec3.UP.mul(-200)), 1, function () { return _this.moveTo(_this.node.position.add(cc.Vec3.UP.mul(10000)), 1, 
        //show UI end card
        function () { return UIManager_1.default.Ins.onOpen(1); }, false); }, false);
    };
    //hàm di chuyển sang vị trí mới
    Ship.prototype.moveTo = function (target, duration, doneAction, isWorldSpace) {
        // Lấy vị trí target position của node
        var targetPosition = isWorldSpace ? this.node.getLocalPosition(target) : target;
        // Tạo một tween để di chuyển node từ vị trí hiện tại đến vị trí mới (position)
        cc.tween(this.node)
            .to(duration, { position: targetPosition }, { easing: "linear", })
            .call(doneAction)
            .start();
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
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "ripple", void 0);
    __decorate([
        property(cc.Node)
    ], Ship.prototype, "shield", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcU2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRix1REFBaUU7QUFDakUsaURBQTRDO0FBQzVDLGdEQUF5RDtBQUN6RCx5Q0FBb0M7QUFFOUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE4SkM7UUF0SlEsb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFPL0Isb0JBQWMsR0FBYyxFQUFFLENBQUM7UUFDdEMsbUJBQW1CO1FBQ1gsa0JBQVksR0FBZSxFQUFFLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBTS9CLDZCQUE2QjtRQUNyQixZQUFNLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFJL0YsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUE2Q3BDLGdDQUFnQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQThFNUIsQ0FBQztJQTFIQyxxQkFBTSxHQUFOO1FBQ0UsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxD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QUMxRixzQ0FBc0M7UUFDdEMsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFbEYsK0VBQStFO1FBQy9FLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixFQUFFLENBQUMsUUFBUSxFQUNWLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxFQUM1QixFQUFFLE1BQU0sRUFBRSxRQUFRLEdBQUcsQ0FDdEI7YUFDQSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ2hCLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXJKRDtRQUxDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLEVBQUUsZ0JBQWdCO1NBQzFCLENBQUM7Z0RBRW9DO0lBT3RDO1FBTEMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLE9BQU8sRUFBRSxnQkFBZ0I7U0FDMUIsQ0FBQztnREFFb0M7SUFLdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDYTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNhO0lBdEJaLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4SnhCO0lBQUQsV0FBQztDQTlKRCxBQThKQyxDQTlKaUMsRUFBRSxDQUFDLFNBQVMsR0E4SjdDO2tCQTlKb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vQnVsbGV0XCI7XHJcbmltcG9ydCBTb3VuZE1hbmFnZXIsIHsgQXVkaW9UeXBlIH0gZnJvbSBcIi4vTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCwgeyBQb29sVHlwZSB9IGZyb20gXCIuL1Bvb2wvU2ltcGxlUG9vbFwiO1xyXG5pbXBvcnQgVXRpbGl0aWVzIGZyb20gXCIuL1V0aWxpdGllc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgQHByb3BlcnR5KHtcclxuICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgIHRvb2x0aXA6ICdidWxsZXRQb2ludHNfMSdcclxuICB9KVxyXG4gIC8vbGlzdCDEkeG6oW4gYmFuIMSR4bqndVxyXG4gIHB1YmxpYyBidWxsZXRQb2ludHNfMTogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBbY2MuTm9kZV0sXHJcbiAgICB0b29sdGlwOiAnYnVsbGV0UG9pbnRzXzInXHJcbiAgfSlcclxuICAvL2xpc3QgxJHhuqFuIHNhdSBraGkgbGV2ZWwgdXBcclxuICBwdWJsaWMgYnVsbGV0UG9pbnRzXzI6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIC8vbGlzdCDEkeG6oW4gYuG6r24gcmEgIFxyXG4gIHByaXZhdGUgYnVsbGV0UG9pbnRzIDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHByaXZhdGUgcmlwcGxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBwcml2YXRlIHNoaWVsZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAvLyBwcml2YXRlIHBsYXllcjogY2MuTm9kZTtcclxuICBwcml2YXRlIHRvdWNoT2Zmc2V0OiBjYy5WZWMyO1xyXG5cclxuICAvL2dp4bubaSBo4bqhbiBraHUgduG7sWMgxJFp4buBdSBraGnhu4NuXHJcbiAgcHJpdmF0ZSBzY3JlZW46IGNjLlZlYzIgPSBuZXcgY2MuVmVjMihjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGgsIGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQpO1xyXG4gIHByaXZhdGUgY2xhbXBIb3Jpem9uOiBjYy5WZWMyOy8vID0gbmV3IGNjLlZlYzIoLTAuNSwgMC41KS5tdWwodGhpcy5zY3JlZW4ueCk7XHJcbiAgcHJpdmF0ZSBjbGFtcFZlcnRpY2FsOiBjYy5WZWMyOy8vID0gbmV3IGNjLlZlYzIoLTAuNSwgMC41KS5tdWwodGhpcy5zY3JlZW4ueSk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBpc1Nob290aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIHRoaXMucGxheWVyID0gY2MuZmluZCgncGxheWVyJyk7XHJcbiAgICAvL3NldCB1cCBtb3ZlIG9iamVjdFxyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hCZWdhbiwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc2NyZWVuID0gbmV3IGNjLlZlYzIoY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRoLCBjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0KTtcclxuICAgIHRoaXMuY2xhbXBIb3Jpem9uID0gbmV3IGNjLlZlYzIoLTAuNSwgMC41KS5tdWwodGhpcy5zY3JlZW4ueCk7XHJcbiAgICB0aGlzLmNsYW1wVmVydGljYWwgPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi55KTtcclxuXHJcbiAgICB0aGlzLmJ1bGxldFBvaW50cyA9IHRoaXMuYnVsbGV0UG9pbnRzXzE7XHJcbiAgfVxyXG5cclxuICBcclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hCZWdhbiwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmVkLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8vTW92ZVxyXG5cclxuICAvL2JhdCBkYXUgYW4geHVvbmdcclxuICBwcml2YXRlIG9uVG91Y2hCZWdhbihldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkvKjogYm9vbGVhbiovIHtcclxuICAgIHRoaXMub25TdGFydCgpO1xyXG4gICAgdGhpcy50b3VjaE9mZnNldCA9IFV0aWxpdGllcy52ZWMzVG9WZWMyKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5nZXRNb3VzZVBvaW50KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICAvL2RpIGNodXllbiBjaHVvdFxyXG4gIHByaXZhdGUgb25Ub3VjaE1vdmVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICBjb25zdCBuZXdQb3MgPSB0aGlzLmdldE1vdXNlUG9pbnQoZXZlbnQpLmFkZCh0aGlzLnRvdWNoT2Zmc2V0KTtcclxuXHJcbiAgICBuZXdQb3MueCA9IGNjLm1pc2MuY2xhbXBmKG5ld1Bvcy54LCB0aGlzLmNsYW1wSG9yaXpvbi54LCB0aGlzLmNsYW1wSG9yaXpvbi55KTtcclxuICAgIG5ld1Bvcy55ID0gY2MubWlzYy5jbGFtcGYobmV3UG9zLnksIHRoaXMuY2xhbXBWZXJ0aWNhbC54LCB0aGlzLmNsYW1wVmVydGljYWwueSk7XHJcbiAgICBcclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IFV0aWxpdGllcy52ZWMyVG9WZWMzKG5ld1Bvcyk7XHJcbiAgfVxyXG5cclxuICAvL2xheSB2aSB0cmkgY2h1b3QgYmFtIHh1b25nXHJcbiAgcHJpdmF0ZSBnZXRNb3VzZVBvaW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogY2MuVmVjMntcclxuICAgIHJldHVybiBldmVudC5nZXRMb2NhdGlvbigpLnN1YihjYy52Mih0aGlzLnNjcmVlbi54ICogMC41LCB0aGlzLnNjcmVlbi55ICogMC41KSk7XHJcbiAgfVxyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gXHJcbiAgICBpZiAodGhpcy5pc1Nob290aW5nKSB7XHJcbiAgICAgIC8vbeG7l2kgMC4ycyBi4bqvbiAxIGzhuqduXHJcbiAgICAgIGlmICh0aGlzLnRpbWVyIDw9IDApIHtcclxuICAgICAgICB0aGlzLnRpbWVyICs9IDAuMjtcclxuICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGltZXIgLT0gZHQ7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy9i4bqvbiDEkeG6oW5cclxuICBwcml2YXRlIHNob290KCl7XHJcbiAgICBTb3VuZE1hbmFnZXIuSW5zLlBsYXlDbGlwKEF1ZGlvVHlwZS5GWF9CdWxsZXQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1bGxldFBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAoU2ltcGxlUG9vbC5zcGF3bihQb29sVHlwZS5CdWxsZXRfMSwgIHRoaXMuYnVsbGV0UG9pbnRzW2ldLmdldFdvcmxkUG9zaXRpb24oKSx0aGlzLmJ1bGxldFBvaW50c1tpXS5hbmdsZSkgYXMgQnVsbGV0KS5vbkluaXQoMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUG93ZXJVcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnVsbGV0UG9pbnRzID0gdGhpcy5idWxsZXRQb2ludHNfMjtcclxuICAgIHRoaXMuc2hpZWxkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBTb3VuZE1hbmFnZXIuSW5zLlBsYXlDbGlwKEF1ZGlvVHlwZS5GWF9Cb29zdGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkF3YWtlKCkge1xyXG4gICAgdGhpcy5tb3ZlVG8oY2MuVmVjMy5VUC5tdWwoLTUwMCksIDEgLCBcclxuICAgICgpPT4ge1xyXG4gICAgICAvL2Lhuq10IHR1dFxyXG4gICAgICAvL2Lhuq10IGZ4XHJcbiAgICAgIHRoaXMucmlwcGxlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIFVJTWFuYWdlci5JbnMub25PcGVuKDApO1xyXG4gICAgfSAsZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy9raGkgcGxheWVyIGLhuq90IMSR4bqndSDhuqVuIHh14buRbmdcclxuICBwdWJsaWMgb25TdGFydCgpOiB2b2lkIHtcclxuICAgIC8vYuG6r3QgxJHhuqd1IGLhuq9uIMSR4bqhblxyXG4gICAgaWYgKCF0aGlzLmlzU2hvb3RpbmcpIHtcclxuICAgICAgdGhpcy5pc1Nob290aW5nID0gdHJ1ZTtcclxuICAgICAgLy904bqvdCB0dXRcclxuICAgICAgLy904bqvdCBmeFxyXG4gICAgICB0aGlzLnJpcHBsZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgVUlNYW5hZ2VyLklucy5vbkNsb3NlKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRmluaXNoKCk6IHZvaWQge1xyXG4gICAgLy90w6B1IGsgYuG6r24gxJHhuqFuIG7hu69hLCB24buldCDEkWlcclxuICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5tb3ZlVG8odGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy5WZWMzLlVQLm11bCgtMjAwKSksIDEgLFxyXG4gICAgKCk9PiAgdGhpcy5tb3ZlVG8odGhpcy5ub2RlLnBvc2l0aW9uLmFkZChjYy5WZWMzLlVQLm11bCgxMDAwMCkpLCAxICxcclxuICAgIC8vc2hvdyBVSSBlbmQgY2FyZFxyXG4gICAgKCk9PiBVSU1hbmFnZXIuSW5zLm9uT3BlbigxKSBcclxuICAgICxmYWxzZSlcclxuICAgICxmYWxzZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy9ow6BtIGRpIGNodXnhu4NuIHNhbmcgduG7iyB0csOtIG3hu5tpXHJcbiAgcHVibGljIG1vdmVUbyh0YXJnZXQ6IGNjLlZlYzMsIGR1cmF0aW9uOiBudW1iZXIsIGRvbmVBY3Rpb246IEZ1bmN0aW9uLCBpc1dvcmxkU3BhY2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIEzhuqV5IHbhu4sgdHLDrSB0YXJnZXQgcG9zaXRpb24gY+G7p2Egbm9kZVxyXG4gICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBpc1dvcmxkU3BhY2UgPyB0aGlzLm5vZGUuZ2V0TG9jYWxQb3NpdGlvbih0YXJnZXQpIDogdGFyZ2V0O1xyXG5cclxuICAgIC8vIFThuqFvIG3hu5l0IHR3ZWVuIMSR4buDIGRpIGNodXnhu4NuIG5vZGUgdOG7qyB24buLIHRyw60gaGnhu4duIHThuqFpIMSR4bq/biB24buLIHRyw60gbeG7m2kgKHBvc2l0aW9uKVxyXG4gICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAudG8oZHVyYXRpb24sXHJcbiAgICAgICAgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSxcclxuICAgICAgICB7IGVhc2luZzogXCJsaW5lYXJcIiwgfVxyXG4gICAgICApXHJcbiAgICAgIC5jYWxsKGRvbmVBY3Rpb24pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gIH1cclxufVxyXG4iXX0=