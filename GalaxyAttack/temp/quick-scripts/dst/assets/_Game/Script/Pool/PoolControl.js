
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Pool/PoolControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f1a08OphpAoou9lIViF04J', 'PoolControl');
// _Game/Script/Pool/PoolControl.ts

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
exports.PoolAmount = void 0;
var SimplePool_1 = require("./SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, inspector = _a.inspector;
var PoolAmount = /** @class */ (function () {
    function PoolAmount() {
        this.root = null;
        this.prefab = null;
        this.amount = 0;
    }
    __decorate([
        property(cc.Node)
    ], PoolAmount.prototype, "root", void 0);
    __decorate([
        property(cc.Prefab)
    ], PoolAmount.prototype, "prefab", void 0);
    __decorate([
        property(cc.Integer)
    ], PoolAmount.prototype, "amount", void 0);
    PoolAmount = __decorate([
        ccclass
    ], PoolAmount);
    return PoolAmount;
}());
exports.PoolAmount = PoolAmount;
var PoolControl = /** @class */ (function (_super) {
    __extends(PoolControl, _super);
    function PoolControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pools = [];
        return _this;
    }
    // @property(cc.Prefab)
    // public prefab: PoolMember = null;
    PoolControl.prototype.onLoad = function () {
        for (var i = 0; i < this.pools.length; i++) {
            SimplePool_1.default.preload(this.pools[i].prefab, this.pools[i].root, this.pools[i].amount);
        }
        // let member = cc.instantiate(this.prefab).getComponent(PoolMember);
        // console.log(member != null);
        // console.log(member.node != null);
        // console.log(member.i);
        // member.node.setParent(this.node);
        // member.node.setPosition(cc.v3(0,0,0));
        // SimplePool.preload(this.prefab, this.node, 2);
        // Bullet_Info.node.setPosition(Pos);
        // Bullet_Info.node.setParent(this.BulletHold);
        // let member = SimplePool.spawn(PoolType.Bullet_1, cc.v3(0,0,0), 90);
        // console.log(member.node.angle);
        // SimplePool.spawn(PoolType.Bullet_1, cc.v3(100,0,0), 180).i = 100;
        // SimplePool.spawn(PoolType.Bullet_1, cc.v3(200,0,0), 30).i = 100;
        // SimplePool.despawn(member);
    };
    __decorate([
        property({
            type: Array(PoolAmount),
            displayName: "Custom Objects",
            serializable: true,
        })
    ], PoolControl.prototype, "pools", void 0);
    PoolControl = __decorate([
        ccclass
    ], PoolControl);
    return PoolControl;
}(cc.Component));
exports.default = PoolControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcUG9vbENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLDJDQUFvRDtBQUU5QyxJQUFBLEtBQWlDLEVBQUUsQ0FBQyxVQUFVLEVBQTdDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLFNBQVMsZUFBaUIsQ0FBQztBQUdyRDtJQUFBO1FBRVcsU0FBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFNLEdBQWUsSUFBSSxDQUFDO1FBRzFCLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDYTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzhDQUNLO0lBUmpCLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FTdEI7SUFBRCxpQkFBQztDQVRELEFBU0MsSUFBQTtBQVRZLGdDQUFVO0FBWXZCO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMkNDO1FBcENHLFdBQUssR0FBaUIsRUFBRSxDQUFDOztJQW9DN0IsQ0FBQztJQWxDRyx1QkFBdUI7SUFDdkIsb0NBQW9DO0lBRXBDLDRCQUFNLEdBQU47UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDdkMsb0JBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RjtRQUVELHFFQUFxRTtRQUNyRSwrQkFBK0I7UUFDL0Isb0NBQW9DO1FBQ3BDLHlCQUF5QjtRQUV6QixvQ0FBb0M7UUFDcEMseUNBQXlDO1FBRXpDLGlEQUFpRDtRQUVqRCxxQ0FBcUM7UUFDckMsK0NBQStDO1FBRS9DLHNFQUFzRTtRQUd0RSxrQ0FBa0M7UUFFbEMsb0VBQW9FO1FBQ3BFLG1FQUFtRTtRQUVuRSw4QkFBOEI7SUFHbEMsQ0FBQztJQWxDRDtRQUxDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLFdBQVcsRUFBRSxnQkFBZ0I7WUFDN0IsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQzs4Q0FDdUI7SUFQUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMkMvQjtJQUFELGtCQUFDO0NBM0NELEFBMkNDLENBM0N3QyxFQUFFLENBQUMsU0FBUyxHQTJDcEQ7a0JBM0NvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFBvb2xNZW1iZXIgZnJvbSBcIi4vUG9vbE1lbWJlclwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCwgeyBQb29sVHlwZSB9IGZyb20gXCIuL1NpbXBsZVBvb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSwgaW5zcGVjdG9yfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUG9vbEFtb3VudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyByb290OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHVibGljIHByZWZhYjogUG9vbE1lbWJlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgYW1vdW50OiBudW1iZXIgPSAwO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb29sQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBBcnJheShQb29sQW1vdW50KSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCJDdXN0b20gT2JqZWN0c1wiLFxyXG4gICAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICBwb29sczogUG9vbEFtb3VudFtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIC8vIHB1YmxpYyBwcmVmYWI6IFBvb2xNZW1iZXIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvb2xzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgU2ltcGxlUG9vbC5wcmVsb2FkKHRoaXMucG9vbHNbaV0ucHJlZmFiLCB0aGlzLnBvb2xzW2ldLnJvb3QsIHRoaXMucG9vbHNbaV0uYW1vdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxldCBtZW1iZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYikuZ2V0Q29tcG9uZW50KFBvb2xNZW1iZXIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbWJlciAhPSBudWxsKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZW1iZXIubm9kZSAhPSBudWxsKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZW1iZXIuaSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gbWVtYmVyLm5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gbWVtYmVyLm5vZGUuc2V0UG9zaXRpb24oY2MudjMoMCwwLDApKTtcclxuXHJcbiAgICAgICAgLy8gU2ltcGxlUG9vbC5wcmVsb2FkKHRoaXMucHJlZmFiLCB0aGlzLm5vZGUsIDIpO1xyXG5cclxuICAgICAgICAvLyBCdWxsZXRfSW5mby5ub2RlLnNldFBvc2l0aW9uKFBvcyk7XHJcbiAgICAgICAgLy8gQnVsbGV0X0luZm8ubm9kZS5zZXRQYXJlbnQodGhpcy5CdWxsZXRIb2xkKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IG1lbWJlciA9IFNpbXBsZVBvb2wuc3Bhd24oUG9vbFR5cGUuQnVsbGV0XzEsIGNjLnYzKDAsMCwwKSwgOTApO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbWJlci5ub2RlLmFuZ2xlKTtcclxuXHJcbiAgICAgICAgLy8gU2ltcGxlUG9vbC5zcGF3bihQb29sVHlwZS5CdWxsZXRfMSwgY2MudjMoMTAwLDAsMCksIDE4MCkuaSA9IDEwMDtcclxuICAgICAgICAvLyBTaW1wbGVQb29sLnNwYXduKFBvb2xUeXBlLkJ1bGxldF8xLCBjYy52MygyMDAsMCwwKSwgMzApLmkgPSAxMDA7XHJcblxyXG4gICAgICAgIC8vIFNpbXBsZVBvb2wuZGVzcGF3bihtZW1iZXIpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==