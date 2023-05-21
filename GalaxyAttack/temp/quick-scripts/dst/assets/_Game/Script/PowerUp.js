
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
var LevelManager_1 = require("./Manager/LevelManager");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG93ZXJVcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1REFBa0Q7QUFDbEQsZ0RBQTJDO0FBQzNDLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBVTtJQUEvQztRQUFBLHFFQTBEQztRQXhERyw2SEFBNkg7UUFDckgsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVMsR0FBVyxFQUFFLENBQUM7O0lBcURuQyxDQUFDO0lBbkRHLDBCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsMEVBQTBFO1lBQzFFLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFM0Usd0RBQXdEO1lBQ3hELElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELElBQU0sT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRS9DLHNCQUFzQjtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU5QiwyREFBMkQ7WUFDM0QsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7U0FDbkI7YUFDSTtZQUNELGlCQUFpQjtZQUNqQixJQUFNLFNBQVMsR0FBRyxzQkFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUV0RCxxQkFBcUI7WUFDckIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFcEMsZ0RBQWdEO1lBQ2hELElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDL0MsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV0RCxrQkFBa0I7WUFDbEIsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFMUMsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFNUMsNEVBQTRFO1lBQzVFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFDSSxzQkFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEMsb0JBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQXhEZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBEM0I7SUFBRCxjQUFDO0NBMURELEFBMERDLENBMURvQyxvQkFBVSxHQTBEOUM7a0JBMURvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IExldmVsTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyL0xldmVsTWFuYWdlclwiO1xyXG5pbXBvcnQgUG9vbE1lbWJlciBmcm9tIFwiLi9Qb29sL1Bvb2xNZW1iZXJcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wgZnJvbSBcIi4vUG9vbC9TaW1wbGVQb29sXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvd2VyVXAgZXh0ZW5kcyBQb29sTWVtYmVyIHtcclxuXHJcbiAgICAvL3NjcmlwdCBuw6B5IGNvcHkgY+G7p2EgS2jDoW5oIGNobyBuaGFuaCwgbcOgIGjDrG5oIG5oxrAgw7QgS2jDoW5oIG7DoHkgY29weSBj4bunYSBDaGF0R1BUIGhheSBzYW8gbcOgIHThu7EgZMawbmcgbmjDrG4gY29tbWVudCBjaHXhuqluIGNo4buJIHRo4bq/XHJcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSA1MDA7XHJcbiAgICBwcml2YXRlIHRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRocmVzaG9sZDogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBwaXZvdCBvZiBib29zdDogd2hlbiBhY3RpdmUgaXMgbW92ZSBkb3duIHRvIGVuZCBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGNjLnYyKDAsIC0xKS5yb3RhdGVTZWxmKHRoaXMubm9kZS5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGluZm8gd2l0aCBkZWx0YXRpbWUgdG8gYm9vc3QgaW50ZXJhY3Qgd2l0aCBwbGF5ZXJcclxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBkaXJlY3Rpb24ubXVsKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IHZlbG9jaXR5Lm11bChjYy5kaXJlY3Rvci5nZXREZWx0YVRpbWUoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHYzRGVsdGEgPSBuZXcgY2MuVmVjMyhkZWx0YS54LCBkZWx0YS55LCAwKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZCh2M0RlbHRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgZG93biB0aGUgYm9vc3RcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKG5ld1Bvcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZnRlciB0aW1lIG1vdmUgb24gc2NyZWVuLCBib29zdCB3aWxsIG1vdmUgdG93YXJkIHBsYXllclxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgLT0gZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL2dldCBpbmZvIHBsYXllclxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSBMZXZlbE1hbmFnZXIuSW5zLnNoaXAubm9kZS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vZ2V0IGluZm8gdGhpcyBib29zdFxyXG4gICAgICAgICAgICBjb25zdCBib29zdFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBkaXN0YW5jZSBidHcgdGhpcyBib29zdCB3aXRoIHBsYXllclxyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHBsYXllclBvcy5zdWIoYm9vc3RQb3MpLm1hZygpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBwbGF5ZXJQb3Muc3ViKGJvb3N0UG9zKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmVtZW50IGFjdGlvblxyXG4gICAgICAgICAgICBjb25zdCBtb3ZlbWVudCA9IGRpcmVjdGlvbi5tdWwoMjAwMCAqIGR0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdGhpcyBib29zdCB0b3dhcmRzIHBsYXllciBub2RlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGJvb3N0UG9zLmFkZChtb3ZlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVja2luZyBpZiBkaXN0YW5jZSBidHcgdGhpcyBib29zdCB3aXRoIHBsYXllciA9IDAsIGl0IHdpbGwgZGVzcGF3biBzZWxmXHJcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMudGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzcGF3bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzcGF3bigpIHtcclxuICAgICAgICBMZXZlbE1hbmFnZXIuSW5zLnNoaXAub25Qb3dlclVwKCk7XHJcbiAgICAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=