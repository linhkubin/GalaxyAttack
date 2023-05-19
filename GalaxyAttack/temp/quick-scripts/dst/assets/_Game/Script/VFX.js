
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/VFX.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'daf85TWbbBBF7nluAeArrEU', 'VFX');
// _Game/Script/VFX.ts

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
var VFX = /** @class */ (function (_super) {
    __extends(VFX, _super);
    function VFX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        return _this;
    }
    VFX.prototype.onEnable = function () {
        var _this = this;
        this.anim.play();
        // cc.tween(this.node).delay(0.5).call(()=> SimplePool.despawn(this));
        //delay 0.5s thi despawn
        setTimeout(function () {
            SimplePool_1.default.despawn(_this);
        }, 500);
    };
    __decorate([
        property({ type: cc.Animation })
    ], VFX.prototype, "anim", void 0);
    VFX = __decorate([
        ccclass
    ], VFX);
    return VFX;
}(PoolMember_1.default));
exports.default = VFX;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcVkZYLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdEQUEyQztBQUMzQyxnREFBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBaUMsdUJBQVU7SUFBM0M7UUFBQSxxRUFlQztRQVpHLFVBQUksR0FBa0IsSUFBSSxDQUFDOztJQVkvQixDQUFDO0lBVmEsc0JBQVEsR0FBbEI7UUFBQSxpQkFTQztRQVBHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFakIsc0VBQXNFO1FBQ3RFLHdCQUF3QjtRQUN4QixVQUFVLENBQUM7WUFDUCxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FDQUNOO0lBSFYsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQWV2QjtJQUFELFVBQUM7Q0FmRCxBQWVDLENBZmdDLG9CQUFVLEdBZTFDO2tCQWZvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFBvb2xNZW1iZXIgZnJvbSBcIi4vUG9vbC9Qb29sTWVtYmVyXCI7XHJcbmltcG9ydCBTaW1wbGVQb29sIGZyb20gXCIuL1Bvb2wvU2ltcGxlUG9vbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWRlggZXh0ZW5kcyBQb29sTWVtYmVyIHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BbmltYXRpb24gfSlcclxuICAgIGFuaW0gOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoKTtcclxuXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSgwLjUpLmNhbGwoKCk9PiBTaW1wbGVQb29sLmRlc3Bhd24odGhpcykpO1xyXG4gICAgICAgIC8vZGVsYXkgMC41cyB0aGkgZGVzcGF3blxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBTaW1wbGVQb29sLmRlc3Bhd24odGhpcyk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxufVxyXG4iXX0=