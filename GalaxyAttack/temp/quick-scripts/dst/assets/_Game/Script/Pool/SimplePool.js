
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcU2ltcGxlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxRQU1YO0FBTkQsV0FBWSxRQUFRO0lBQ2hCLHVDQUFRLENBQUE7SUFDUiwrQ0FBWSxDQUFBO0lBQ1osK0NBQVksQ0FBQTtJQUNaLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0FBQ2hCLENBQUMsRUFOVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQU1uQjtBQUdEO0lBQUE7SUFnREEsQ0FBQztJQTVDRyxRQUFRO0lBQ0Qsb0JBQVMsR0FBaEIsVUFBaUIsUUFBbUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUTtJQUNELGtCQUFPLEdBQWQsVUFBZSxRQUFtQixFQUFFLElBQVU7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRO0lBQ0Qsa0JBQU8sR0FBZCxVQUFlLFFBQW1CO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVhLGtCQUFPLEdBQXJCLFVBQXNCLE1BQWtCLEVBQUUsVUFBbUIsRUFBRSxNQUFjO1FBRXpFLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxD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QUM7U0FDN0I7YUFBTTtZQUNILEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFekIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLHNCQUFPLEdBQWQsVUFBZSxLQUFpQjtRQUM1QixJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUVMLENBQUM7SUFFRCxzQkFBTyxHQUFQO0lBQ0EsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFBvb2xNZW1iZXIgZnJvbSBcIi4vUG9vbE1lbWJlclwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gUG9vbFR5cGUge1xyXG4gICAgTm9uZSA9IDAsXHJcbiAgICBCdWxsZXRfMSA9IDEsIFxyXG4gICAgQnVsbGV0XzIgPSAyLFxyXG4gICAgRW5lbXlfMSA9IDEwLFxyXG4gICAgRW5lbXlfMiA9IDExLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVQb29sIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaW5rOiBNYXA8UG9vbFR5cGUsIFBvb2w+ID0gbmV3IE1hcDxQb29sVHlwZSwgUG9vbD47XHJcblxyXG4gICAgLy9nZXR0ZXJcclxuICAgIHN0YXRpYyBpc0hhc1Bvb2wocG9vbFR5cGUgOiBQb29sVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmsuaGFzKHBvb2xUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHRlclxyXG4gICAgc3RhdGljIG5ld1Bvb2wocG9vbFR5cGUgOiBQb29sVHlwZSwgcG9vbDogUG9vbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5zZXQocG9vbFR5cGUsIHBvb2wpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3NldHRlclxyXG4gICAgc3RhdGljIGdldFBvb2wocG9vbFR5cGUgOiBQb29sVHlwZSk6IFBvb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmsuZ2V0KHBvb2xUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHByZWxvYWQocHJlZmFiOiBQb29sTWVtYmVyLCBwYXJlbnROb2RlOiBjYy5Ob2RlLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwb29sID0gbmV3IFBvb2wocHJlZmFiLCBwYXJlbnROb2RlLCBhbW91bnQpO1xyXG4gICAgICAgIGlmKCF0aGlzLmlzSGFzUG9vbChwb29sLnBvb2xUeXBlKSl7XHJcbiAgICAgICAgICAgIHRoaXMubmV3UG9vbChwb29sLnBvb2xUeXBlLCBwb29sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNwYXduKG5vZGVUeXBlOiBQb29sVHlwZSwgcG9zOiBjYy5WZWMzLCBhbmdsZTogbnVtYmVyKTogUG9vbE1lbWJlciB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNIYXNQb29sKG5vZGVUeXBlKSkgY29uc29sZS5lcnJvcihcIiBORUVEIFBSRUxPQUQgUE9PTCA6IFwiICsgbm9kZVR5cGUgKyBcIiEhIVwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb29sKG5vZGVUeXBlKS5zcGF3bihwb3MsIGFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3Bhd25UPFQ+KG5vZGVUeXBlOiBQb29sVHlwZSwgcG9zOiBjYy5WZWMzLCBhbmdsZTogbnVtYmVyKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Bhd24obm9kZVR5cGUsIHBvcywgYW5nbGUpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlc3Bhd24oY2xvbmU6IFBvb2xNZW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdldFBvb2woY2xvbmUucG9vbFR5cGUpLmRlc3Bhd24oY2xvbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVE9ETzogbGFtIG5vdCBzYXVcclxuICAgIHN0YXRpYyBjb2xsZWN0KG5vZGVUeXBlOiBQb29sVHlwZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0UG9vbChub2RlVHlwZSkuY29sbGVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb2xsZWN0QWxsKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFBvb2wge1xyXG5cclxuICAgIHByaXZhdGUgcGFyZW50Tm9kZTogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgcHJlZmFiOiBQb29sTWVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsaXN0OiBQb29sTWVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBvb2xUeXBlKCk6IFBvb2xUeXBle1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByZWZhYi5wb29sVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IHRlc3QgbGFpXHJcbiAgICBjb25zdHJ1Y3RvcihwcmVmYWI6IFBvb2xNZW1iZXIsIHBhcmVudE5vZGU6IGNjLk5vZGUsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcmVsb2FkKHByZWZhYiwgcGFyZW50Tm9kZSwgYW1vdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZChwcmVmYWI6IFBvb2xNZW1iZXIsIHBhcmVudE5vZGU6IGNjLk5vZGUsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcmVmYWIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChQb29sTWVtYmVyKVxyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjbG9uZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiLm5vZGUpLmdldENvbXBvbmVudChQb29sTWVtYmVyKTtcclxuICAgICAgICAgICAgY2xvbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFkZENoaWxkKGNsb25lLm5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goY2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3Bhd24ocG9zOiBjYy5WZWMzLCBhbmdsZTogbnVtYmVyKTogUG9vbE1lbWJlciB7XHJcbiAgICAgICAgbGV0IGNsb25lID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY2xvbmUgPSB0aGlzLmxpc3Quc2hpZnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbG9uZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiLm5vZGUpLmdldENvbXBvbmVudChQb29sTWVtYmVyKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmFkZENoaWxkKGNsb25lLm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xvbmUubm9kZS5zZXRXb3JsZFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgY2xvbmUubm9kZS5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgIGNsb25lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNsb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXNwYXduKGNsb25lOiBQb29sTWVtYmVyKSB7XHJcbiAgICAgICAgaWYoY2xvbmUubm9kZS5hY3RpdmUpe1xyXG4gICAgICAgICAgICBjbG9uZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaChjbG9uZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb2xsZWN0KCkge1xyXG4gICAgfVxyXG5cclxufSJdfQ==