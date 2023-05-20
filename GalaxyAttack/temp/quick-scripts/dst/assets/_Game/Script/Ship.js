
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
    //khi player bắt đầu ấn xuống
    Ship.prototype.onStart = function () {
        //bắt đầu bắn đạn
        this.isShooting = true;
        //tắt tut
    };
    Ship.prototype.onFinish = function () {
        //tàu k bắn đạn nữa, vụt đi, show UI
        this.isShooting = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcU2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixnREFBeUQ7QUFDekQseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBaUlDO1FBMUhRLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBUS9CLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRXRDLG1CQUFtQjtRQUNYLGtCQUFZLEdBQWUsRUFBRSxDQUFDO1FBS3RDLDZCQUE2QjtRQUNyQixZQUFNLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFJL0YsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUEyQ3BDLGdDQUFnQztRQUV4QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQXdENUIsQ0FBQztJQW5HQyxxQkFBTSxHQUFOO1FBQ0UsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJ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LFFBQVEsRUFBRSxjQUFjLEVBQUUsRUFDNUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxHQUFHLENBQ3RCO2FBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF6SEQ7UUFMQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQixDQUFDO2dEQUVvQztJQVF0QztRQU5DLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLEVBQUUsZ0JBQWdCO1NBQzFCLENBQUM7Z0RBR29DO0lBZm5CLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FpSXhCO0lBQUQsV0FBQztDQWpJRCxBQWlJQyxDQWpJaUMsRUFBRSxDQUFDLFNBQVMsR0FpSTdDO2tCQWpJb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vQnVsbGV0XCI7XHJcbmltcG9ydCBTaW1wbGVQb29sLCB7IFBvb2xUeXBlIH0gZnJvbSBcIi4vUG9vbC9TaW1wbGVQb29sXCI7XHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBbY2MuTm9kZV0sXHJcbiAgICB0b29sdGlwOiAnYnVsbGV0UG9pbnRzXzEnXHJcbiAgfSlcclxuICAvL2xpc3QgxJHhuqFuIGJhbiDEkeG6p3VcclxuICBwdWJsaWMgYnVsbGV0UG9pbnRzXzE6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICBAcHJvcGVydHkoe1xyXG4gICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgdG9vbHRpcDogJ2J1bGxldFBvaW50c18yJ1xyXG4gIH0pXHJcblxyXG4gIC8vbGlzdCDEkeG6oW4gc2F1IGtoaSBsZXZlbCB1cFxyXG4gIHB1YmxpYyBidWxsZXRQb2ludHNfMjogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIC8vbGlzdCDEkeG6oW4gYuG6r24gcmEgIFxyXG4gIHByaXZhdGUgYnVsbGV0UG9pbnRzIDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIC8vIHByaXZhdGUgcGxheWVyOiBjYy5Ob2RlO1xyXG4gIHByaXZhdGUgdG91Y2hPZmZzZXQ6IGNjLlZlYzI7XHJcblxyXG4gIC8vZ2nhu5tpIGjhuqFuIGtodSB24buxYyDEkWnhu4F1IGtoaeG7g25cclxuICBwcml2YXRlIHNjcmVlbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aCwgY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodCk7XHJcbiAgcHJpdmF0ZSBjbGFtcEhvcml6b246IGNjLlZlYzI7Ly8gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi54KTtcclxuICBwcml2YXRlIGNsYW1wVmVydGljYWw6IGNjLlZlYzI7Ly8gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi55KTtcclxuICBcclxuICBwcml2YXRlIGlzU2hvb3Rpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gdGhpcy5wbGF5ZXIgPSBjYy5maW5kKCdwbGF5ZXInKTtcclxuICAgIC8vc2V0IHVwIG1vdmUgb2JqZWN0XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5zY3JlZW4gPSBuZXcgY2MuVmVjMihjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGgsIGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQpO1xyXG4gICAgdGhpcy5jbGFtcEhvcml6b24gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi54KTtcclxuICAgIHRoaXMuY2xhbXBWZXJ0aWNhbCA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLnkpO1xyXG5cclxuICAgIHRoaXMuYnVsbGV0UG9pbnRzID0gdGhpcy5idWxsZXRQb2ludHNfMTtcclxuICB9XHJcblxyXG4gIFxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy9Nb3ZlXHJcblxyXG4gIC8vYmF0IGRhdSBhbiB4dW9uZ1xyXG4gIHByaXZhdGUgb25Ub3VjaEJlZ2FuKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKS8qOiBib29sZWFuKi8ge1xyXG4gICAgdGhpcy50b3VjaE9mZnNldCA9IFV0aWxpdGllcy52ZWMzVG9WZWMyKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5nZXRNb3VzZVBvaW50KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICAvL2RpIGNodXllbiBjaHVvdFxyXG4gIHByaXZhdGUgb25Ub3VjaE1vdmVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICBjb25zdCBuZXdQb3MgPSB0aGlzLmdldE1vdXNlUG9pbnQoZXZlbnQpLmFkZCh0aGlzLnRvdWNoT2Zmc2V0KTtcclxuXHJcbiAgICBuZXdQb3MueCA9IGNjLm1pc2MuY2xhbXBmKG5ld1Bvcy54LCB0aGlzLmNsYW1wSG9yaXpvbi54LCB0aGlzLmNsYW1wSG9yaXpvbi55KTtcclxuICAgIG5ld1Bvcy55ID0gY2MubWlzYy5jbGFtcGYobmV3UG9zLnksIHRoaXMuY2xhbXBWZXJ0aWNhbC54LCB0aGlzLmNsYW1wVmVydGljYWwueSk7XHJcbiAgICBcclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IFV0aWxpdGllcy52ZWMyVG9WZWMzKG5ld1Bvcyk7XHJcbiAgfVxyXG5cclxuICAvL2xheSB2aSB0cmkgY2h1b3QgYmFtIHh1b25nXHJcbiAgcHJpdmF0ZSBnZXRNb3VzZVBvaW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogY2MuVmVjMntcclxuICAgIHJldHVybiBldmVudC5nZXRMb2NhdGlvbigpLnN1YihjYy52Mih0aGlzLnNjcmVlbi54ICogMC41LCB0aGlzLnNjcmVlbi55ICogMC41KSk7XHJcbiAgfVxyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gXHJcbiAgICBpZiAodGhpcy5pc1Nob290aW5nKSB7XHJcbiAgICAgIC8vbeG7l2kgMC4ycyBi4bqvbiAxIGzhuqduXHJcbiAgICAgIGlmICh0aGlzLnRpbWVyIDw9IDApIHtcclxuICAgICAgICB0aGlzLnRpbWVyICs9IDAuMjtcclxuICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGltZXIgLT0gZHQ7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG9vdCgpe1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1bGxldFBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAoU2ltcGxlUG9vbC5zcGF3bihQb29sVHlwZS5CdWxsZXRfMSwgIHRoaXMuYnVsbGV0UG9pbnRzW2ldLmdldFdvcmxkUG9zaXRpb24oKSx0aGlzLmJ1bGxldFBvaW50c1tpXS5hbmdsZSkgYXMgQnVsbGV0KS5vbkluaXQoMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUG93ZXJVcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnVsbGV0UG9pbnRzID0gdGhpcy5idWxsZXRQb2ludHNfMjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNoaWVsZCgpOiB2b2lkIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy9raGkgcGxheWVyIGLhuq90IMSR4bqndSDhuqVuIHh14buRbmdcclxuICBwdWJsaWMgb25TdGFydCgpOiB2b2lkIHtcclxuICAgIC8vYuG6r3QgxJHhuqd1IGLhuq9uIMSR4bqhblxyXG4gICAgdGhpcy5pc1Nob290aW5nID0gdHJ1ZTtcclxuICAgIC8vdOG6r3QgdHV0XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25GaW5pc2goKTogdm9pZCB7XHJcbiAgICAvL3TDoHUgayBi4bqvbiDEkeG6oW4gbuG7r2EsIHbhu6V0IMSRaSwgc2hvdyBVSVxyXG4gICAgdGhpcy5pc1Nob290aW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvL2jDoG0gZGkgY2h1eeG7g24gc2FuZyB24buLIHRyw60gbeG7m2lcclxuICBwdWJsaWMgbW92ZVRvKHRhcmdldDogY2MuVmVjMywgZHVyYXRpb246IG51bWJlciwgZG9uZUFjdGlvbjogRnVuY3Rpb24sIGlzV29ybGRTcGFjZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLy8gTOG6pXkgduG7iyB0csOtIHRhcmdldCBwb3NpdGlvbiBj4bunYSBub2RlXHJcbiAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGlzV29ybGRTcGFjZSA/IHRoaXMubm9kZS5nZXRMb2NhbFBvc2l0aW9uKHRhcmdldCkgOiB0YXJnZXQ7XHJcblxyXG4gICAgLy8gVOG6oW8gbeG7mXQgdHdlZW4gxJHhu4MgZGkgY2h1eeG7g24gbm9kZSB04burIHbhu4sgdHLDrSBoaeG7h24gdOG6oWkgxJHhur9uIHbhu4sgdHLDrSBt4bubaSAocG9zaXRpb24pXHJcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgIC50byhkdXJhdGlvbixcclxuICAgICAgICB7IHBvc2l0aW9uOiB0YXJnZXRQb3NpdGlvbiB9LFxyXG4gICAgICAgIHsgZWFzaW5nOiBcImxpbmVhclwiLCB9XHJcbiAgICAgIClcclxuICAgICAgLmNhbGwoZG9uZUFjdGlvbilcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==