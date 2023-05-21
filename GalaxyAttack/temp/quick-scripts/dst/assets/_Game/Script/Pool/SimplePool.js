
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Pool/SimplePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70677Li4BZOVa4X54PO83rD', 'SimplePool');
// _Game/Script/Pool/SimplePool.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolType = void 0;
var PoolMember_1 = require("./PoolMember");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PoolType;
(function (PoolType) {
    PoolType[PoolType["None"] = 0] = "None";
    PoolType[PoolType["Bullet_1"] = 1] = "Bullet_1";
    PoolType[PoolType["Bullet_2"] = 2] = "Bullet_2";
    PoolType[PoolType["Enemy_1"] = 10] = "Enemy_1";
    PoolType[PoolType["Enemy_2"] = 11] = "Enemy_2";
    PoolType[PoolType["VFX_Explore"] = 12] = "VFX_Explore";
    PoolType[PoolType["VFX_Spark"] = 13] = "VFX_Spark";
    PoolType[PoolType["Booster"] = 14] = "Booster";
})(PoolType = exports.PoolType || (exports.PoolType = {}));
var SimplePool = /** @class */ (function () {
    function SimplePool() {
    }
    //getter
    SimplePool.isHasPool = function (poolType) {
        return this.link.has(poolType);
    };
    //setter
    SimplePool.newPool = function (poolType, pool) {
        this.link.set(poolType, pool);
    };
    //setter
    SimplePool.getPool = function (poolType) {
        return this.link.get(poolType);
    };
    SimplePool.preload = function (prefab, parentNode, amount) {
        var pool = new Pool(prefab, parentNode, amount);
        if (!this.isHasPool(pool.poolType)) {
            this.newPool(pool.poolType, pool);
        }
    };
    SimplePool.spawn = function (nodeType, pos, angle) {
        if (angle === void 0) { angle = 0; }
        console.log(nodeType);
        if (!this.isHasPool(nodeType))
            console.error(" NEED PRELOAD POOL : " + nodeType + "!!!");
        return this.getPool(nodeType).spawn(pos, angle);
    };
    SimplePool.spawnT = function (nodeType, pos, angle) {
        return this.spawn(nodeType, pos, angle);
    };
    SimplePool.despawn = function (clone) {
        this.getPool(clone.poolType).despawn(clone);
    };
    //TODO: lam not sau
    SimplePool.collect = function (nodeType) {
        this.getPool(nodeType).collect();
    };
    SimplePool.collectAll = function () {
    };
    //trong scene sẽ cần tạo một node và add poolcontrol vào
    //list pool control được dùng để khởi tạo số lượng item tương ứng
    //prefab nào muốn dùng pool sẽ phải kế thừa poolmember
    //định nghĩa item đó bằng pooltype
    SimplePool.link = new Map;
    SimplePool = __decorate([
        ccclass
    ], SimplePool);
    return SimplePool;
}());
exports.default = SimplePool;
var Pool = /** @class */ (function () {
    function Pool(prefab, parentNode, amount) {
        this.list = [];
        this.preload(prefab, parentNode, amount);
    }
    Object.defineProperty(Pool.prototype, "poolType", {
        get: function () {
            return this.prefab.poolType;
        },
        enumerable: false,
        configurable: true
    });
    Pool.prototype.preload = function (prefab, parentNode, amount) {
        this.prefab = cc.instantiate(prefab).getComponent(PoolMember_1.default);
        this.parentNode = parentNode;
        for (var i = 0; i < amount; i++) {
            var clone = cc.instantiate(this.prefab.node).getComponent(PoolMember_1.default);
            clone.node.active = false;
            this.parentNode.addChild(clone.node);
            this.list.push(clone);
        }
    };
    Pool.prototype.spawn = function (pos, angle) {
        var clone = null;
        if (this.list.length > 0) {
            clone = this.list.shift();
        }
        else {
            clone = cc.instantiate(this.prefab.node).getComponent(PoolMember_1.default);
            this.parentNode.addChild(clone.node);
        }
        clone.node.setWorldPosition(pos);
        clone.node.angle = angle;
        clone.node.active = true;
        return clone;
    };
    Pool.prototype.despawn = function (clone) {
        if (clone.node.active) {
            clone.node.active = false;
            this.list.push(clone);
        }
    };
    Pool.prototype.collect = function () {
    };
    return Pool;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcU2ltcGxlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxRQVNYO0FBVEQsV0FBWSxRQUFRO0lBQ2hCLHVDQUFRLENBQUE7SUFDUiwrQ0FBWSxDQUFBO0lBQ1osK0NBQVksQ0FBQTtJQUNaLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osc0RBQWdCLENBQUE7SUFDaEIsa0RBQWUsQ0FBQTtJQUNmLDhDQUFhLENBQUE7QUFDakIsQ0FBQyxFQVRXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBU25CO0FBR0Q7SUFBQTtJQXNEQSxDQUFDO0lBN0NHLFFBQVE7SUFDRCxvQkFBUyxHQUFoQixVQUFpQixRQUFtQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ0Qsa0JBQU8sR0FBZCxVQUFlLFFBQW1CLEVBQUUsSUFBVTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7SUFDRCxrQkFBTyxHQUFkLFVBQWUsUUFBbUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRWEsa0JBQU8sR0FBckIsVUFBc0IsTUFBa0IsRUFBRSxVQUFtQixFQUFFLE1BQWM7UUFFekUsSUFBSSxJ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QUFaLFVBQWEsR0FBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdCO2FBQU07WUFDSCxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXpCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxzQkFBTyxHQUFkLFVBQWUsS0FBaUI7UUFDNUIsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFFTCxDQUFDO0lBRUQsc0JBQU8sR0FBUDtJQUNBLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0F2REEsQUF1REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2xNZW1iZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFBvb2xUeXBlIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgQnVsbGV0XzEgPSAxLCBcclxuICAgIEJ1bGxldF8yID0gMixcclxuICAgIEVuZW15XzEgPSAxMCxcclxuICAgIEVuZW15XzIgPSAxMSxcclxuICAgIFZGWF9FeHBsb3JlID0gMTIsXHJcbiAgICBWRlhfU3BhcmsgID0gMTMsXHJcbiAgICBCb29zdGVyICA9IDE0LFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVQb29sIHtcclxuXHJcbiAgICAvL3Ryb25nIHNjZW5lIHPhur0gY+G6p24gdOG6oW8gbeG7mXQgbm9kZSB2w6AgYWRkIHBvb2xjb250cm9sIHbDoG9cclxuICAgIC8vbGlzdCBwb29sIGNvbnRyb2wgxJHGsOG7o2MgZMO5bmcgxJHhu4Mga2jhu59pIHThuqFvIHPhu5EgbMaw4bujbmcgaXRlbSB0xrDGoW5nIOG7qW5nXHJcbiAgICAvL3ByZWZhYiBuw6BvIG114buRbiBkw7luZyBwb29sIHPhur0gcGjhuqNpIGvhur8gdGjhu6thIHBvb2xtZW1iZXJcclxuICAgIC8vxJHhu4tuaCBuZ2jEqWEgaXRlbSDEkcOzIGLhurFuZyBwb29sdHlwZVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGxpbms6IE1hcDxQb29sVHlwZSwgUG9vbD4gPSBuZXcgTWFwPFBvb2xUeXBlLCBQb29sPjtcclxuXHJcbiAgICAvL2dldHRlclxyXG4gICAgc3RhdGljIGlzSGFzUG9vbChwb29sVHlwZSA6IFBvb2xUeXBlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGluay5oYXMocG9vbFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0dGVyXHJcbiAgICBzdGF0aWMgbmV3UG9vbChwb29sVHlwZSA6IFBvb2xUeXBlLCBwb29sOiBQb29sKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5saW5rLnNldChwb29sVHlwZSwgcG9vbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vc2V0dGVyXHJcbiAgICBzdGF0aWMgZ2V0UG9vbChwb29sVHlwZSA6IFBvb2xUeXBlKTogUG9vbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGluay5nZXQocG9vbFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJlbG9hZChwcmVmYWI6IFBvb2xNZW1iZXIsIHBhcmVudE5vZGU6IGNjLk5vZGUsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHBvb2wgPSBuZXcgUG9vbChwcmVmYWIsIHBhcmVudE5vZGUsIGFtb3VudCk7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNIYXNQb29sKHBvb2wucG9vbFR5cGUpKXtcclxuICAgICAgICAgICAgdGhpcy5uZXdQb29sKHBvb2wucG9vbFR5cGUsIHBvb2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3Bhd24obm9kZVR5cGU6IFBvb2xUeXBlLCBwb3M6IGNjLlZlYzMsIGFuZ2xlOiBudW1iZXIgPSAwKTogUG9vbE1lbWJlciB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm9kZVR5cGUpO1xyXG4gICAgICAgIGlmKCF0aGlzLmlzSGFzUG9vbChub2RlVHlwZSkpIGNvbnNvbGUuZXJyb3IoXCIgTkVFRCBQUkVMT0FEIFBPT0wgOiBcIiArIG5vZGVUeXBlICsgXCIhISFcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbChub2RlVHlwZSkuc3Bhd24ocG9zLCBhbmdsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNwYXduVDxUPihub2RlVHlwZTogUG9vbFR5cGUsIHBvczogY2MuVmVjMywgYW5nbGU6IG51bWJlcik6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYXduKG5vZGVUeXBlLCBwb3MsIGFuZ2xlKSBhcyBUO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZXNwYXduKGNsb25lOiBQb29sTWVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQb29sKGNsb25lLnBvb2xUeXBlKS5kZXNwYXduKGNsb25lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IGxhbSBub3Qgc2F1XHJcbiAgICBzdGF0aWMgY29sbGVjdChub2RlVHlwZTogUG9vbFR5cGUpIHtcclxuICAgICAgICB0aGlzLmdldFBvb2wobm9kZVR5cGUpLmNvbGxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29sbGVjdEFsbCgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBQb29sIHtcclxuXHJcbiAgICBwcml2YXRlIHBhcmVudE5vZGU6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIHByZWZhYjogUG9vbE1lbWJlcjtcclxuICAgIHByaXZhdGUgbGlzdDogUG9vbE1lbWJlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIGdldCBwb29sVHlwZSgpOiBQb29sVHlwZXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmVmYWIucG9vbFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJlZmFiOiBQb29sTWVtYmVyLCBwYXJlbnROb2RlOiBjYy5Ob2RlLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZChwcmVmYWIsIHBhcmVudE5vZGUsIGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQocHJlZmFiOiBQb29sTWVtYmVyLCBwYXJlbnROb2RlOiBjYy5Ob2RlLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJlZmFiID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcilcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYi5ub2RlKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcik7XHJcbiAgICAgICAgICAgIGNsb25lLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5hZGRDaGlsZChjbG9uZS5ub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKGNsb25lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNwYXduKHBvczogY2MuVmVjMywgYW5nbGU6IG51bWJlcik6IFBvb2xNZW1iZXIge1xyXG4gICAgICAgIGxldCBjbG9uZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNsb25lID0gdGhpcy5saXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYi5ub2RlKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcik7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5hZGRDaGlsZChjbG9uZS5ub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsb25lLm5vZGUuc2V0V29ybGRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIGNsb25lLm5vZGUuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICBjbG9uZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBjbG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzcGF3bihjbG9uZTogUG9vbE1lbWJlcikge1xyXG4gICAgICAgIGlmKGNsb25lLm5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgY2xvbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goY2xvbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29sbGVjdCgpIHtcclxuICAgIH1cclxuXHJcbn0iXX0=