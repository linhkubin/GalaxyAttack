
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
            type: [PoolAmount],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcUG9vbENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLDJDQUFvRDtBQUU5QyxJQUFBLEtBQWlDLEVBQUUsQ0FBQyxVQUFVLEVBQTdDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLFNBQVMsZUFBaUIsQ0FBQztBQUdyRDtJQUFBO1FBRVcsU0FBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFNLEdBQWUsSUFBSSxDQUFDO1FBRzFCLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDYTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzhDQUNLO0lBUmpCLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FTdEI7SUFBRCxpQkFBQztDQVRELEFBU0MsSUFBQTtBQVRZLGdDQUFVO0FBWXZCO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMkNDO1FBcENHLFdBQUssR0FBaUIsRUFBRSxDQUFDOztJQW9DN0IsQ0FBQztJQWxDRyx1QkFBdUI7SUFDdkIsb0NBQW9DO0lBRXBDLDRCQUFNLEdBQU47UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDdkMsb0JBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RjtRQUVELHFFQUFxRTtRQUNyRSwrQkFBK0I7UUFDL0Isb0NBQW9DO1FBQ3BDLHlCQUF5QjtRQUV6QixvQ0FBb0M7UUFDcEMseUNBQXlDO1FBRXpDLGlEQUFpRDtRQUVqRCxxQ0FBcUM7UUFDckMsK0NBQStDO1FBRS9DLHNFQUFzRTtRQUd0RSxrQ0FBa0M7UUFFbEMsb0VBQW9FO1FBQ3BFLG1FQUFtRTtRQUVuRSw4QkFBOEI7SUFHbEMsQ0FBQztJQWxDRDtRQUxDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNsQixXQUFXLEVBQUUsZ0JBQWdCO1lBQzdCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUM7OENBQ3VCO0lBUFIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTJDL0I7SUFBRCxrQkFBQztDQTNDRCxBQTJDQyxDQTNDd0MsRUFBRSxDQUFDLFNBQVMsR0EyQ3BEO2tCQTNDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2xNZW1iZXJcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi9TaW1wbGVQb29sXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksIGluc3BlY3Rvcn0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBvb2xBbW91bnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgcm9vdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHB1YmxpYyBwcmVmYWI6IFBvb2xNZW1iZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHVibGljIGFtb3VudDogbnVtYmVyID0gMDtcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbENvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogW1Bvb2xBbW91bnRdLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIkN1c3RvbSBPYmplY3RzXCIsXHJcbiAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHBvb2xzOiBQb29sQW1vdW50W10gPSBbXTtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgLy8gcHVibGljIHByZWZhYjogUG9vbE1lbWJlciA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9vbHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBTaW1wbGVQb29sLnByZWxvYWQodGhpcy5wb29sc1tpXS5wcmVmYWIsIHRoaXMucG9vbHNbaV0ucm9vdCwgdGhpcy5wb29sc1tpXS5hbW91bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IG1lbWJlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWVtYmVyICE9IG51bGwpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbWJlci5ub2RlICE9IG51bGwpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbWJlci5pKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBtZW1iZXIubm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICAvLyBtZW1iZXIubm9kZS5zZXRQb3NpdGlvbihjYy52MygwLDAsMCkpO1xyXG5cclxuICAgICAgICAvLyBTaW1wbGVQb29sLnByZWxvYWQodGhpcy5wcmVmYWIsIHRoaXMubm9kZSwgMik7XHJcblxyXG4gICAgICAgIC8vIEJ1bGxldF9JbmZvLm5vZGUuc2V0UG9zaXRpb24oUG9zKTtcclxuICAgICAgICAvLyBCdWxsZXRfSW5mby5ub2RlLnNldFBhcmVudCh0aGlzLkJ1bGxldEhvbGQpO1xyXG5cclxuICAgICAgICAvLyBsZXQgbWVtYmVyID0gU2ltcGxlUG9vbC5zcGF3bihQb29sVHlwZS5CdWxsZXRfMSwgY2MudjMoMCwwLDApLCA5MCk7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWVtYmVyLm5vZGUuYW5nbGUpO1xyXG5cclxuICAgICAgICAvLyBTaW1wbGVQb29sLnNwYXduKFBvb2xUeXBlLkJ1bGxldF8xLCBjYy52MygxMDAsMCwwKSwgMTgwKS5pID0gMTAwO1xyXG4gICAgICAgIC8vIFNpbXBsZVBvb2wuc3Bhd24oUG9vbFR5cGUuQnVsbGV0XzEsIGNjLnYzKDIwMCwwLDApLCAzMCkuaSA9IDEwMDtcclxuXHJcbiAgICAgICAgLy8gU2ltcGxlUG9vbC5kZXNwYXduKG1lbWJlcik7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19