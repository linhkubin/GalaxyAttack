
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcU2ltcGxlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2hCLHVDQUFRLENBQUE7SUFDUiwrQ0FBWSxDQUFBO0lBQ1osK0NBQVksQ0FBQTtBQUNoQixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFHRDtJQUFBO0lBZ0RBLENBQUM7SUE1Q0csUUFBUTtJQUNELG9CQUFTLEdBQWhCLFVBQWlCLFFBQW1CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFFBQVE7SUFDRCxrQkFBTyxHQUFkLFVBQWUsUUFBbUIsRUFBRSxJQUFVO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtJQUNELGtCQUFPLEdBQWQsVUFBZSxRQUFtQjtRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFYSxrQkFBTyxHQUFyQixVQUFzQixNQUFrQixFQUFFLFVBQW1CLEVBQUUsTUFBYztRQUV6RSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBRU0sZ0JBQUssR0FBWixVQUFhLFFBQWtCLEVBQUUsR0FBWSxFQUFFLEtBQWE7UUFDeEQsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDeEYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLGlCQUFNLEdBQWIsVUFBaUIsUUFBa0IsRUFBRSxHQUFZLEVBQUUsS0FBYTtRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQU0sQ0FBQztJQUNqRCxDQUFDO0lBRU0sa0JBQU8sR0FBZCxVQUFlLEtBQWlCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUJBQW1CO0lBQ1osa0JBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLHFCQUFVLEdBQWpCO0lBRUEsQ0FBQztJQTdDYyxlQUFJLEdBQXdCLElBQUksR0FBbUIsQ0FBQztJQUZsRCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBZ0Q5QjtJQUFELGlCQUFDO0NBaERELEFBZ0RDLElBQUE7a0JBaERvQixVQUFVO0FBbUQvQjtJQVVJLGdCQUFnQjtJQUNoQixjQUFZLE1BQWtCLEVBQUUsVUFBbUIsRUFBRSxNQUFjO1FBUDNELFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBUTVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBUEQsc0JBQVcsMEJBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBT00sc0JBQU8sR0FBZCxVQUFlLE1BQWtCLEVBQUUsVUFBbUIsRUFBRSxNQUFjO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFN0IsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7WUFDdEUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFTSxvQkFBSyxHQUFaLFVBQWEsR0FBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdCO2FBQU07WUFDSCxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXpCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxzQkFBTyxHQUFkLFVBQWUsS0FBaUI7UUFDNUIsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFFTCxDQUFDO0lBRUQsc0JBQU8sR0FBUDtJQUNBLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0F4REEsQUF3REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2xNZW1iZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFBvb2xUeXBlIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgQnVsbGV0XzEgPSAxLCBcclxuICAgIEJ1bGxldF8yID0gMixcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlUG9vbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGluazogTWFwPFBvb2xUeXBlLCBQb29sPiA9IG5ldyBNYXA8UG9vbFR5cGUsIFBvb2w+O1xyXG5cclxuICAgIC8vZ2V0dGVyXHJcbiAgICBzdGF0aWMgaXNIYXNQb29sKHBvb2xUeXBlIDogUG9vbFR5cGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saW5rLmhhcyhwb29sVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXR0ZXJcclxuICAgIHN0YXRpYyBuZXdQb29sKHBvb2xUeXBlIDogUG9vbFR5cGUsIHBvb2w6IFBvb2wpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxpbmsuc2V0KHBvb2xUeXBlLCBwb29sKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9zZXR0ZXJcclxuICAgIHN0YXRpYyBnZXRQb29sKHBvb2xUeXBlIDogUG9vbFR5cGUpOiBQb29sIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saW5rLmdldChwb29sVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmVsb2FkKHByZWZhYjogUG9vbE1lbWJlciwgcGFyZW50Tm9kZTogY2MuTm9kZSwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcG9vbCA9IG5ldyBQb29sKHByZWZhYiwgcGFyZW50Tm9kZSwgYW1vdW50KTtcclxuICAgICAgICBpZighdGhpcy5pc0hhc1Bvb2wocG9vbC5wb29sVHlwZSkpe1xyXG4gICAgICAgICAgICB0aGlzLm5ld1Bvb2wocG9vbC5wb29sVHlwZSwgcG9vbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzcGF3bihub2RlVHlwZTogUG9vbFR5cGUsIHBvczogY2MuVmVjMywgYW5nbGU6IG51bWJlcik6IFBvb2xNZW1iZXIge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzSGFzUG9vbChub2RlVHlwZSkpIGNvbnNvbGUuZXJyb3IoXCIgTkVFRCBQUkVMT0FEIFBPT0wgOiBcIiArIG5vZGVUeXBlICsgXCIhISFcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9vbChub2RlVHlwZSkuc3Bhd24ocG9zLCBhbmdsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNwYXduVDxUPihub2RlVHlwZTogUG9vbFR5cGUsIHBvczogY2MuVmVjMywgYW5nbGU6IG51bWJlcik6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwYXduKG5vZGVUeXBlLCBwb3MsIGFuZ2xlKSBhcyBUO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZXNwYXduKGNsb25lOiBQb29sTWVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQb29sKGNsb25lLnBvb2xUeXBlKS5kZXNwYXduKGNsb25lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IGxhbSBub3Qgc2F1XHJcbiAgICBzdGF0aWMgY29sbGVjdChub2RlVHlwZTogUG9vbFR5cGUpIHtcclxuICAgICAgICB0aGlzLmdldFBvb2wobm9kZVR5cGUpLmNvbGxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29sbGVjdEFsbCgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBQb29sIHtcclxuXHJcbiAgICBwcml2YXRlIHBhcmVudE5vZGU6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIHByZWZhYjogUG9vbE1lbWJlcjtcclxuICAgIHByaXZhdGUgbGlzdDogUG9vbE1lbWJlcltdID0gW107XHJcblxyXG4gICAgcHVibGljIGdldCBwb29sVHlwZSgpOiBQb29sVHlwZXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmVmYWIucG9vbFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UT0RPOiB0ZXN0IGxhaVxyXG4gICAgY29uc3RydWN0b3IocHJlZmFiOiBQb29sTWVtYmVyLCBwYXJlbnROb2RlOiBjYy5Ob2RlLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJlbG9hZChwcmVmYWIsIHBhcmVudE5vZGUsIGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQocHJlZmFiOiBQb29sTWVtYmVyLCBwYXJlbnROb2RlOiBjYy5Ob2RlLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJlZmFiID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcilcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYi5ub2RlKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcik7XHJcbiAgICAgICAgICAgIGNsb25lLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5hZGRDaGlsZChjbG9uZS5ub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKGNsb25lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNwYXduKHBvczogY2MuVmVjMywgYW5nbGU6IG51bWJlcik6IFBvb2xNZW1iZXIge1xyXG4gICAgICAgIGxldCBjbG9uZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNsb25lID0gdGhpcy5saXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xvbmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYi5ub2RlKS5nZXRDb21wb25lbnQoUG9vbE1lbWJlcik7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5hZGRDaGlsZChjbG9uZS5ub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsb25lLm5vZGUuc2V0V29ybGRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIGNsb25lLm5vZGUuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICBjbG9uZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBjbG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzcGF3bihjbG9uZTogUG9vbE1lbWJlcikge1xyXG4gICAgICAgIGlmKGNsb25lLm5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgY2xvbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goY2xvbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29sbGVjdCgpIHtcclxuICAgIH1cclxuXHJcbn0iXX0=