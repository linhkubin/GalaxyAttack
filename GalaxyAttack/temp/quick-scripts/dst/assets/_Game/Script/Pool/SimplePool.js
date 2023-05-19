
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
    SimplePool.link = new Map;
    SimplePool = __decorate([
        ccclass
    ], SimplePool);
    return SimplePool;
}());
exports.default = SimplePool;
var Pool = /** @class */ (function () {
    //TODO: test lai
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcU2ltcGxlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxRQU9YO0FBUEQsV0FBWSxRQUFRO0lBQ2hCLHVDQUFRLENBQUE7SUFDUiwrQ0FBWSxDQUFBO0lBQ1osK0NBQVksQ0FBQTtJQUNaLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osc0RBQWdCLENBQUE7QUFDcEIsQ0FBQyxFQVBXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBT25CO0FBR0Q7SUFBQTtJQWlEQSxDQUFDO0lBN0NHLFFBQVE7SUFDRCxvQkFBUyxHQUFoQixVQUFpQixRQUFtQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ0Qsa0JBQU8sR0FBZCxVQUFlLFFBQW1CLEVBQUUsSUFBVTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7SUFDRCxrQkFBTyxHQUFkLFVBQWUsUUFBbUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRWEsa0JBQU8sR0FBckIsVUFBc0IsTUFBa0IsRUFBRSxVQUFtQixFQUFFLE1BQWM7UUFFekUsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFF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Q0FBQyxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdCO2FBQU07WUFDSCxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXpCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxzQkFBTyxHQUFkLFVBQWUsS0FBaUI7UUFDNUIsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFFTCxDQUFDO0lBRUQsc0JBQU8sR0FBUDtJQUNBLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0F4REEsQUF3REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2xNZW1iZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFBvb2xUeXBlIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgQnVsbGV0XzEgPSAxLCBcclxuICAgIEJ1bGxldF8yID0gMixcclxuICAgIEVuZW15XzEgPSAxMCxcclxuICAgIEVuZW15XzIgPSAxMSxcclxuICAgIFZGWF9FeHBsb3JlID0gMTIsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZVBvb2wge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGxpbms6IE1hcDxQb29sVHlwZSwgUG9vbD4gPSBuZXcgTWFwPFBvb2xUeXBlLCBQb29sPjtcclxuXHJcbiAgICAvL2dldHRlclxyXG4gICAgc3RhdGljIGlzSGFzUG9vbChwb29sVHlwZSA6IFBvb2xUeXBlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGluay5oYXMocG9vbFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0dGVyXHJcbiAgICBzdGF0aWMgbmV3UG9vbChwb29sVHlwZSA6IFBvb2xUeXBlLCBwb29sOiBQb29sKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5saW5rLnNldChwb29sVHlwZSwgcG9vbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vc2V0dGVyXHJcbiAgICBzdGF0aWMgZ2V0UG9vbChwb29sVHlwZSA6IFBvb2xUeXBlKTogUG9vbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGluay5nZXQocG9vbFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJlbG9hZChwcmVmYWI6IFBvb2xNZW1iZXIsIHBhcmVudE5vZGU6IGNjLk5vZGUsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHBvb2wgPSBuZXcgUG9vbChwcmVmYWIsIHBhcmVudE5vZGUsIGFtb3VudCk7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNIYXNQb29sKHBvb2wucG9vbFR5cGUpKXtcclxuICAgICAgICAgICAgdGhpcy5uZXdQb29sKHBvb2wucG9vbFR5cGUsIHBvb2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3Bhd24obm9kZVR5cGU6IFBvb2xUeXBlLCBwb3M6IGNjLlZlYzMsIGFuZ2xlOiBudW1iZXIpOiBQb29sTWVtYmVyIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhub2RlVHlwZSk7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNIYXNQb29sKG5vZGVUeXBlKSkgY29uc29sZS5lcnJvcihcIiBORUVEIFBSRUxPQUQgUE9PTCA6IFwiICsgbm9kZVR5cGUgKyBcIiEhIVwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKG5vZGVUeXBlKS5zcGF3bihwb3MsIGFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3Bhd25UPFQ+KG5vZGVUeXBlOiBQb29sVHlwZSwgcG9zOiBjYy5WZWMzLCBhbmdsZTogbnVtYmVyKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bhd24obm9kZVR5cGUsIHBvcywgYW5nbGUpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlc3Bhd24oY2xvbmU6IFBvb2xNZW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdldFBvb2woY2xvbmUucG9vbFR5cGUpLmRlc3Bhd24oY2xvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVE9ETzogbGFtIG5vdCBzYXVcclxuICAgIHN0YXRpYyBjb2xsZWN0KG5vZGVUeXBlOiBQb29sVHlwZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0UG9vbChub2RlVHlwZSkuY29sbGVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb2xsZWN0QWxsKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFBvb2wge1xyXG5cclxuICAgIHByaXZhdGUgcGFyZW50Tm9kZTogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgcHJlZmFiOiBQb29sTWVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsaXN0OiBQb29sTWVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBvb2xUeXBlKCk6IFBvb2xUeXBle1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByZWZhYi5wb29sVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IHRlc3QgbGFpXHJcbiAgICBjb25zdHJ1Y3RvcihwcmVmYWI6IFBvb2xNZW1iZXIsIHBhcmVudE5vZGU6IGNjLk5vZGUsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcmVsb2FkKHByZWZhYiwgcGFyZW50Tm9kZSwgYW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZChwcmVmYWI6IFBvb2xNZW1iZXIsIHBhcmVudE5vZGU6IGNjLk5vZGUsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChQb29sTWVtYmVyKVxyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbG9uZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiLm5vZGUpLmdldENvbXBvbmVudChQb29sTWVtYmVyKTtcclxuICAgICAgICAgICAgY2xvbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFkZENoaWxkKGNsb25lLm5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goY2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3Bhd24ocG9zOiBjYy5WZWMzLCBhbmdsZTogbnVtYmVyKTogUG9vbE1lbWJlciB7XHJcbiAgICAgICAgbGV0IGNsb25lID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY2xvbmUgPSB0aGlzLmxpc3Quc2hpZnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbG9uZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiLm5vZGUpLmdldENvbXBvbmVudChQb29sTWVtYmVyKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFkZENoaWxkKGNsb25lLm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xvbmUubm9kZS5zZXRXb3JsZFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgY2xvbmUubm9kZS5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgIGNsb25lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNsb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXNwYXduKGNsb25lOiBQb29sTWVtYmVyKSB7XHJcbiAgICAgICAgaWYoY2xvbmUubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICBjbG9uZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaChjbG9uZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb2xsZWN0KCkge1xyXG4gICAgfVxyXG5cclxufSJdfQ==