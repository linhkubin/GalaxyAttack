
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/PowerUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df312CgxkxLGLplqCwUcFS+', 'PowerUp');
// _Game/Script/PowerUp.ts

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
var LevelManager_1 = require("./LevelManager");
var PoolMember_1 = require("./Pool/PoolMember");
var SimplePool_1 = require("./Pool/SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PowerUp = /** @class */ (function (_super) {
    __extends(PowerUp, _super);
    function PowerUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //script này copy của Khánh cho nhanh, mà hình như ô Khánh này copy của ChatGPT hay sao mà tự dưng nhìn comment chuẩn chỉ thế
        _this.speed = 500;
        _this.time = 0;
        _this.threshold = 20;
        return _this;
        // onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        //     //đoạn này k cần so sánh group name vì đã chia group contact rồi
        //     // if (other.node.group == 'player') {
        //     other.getComponent(Ship).onPowerUp();
        //     SimplePool.despawn(this);
        //     // }
        // }
    }
    PowerUp.prototype.onEnable = function () {
        this.time = 1;
    };
    PowerUp.prototype.update = function (dt) {
        if (this.time > 0) {
            // calculate pivot of boost: when active is move down to end screen height
            var direction = cc.v2(0, -1).rotateSelf(this.node.angle * Math.PI / 180);
            // add info with deltatime to boost interact with player
            var velocity = direction.mul(this.speed);
            var delta = velocity.mul(cc.director.getDeltaTime());
            var v3Delta = new cc.Vec3(delta.x, delta.y, 0);
            var newPos = this.node.position.add(v3Delta);
            // move down the boost
            this.node.setPosition(newPos);
            // after time move on screen, boost will move toward player
            this.time -= dt;
        }
        else {
            //get info player
            var playerPos = LevelManager_1.default.Ins.ship.node.position;
            //get info this boost
            var boostPos = this.node.position;
            // calculate distance btw this boost with player
            var distance = playerPos.sub(boostPos).mag();
            var direction = playerPos.sub(boostPos).normalize();
            // movement action
            var movement = direction.mul(2000 * dt);
            // move this boost towards player node
            this.node.position = boostPos.add(movement);
            // checking if distance btw this boost with player = 0, it will despawn self
            if (distance < this.threshold) {
                this.onDespawn();
            }
        }
    };
    PowerUp.prototype.onDespawn = function () {
        LevelManager_1.default.Ins.ship.onPowerUp();
        SimplePool_1.default.despawn(this);
    };
    PowerUp = __decorate([
        ccclass
    ], PowerUp);
    return PowerUp;
}(PoolMember_1.default));
exports.default = PowerUp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG93ZXJVcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiwrQ0FBMEM7QUFDMUMsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBVTtJQUEvQztRQUFBLHFFQW1FQztRQWpFRyw2SEFBNkg7UUFDckgsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVMsR0FBVyxFQUFFLENBQUM7O1FBc0QvQiw0REFBNEQ7UUFFNUQsdUVBQXVFO1FBQ3ZFLDZDQUE2QztRQUM3Qyw0Q0FBNEM7UUFDNUMsZ0NBQWdDO1FBQ2hDLFdBQVc7UUFDWCxJQUFJO0lBQ1IsQ0FBQztJQTVERywwQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNmLDBFQUEwRTtZQUMxRSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBRTNFLHdEQUF3RDtZQUN4RCxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUN2RCxJQUFNLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUvQyxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFOUIsMkRBQTJEO1lBQzNELElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ25CO2FBQ0k7WUFDRCxpQkFBaUI7WUFDakIsSUFBTSxTQUFTLEdBQUcsc0JBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFdEQscUJBQXFCO1lBQ3JCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBRXBDLGdEQUFnRDtZQUNoRCxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQy9DLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFdEQsa0JBQWtCO1lBQ2xCLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRTFDLHNDQUFzQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTVDLDRFQUE0RTtZQUM1RSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7U0FDSjtJQUNMLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0ksc0JBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xDLG9CQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUF4RGdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FtRTNCO0lBQUQsY0FBQztDQW5FRCxBQW1FQyxDQW5Fb0Msb0JBQVUsR0FtRTlDO2tCQW5Fb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBMZXZlbE1hbmFnZXIgZnJvbSBcIi4vTGV2ZWxNYW5hZ2VyXCI7XHJcbmltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2wvUG9vbE1lbWJlclwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG93ZXJVcCBleHRlbmRzIFBvb2xNZW1iZXIge1xyXG5cclxuICAgIC8vc2NyaXB0IG7DoHkgY29weSBj4bunYSBLaMOhbmggY2hvIG5oYW5oLCBtw6AgaMOsbmggbmjGsCDDtCBLaMOhbmggbsOgeSBjb3B5IGPhu6dhIENoYXRHUFQgaGF5IHNhbyBtw6AgdOG7sSBkxrBuZyBuaMOsbiBjb21tZW50IGNodeG6qW4gY2jhu4kgdGjhur9cclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDUwMDtcclxuICAgIHByaXZhdGUgdGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGhyZXNob2xkOiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGltZSA+IDApIHtcclxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHBpdm90IG9mIGJvb3N0OiB3aGVuIGFjdGl2ZSBpcyBtb3ZlIGRvd24gdG8gZW5kIHNjcmVlbiBoZWlnaHRcclxuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gY2MudjIoMCwgLTEpLnJvdGF0ZVNlbGYodGhpcy5ub2RlLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgaW5mbyB3aXRoIGRlbHRhdGltZSB0byBib29zdCBpbnRlcmFjdCB3aXRoIHBsYXllclxyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IGRpcmVjdGlvbi5tdWwodGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gdmVsb2NpdHkubXVsKGNjLmRpcmVjdG9yLmdldERlbHRhVGltZSgpKTtcclxuICAgICAgICAgICAgY29uc3QgdjNEZWx0YSA9IG5ldyBjYy5WZWMzKGRlbHRhLngsIGRlbHRhLnksIDApO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQb3MgPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkKHYzRGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSBkb3duIHRoZSBib29zdFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFmdGVyIHRpbWUgbW92ZSBvbiBzY3JlZW4sIGJvb3N0IHdpbGwgbW92ZSB0b3dhcmQgcGxheWVyXHJcbiAgICAgICAgICAgIHRoaXMudGltZSAtPSBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vZ2V0IGluZm8gcGxheWVyXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclBvcyA9IExldmVsTWFuYWdlci5JbnMuc2hpcC5ub2RlLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy9nZXQgaW5mbyB0aGlzIGJvb3N0XHJcbiAgICAgICAgICAgIGNvbnN0IGJvb3N0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGRpc3RhbmNlIGJ0dyB0aGlzIGJvb3N0IHdpdGggcGxheWVyXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gcGxheWVyUG9zLnN1Yihib29zdFBvcykubWFnKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBsYXllclBvcy5zdWIoYm9vc3RQb3MpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZW1lbnQgYWN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVtZW50ID0gZGlyZWN0aW9uLm11bCgyMDAwICogZHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSB0aGlzIGJvb3N0IHRvd2FyZHMgcGxheWVyIG5vZGVcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gYm9vc3RQb3MuYWRkKG1vdmVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGlmIGRpc3RhbmNlIGJ0dyB0aGlzIGJvb3N0IHdpdGggcGxheWVyID0gMCwgaXQgd2lsbCBkZXNwYXduIHNlbGZcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpcy50aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EZXNwYXduKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXNwYXduKCkge1xyXG4gICAgICAgIExldmVsTWFuYWdlci5JbnMuc2hpcC5vblBvd2VyVXAoKTtcclxuICAgICAgICBTaW1wbGVQb29sLmRlc3Bhd24odGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xyXG5cclxuICAgIC8vICAgICAvL8SRb+G6oW4gbsOgeSBrIGPhuqduIHNvIHPDoW5oIGdyb3VwIG5hbWUgdsOsIMSRw6MgY2hpYSBncm91cCBjb250YWN0IHLhu5NpXHJcbiAgICAvLyAgICAgLy8gaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ3BsYXllcicpIHtcclxuICAgIC8vICAgICBvdGhlci5nZXRDb21wb25lbnQoU2hpcCkub25Qb3dlclVwKCk7XHJcbiAgICAvLyAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4gICAgLy8gICAgIC8vIH1cclxuICAgIC8vIH1cclxufVxyXG4iXX0=