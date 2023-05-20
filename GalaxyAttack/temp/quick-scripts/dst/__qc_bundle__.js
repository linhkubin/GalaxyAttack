
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/_Game/Script/BGScroll');
require('./assets/_Game/Script/Booster');
require('./assets/_Game/Script/Bullet');
require('./assets/_Game/Script/Character');
require('./assets/_Game/Script/CollisionManager');
require('./assets/_Game/Script/Enemy');
require('./assets/_Game/Script/LevelManager');
require('./assets/_Game/Script/Pool/PoolControl');
require('./assets/_Game/Script/Pool/PoolMember');
require('./assets/_Game/Script/Pool/SimplePool');
require('./assets/_Game/Script/Ship');
require('./assets/_Game/Script/Utilities');
require('./assets/_Game/Script/VFX');
require('./assets/_Game/Script/ccExtension');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/CollisionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3ea4VV3ydKArVFKywZJaUP', 'CollisionManager');
// _Game/Script/CollisionManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CollisionManager = /** @class */ (function (_super) {
    __extends(CollisionManager, _super);
    function CollisionManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollisionManager.prototype.onLoad = function () {
        // Enable Collision System
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    };
    CollisionManager = __decorate([
        ccclass
    ], CollisionManager);
    return CollisionManager;
}(cc.Component));
exports.default = CollisionManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQ29sbGlzaW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDs7SUFTQSxDQUFDO0lBUEcsaUNBQU0sR0FBTjtRQUNJLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBUGdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBU3BDO0lBQUQsdUJBQUM7Q0FURCxBQVNDLENBVDZDLEVBQUUsQ0FBQyxTQUFTLEdBU3pEO2tCQVRvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbk1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBFbmFibGUgQ29sbGlzaW9uIFN5c3RlbVxyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcU2ltcGxlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7OztBQUVsRiwyQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxRQVNYO0FBVEQsV0FBWSxRQUFRO0lBQ2hCLHVDQUFRLENBQUE7SUFDUiwrQ0FBWSxDQUFBO0lBQ1osK0NBQVksQ0FBQTtJQUNaLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osc0RBQWdCLENBQUE7SUFDaEIsa0RBQWUsQ0FBQTtJQUNmLDhDQUFhLENBQUE7QUFDakIsQ0FBQyxFQVRXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBU25CO0FBR0Q7SUFBQTtJQWlEQSxDQUFDO0lBN0NHLFFBQVE7SUFDRCxvQkFBUyxHQUFoQixVQUFpQixRQUFtQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ0Qsa0JBQU8sR0FBZCxVQUFlLFFBQW1CLEVBQUUsSUFBVTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7SUFDRCxrQkFBTyxHQUFkLFVBQWUsUUFBbUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRWEsa0JBQU8sR0FBckIsVUFBc0IsTUFBa0IsRUFBRSxVQUFtQixFQUFFLE1BQWM7UUFFekUsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVNLGdCQUFLLEdBQVosVUFBYSxRQUFrQixFQUFFLEdBQVksRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFNBQWlCO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDeEYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLGlCQUFNLEdBQWIsVUFBaUIsUUFBa0IsRUFBRSxHQUFZLEVBQUUsS0FBYTtRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQU0sQ0FBQztJQUNqRCxDQUFDO0lBRU0sa0JBQU8sR0FBZCxVQUFlLEtBQWlCO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUJBQW1CO0lBQ1osa0JBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLHFCQUFVLEdBQWpCO0lBRUEsQ0FBQztJQTlDYyxlQUFJLEdBQXdCLElBQUksR0FBbUIsQ0FBQztJQUZsRCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBaUQ5QjtJQUFELGlCQUFDO0NBakRELEFBaURDLElBQUE7a0JBakRvQixVQUFVO0FBb0QvQjtJQVVJLGdCQUFnQjtJQUNoQixjQUFZLE1BQWtCLEVBQUUsVUFBbUIsRUFBRSxNQUFjO1FBUDNELFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBUTVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBUEQsc0JBQVcsMEJBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBT00sc0JBQU8sR0FBZCxVQUFlLE1BQWtCLEVBQUUsVUFBbUIsRUFBRSxNQUFjO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFN0IsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7WUFDdEUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFTSxvQkFBSyxHQUFaLFVBQWEsR0FBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzdCO2FBQU07WUFDSCxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXpCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxzQkFBTyxHQUFkLFVBQWUsS0FBaUI7UUFDNUIsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFFTCxDQUFDO0lBRUQsc0JBQU8sR0FBUDtJQUNBLENBQUM7SUFFTCxXQUFDO0FBQUQsQ0F4REEsQUF3REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2xNZW1iZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFBvb2xUeXBlIHtcclxuICAgIE5vbmUgPSAwLFxyXG4gICAgQnVsbGV0XzEgPSAxLCBcclxuICAgIEJ1bGxldF8yID0gMixcclxuICAgIEVuZW15XzEgPSAxMCxcclxuICAgIEVuZW15XzIgPSAxMSxcclxuICAgIFZGWF9FeHBsb3JlID0gMTIsXHJcbiAgICBWRlhfU3BhcmsgID0gMTMsXHJcbiAgICBCb29zdGVyICA9IDE0LFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVQb29sIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaW5rOiBNYXA8UG9vbFR5cGUsIFBvb2w+ID0gbmV3IE1hcDxQb29sVHlwZSwgUG9vbD47XHJcblxyXG4gICAgLy9nZXR0ZXJcclxuICAgIHN0YXRpYyBpc0hhc1Bvb2wocG9vbFR5cGUgOiBQb29sVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmsuaGFzKHBvb2xUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHRlclxyXG4gICAgc3RhdGljIG5ld1Bvb2wocG9vbFR5cGUgOiBQb29sVHlwZSwgcG9vbDogUG9vbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGluay5zZXQocG9vbFR5cGUsIHBvb2wpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3NldHRlclxyXG4gICAgc3RhdGljIGdldFBvb2wocG9vbFR5cGUgOiBQb29sVHlwZSk6IFBvb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmsuZ2V0KHBvb2xUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHByZWxvYWQocHJlZmFiOiBQb29sTWVtYmVyLCBwYXJlbnROb2RlOiBjYy5Ob2RlLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwb29sID0gbmV3IFBvb2wocHJlZmFiLCBwYXJlbnROb2RlLCBhbW91bnQpO1xyXG4gICAgICAgIGlmKCF0aGlzLmlzSGFzUG9vbChwb29sLnBvb2xUeXBlKSl7XHJcbiAgICAgICAgICAgIHRoaXMubmV3UG9vbChwb29sLnBvb2xUeXBlLCBwb29sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNwYXduKG5vZGVUeXBlOiBQb29sVHlwZSwgcG9zOiBjYy5WZWMzLCBhbmdsZTogbnVtYmVyID0gMCk6IFBvb2xNZW1iZXIge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGVUeXBlKTtcclxuICAgICAgICBpZighdGhpcy5pc0hhc1Bvb2wobm9kZVR5cGUpKSBjb25zb2xlLmVycm9yKFwiIE5FRUQgUFJFTE9BRCBQT09MIDogXCIgKyBub2RlVHlwZSArIFwiISEhXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvb2wobm9kZVR5cGUpLnNwYXduKHBvcywgYW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzcGF3blQ8VD4obm9kZVR5cGU6IFBvb2xUeXBlLCBwb3M6IGNjLlZlYzMsIGFuZ2xlOiBudW1iZXIpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGF3bihub2RlVHlwZSwgcG9zLCBhbmdsZSkgYXMgVDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVzcGF3bihjbG9uZTogUG9vbE1lbWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2V0UG9vbChjbG9uZS5wb29sVHlwZSkuZGVzcGF3bihjbG9uZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UT0RPOiBsYW0gbm90IHNhdVxyXG4gICAgc3RhdGljIGNvbGxlY3Qobm9kZVR5cGU6IFBvb2xUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQb29sKG5vZGVUeXBlKS5jb2xsZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbGxlY3RBbGwoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUG9vbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJlbnROb2RlOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBwcmVmYWI6IFBvb2xNZW1iZXI7XHJcbiAgICBwcml2YXRlIGxpc3Q6IFBvb2xNZW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgcG9vbFR5cGUoKTogUG9vbFR5cGV7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZmFiLnBvb2xUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVE9ETzogdGVzdCBsYWlcclxuICAgIGNvbnN0cnVjdG9yKHByZWZhYjogUG9vbE1lbWJlciwgcGFyZW50Tm9kZTogY2MuTm9kZSwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByZWxvYWQocHJlZmFiLCBwYXJlbnROb2RlLCBhbW91bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkKHByZWZhYjogUG9vbE1lbWJlciwgcGFyZW50Tm9kZTogY2MuTm9kZSwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByZWZhYiA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFBvb2xNZW1iZXIpXHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNsb25lID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIubm9kZSkuZ2V0Q29tcG9uZW50KFBvb2xNZW1iZXIpO1xyXG4gICAgICAgICAgICBjbG9uZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuYWRkQ2hpbGQoY2xvbmUubm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaChjbG9uZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzcGF3bihwb3M6IGNjLlZlYzMsIGFuZ2xlOiBudW1iZXIpOiBQb29sTWVtYmVyIHtcclxuICAgICAgICBsZXQgY2xvbmUgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjbG9uZSA9IHRoaXMubGlzdC5zaGlmdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsb25lID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIubm9kZSkuZ2V0Q29tcG9uZW50KFBvb2xNZW1iZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuYWRkQ2hpbGQoY2xvbmUubm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbG9uZS5ub2RlLnNldFdvcmxkUG9zaXRpb24ocG9zKTtcclxuICAgICAgICBjbG9uZS5ub2RlLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgY2xvbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Bhd24oY2xvbmU6IFBvb2xNZW1iZXIpIHtcclxuICAgICAgICBpZihjbG9uZS5ub2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIGNsb25lLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKGNsb25lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxlY3QoKSB7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/ccExtension.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c350hPJVZJPqrsoAKCJsNU', 'ccExtension');
// _Game/Script/ccExtension.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// Lấy giá trị world position của node
cc.Node.prototype.getWorldPosition = function () {
    //this ở đây là node luôn
    var worldPos = this.convertToWorldSpaceAR(cc.v3(0, 0, 0));
    return worldPos;
};
// Đặt giá trị world position cho node
cc.Node.prototype.setWorldPosition = function (worldPosition) {
    var _a;
    //this ở đây là node luôn
    var localPos = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.convertToNodeSpaceAR(worldPosition);
    this.position = localPos;
};
// Lấy giá trị local position của node
cc.Node.prototype.getLocalPosition = function (worldPosition) {
    var _a;
    //this ở đây là node luôn
    var localPosition = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.convertToNodeSpaceAR(worldPosition);
    return localPosition;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcY2NFeHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFXakYsc0NBQXNDO0FBQ3ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHO0lBQ2pDLHlCQUF5QjtJQUN6QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsc0NBQXNDO0FBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsYUFBc0I7O0lBQ2pFLHlCQUF5QjtJQUN6QixJQUFNLFFBQVEsU0FBRyxJQUFJLENBQUMsTUFBTSwwQ0FBRSxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM3QixDQUFDLENBQUM7QUFFRCxzQ0FBc0M7QUFDdkMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxhQUFzQjs7SUFDakUseUJBQXlCO0lBQ3pCLElBQU0sYUFBYSxTQUFHLElBQUksQ0FBQyxNQUFNLDBDQUFFLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU8sYUFBYSxDQUFDO0FBQ3pCLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbi8vIGV4dGVuc2lvbiB2aeG6v3QgZ2V0IHNldCB24buLdHLDrSB3b3JsZCBwb3N0aW9uIHRoYXkgdsOsIGxvY2FsIHBvc3Rpb25cclxuZGVjbGFyZSBtb2R1bGUgY2Mge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7XHJcbiAgICBnZXRXb3JsZFBvc2l0aW9uKCk6IGNjLlZlYzM7XHJcbiAgICBnZXRMb2NhbFBvc2l0aW9uKHBvczogY2MuVmVjMyk6IGNjLlZlYzM7XHJcbiAgICBzZXRXb3JsZFBvc2l0aW9uKHBvczogY2MuVmVjMyk6IHZvaWQ7XHJcbiAgfVxyXG59XHJcblxyXG4gLy8gTOG6pXkgZ2nDoSB0cuG7iyB3b3JsZCBwb3NpdGlvbiBj4bunYSBub2RlXHJcbmNjLk5vZGUucHJvdG90eXBlLmdldFdvcmxkUG9zaXRpb24gPSBmdW5jdGlvbiAoKTogY2MuVmVjMyB7XHJcbiAgICAvL3RoaXMg4bufIMSRw6J5IGzDoCBub2RlIGx1w7RuXHJcbiAgICBjb25zdCB3b3JsZFBvcyA9IHRoaXMuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgIHJldHVybiB3b3JsZFBvcztcclxufTtcclxuXHJcbi8vIMSQ4bq3dCBnacOhIHRy4buLIHdvcmxkIHBvc2l0aW9uIGNobyBub2RlXHJcbmNjLk5vZGUucHJvdG90eXBlLnNldFdvcmxkUG9zaXRpb24gPSBmdW5jdGlvbiAod29ybGRQb3NpdGlvbjogY2MuVmVjMykge1xyXG4gICAgLy90aGlzIOG7nyDEkcOieSBsw6Agbm9kZSBsdcO0blxyXG4gICAgY29uc3QgbG9jYWxQb3MgPSB0aGlzLnBhcmVudD8uY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3NpdGlvbik7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gbG9jYWxQb3M7XHJcbn07XHJcblxyXG4gLy8gTOG6pXkgZ2nDoSB0cuG7iyBsb2NhbCBwb3NpdGlvbiBj4bunYSBub2RlXHJcbmNjLk5vZGUucHJvdG90eXBlLmdldExvY2FsUG9zaXRpb24gPSBmdW5jdGlvbiAod29ybGRQb3NpdGlvbjogY2MuVmVjMyk6IGNjLlZlYzMge1xyXG4gICAgLy90aGlzIOG7nyDEkcOieSBsw6Agbm9kZSBsdcO0blxyXG4gICAgY29uc3QgbG9jYWxQb3NpdGlvbiA9IHRoaXMucGFyZW50Py5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvc2l0aW9uKTtcclxuICAgIHJldHVybiBsb2NhbFBvc2l0aW9uO1xyXG59O1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd581aEULKZLyoJxBrbPfh89', 'Bullet');
// _Game/Script/Bullet.ts

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
var Character_1 = require("./Character");
var PoolMember_1 = require("./Pool/PoolMember");
var SimplePool_1 = require("./Pool/SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 2000;
        _this.damage = 4;
        return _this;
    }
    Bullet.prototype.onInit = function (damage) {
        this.damage = damage;
    };
    Bullet.prototype.update = function (dt) {
        var velocity = this.node.up.mul(dt).mul(this.speed);
        var newPos = this.node.position.add(velocity);
        // move bullet forward with info of spawn point (pivot & rotation)
        this.node.setPosition(newPos);
        // despawn bullet if out of bound
        if (this.node.position.y >= 950) {
            // NodePool.getInstance().putNode(this.node);
            SimplePool_1.default.despawn(this);
        }
    };
    // Despawn bullet if col with enemy
    Bullet.prototype.onCollisionEnter = function (other, self) {
        //đoạn này k cần so sánh group name vì đã chia group contact rồi
        // if (other.node.group == 'enemy') {
        //TODO: test
        other.getComponent(Character_1.default).onHit(this.damage);
        SimplePool_1.default.spawn(SimplePool_1.PoolType.VFX_Spark, this.node.getWorldPosition());
        SimplePool_1.default.despawn(this);
        // }
    };
    __decorate([
        property
    ], Bullet.prototype, "speed", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(PoolMember_1.default));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHlDQUFvQztBQUNwQyxnREFBMkM7QUFDM0MsZ0RBQXlEO0FBRW5ELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFVO0lBQTlDO1FBQUEscUVBbUNDO1FBaENXLFdBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsWUFBTSxHQUFXLENBQUMsQ0FBQzs7SUErQi9CLENBQUM7SUE3QlUsdUJBQU0sR0FBYixVQUFjLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhELGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QixpQ0FBaUM7UUFDakMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO1lBQzdCLDZDQUE2QztZQUM3QyxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCxtQ0FBbUM7SUFDbkMsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDbEQsZ0VBQWdFO1FBQ2hFLHFDQUFxQztRQUNyQyxZQUFZO1FBQ1osS0FBSyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxvQkFBVSxDQUFDLEtBQUssQ0FBQyxxQkFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUNuRSxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJO0lBQ1IsQ0FBQztJQTlCRDtRQURDLFFBQVE7eUNBQ29CO0lBSFosTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQW1DMUI7SUFBRCxhQUFDO0NBbkNELEFBbUNDLENBbkNtQyxvQkFBVSxHQW1DN0M7a0JBbkNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9DaGFyYWN0ZXJcIjtcclxuaW1wb3J0IFBvb2xNZW1iZXIgZnJvbSBcIi4vUG9vbC9Qb29sTWVtYmVyXCI7XHJcbmltcG9ydCBTaW1wbGVQb29sLCB7IFBvb2xUeXBlIH0gZnJvbSBcIi4vUG9vbC9TaW1wbGVQb29sXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBvb2xNZW1iZXIge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gMjAwMDtcclxuICAgIHByaXZhdGUgZGFtYWdlOiBudW1iZXIgPSA0O1xyXG5cclxuICAgIHB1YmxpYyBvbkluaXQoZGFtYWdlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gdGhpcy5ub2RlLnVwLm11bChkdCkubXVsKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIGNvbnN0IG5ld1BvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQodmVsb2NpdHkpO1xyXG5cclxuICAgICAgICAvLyBtb3ZlIGJ1bGxldCBmb3J3YXJkIHdpdGggaW5mbyBvZiBzcGF3biBwb2ludCAocGl2b3QgJiByb3RhdGlvbilcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obmV3UG9zKTtcclxuXHJcbiAgICAgICAgLy8gZGVzcGF3biBidWxsZXQgaWYgb3V0IG9mIGJvdW5kXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wb3NpdGlvbi55ID49IDk1MCkge1xyXG4gICAgICAgICAgICAvLyBOb2RlUG9vbC5nZXRJbnN0YW5jZSgpLnB1dE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXNwYXduIGJ1bGxldCBpZiBjb2wgd2l0aCBlbmVteVxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcbiAgICAgICAgLy/EkW/huqFuIG7DoHkgayBj4bqnbiBzbyBzw6FuaCBncm91cCBuYW1lIHbDrCDEkcOjIGNoaWEgZ3JvdXAgY29udGFjdCBy4buTaVxyXG4gICAgICAgIC8vIGlmIChvdGhlci5ub2RlLmdyb3VwID09ICdlbmVteScpIHtcclxuICAgICAgICAvL1RPRE86IHRlc3RcclxuICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoQ2hhcmFjdGVyKS5vbkhpdCh0aGlzLmRhbWFnZSk7XHJcbiAgICAgICAgU2ltcGxlUG9vbC5zcGF3bihQb29sVHlwZS5WRlhfU3BhcmssIHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIFNpbXBsZVBvb2wuZGVzcGF3bih0aGlzKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f5a32QkdpE/pa75V2ZRKSA', 'Enemy');
// _Game/Script/Enemy.ts

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
var Character_1 = require("./Character");
var LevelManager_1 = require("./LevelManager");
var SimplePool_1 = require("./Pool/SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //nhận damage
    Enemy.prototype.onHit = function (damage) {
        _super.prototype.onHit.call(this, damage);
        // console.log("hit");
    };
    //enemy death sẽ đưa nó về pool
    Enemy.prototype.onDeath = function () {
        // super.onDeath();
        LevelManager_1.default.Ins.onEnemyDeath(this);
        SimplePool_1.default.spawn(SimplePool_1.PoolType.VFX_Explore, this.node.getWorldPosition(), 0);
        SimplePool_1.default.despawn(this);
    };
    //hàm di chuyển sang vị trí mới
    Enemy.prototype.moveTo = function (target, duration, isWorldSpace) {
        // Lấy vị trí target position của node
        var targetPosition = isWorldSpace ? this.node.getLocalPosition(target) : target;
        // Tạo một tween để di chuyển node từ vị trí hiện tại đến vị trí mới (position)
        cc.tween(this.node)
            .to(duration, { position: targetPosition }, { easing: "linear", })
            .start();
    };
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(Character_1.default));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcRW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUMxQyxnREFBeUQ7QUFFbkQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVM7SUFBNUM7O0lBOEJBLENBQUM7SUE1QkcsYUFBYTtJQUNOLHFCQUFLLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLGlCQUFNLEtBQUssWUFBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixzQkFBc0I7SUFDMUIsQ0FBQztJQUVELCtCQUErQjtJQUNyQix1QkFBTyxHQUFqQjtRQUNJLG1CQUFtQjtRQUNuQixzQkFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsb0JBQVUsQ0FBQyxLQUFLLENBQUMscUJBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLG9CQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQkFBK0I7SUFDeEIsc0JBQU0sR0FBYixVQUFjLE1BQWUsRUFBRSxRQUFnQixFQUFFLFlBQXFCO1FBQ2xFLHNDQUFzQztRQUN0QyxJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVsRiwrRUFBK0U7UUFDL0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLFFBQVEsRUFDUixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsRUFDNUIsRUFBSSxNQUFNLEVBQUUsUUFBUSxHQUFHLENBQ3RCO2FBQ0osS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQTVCZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQThCekI7SUFBRCxZQUFDO0NBOUJELEFBOEJDLENBOUJrQyxtQkFBUyxHQThCM0M7a0JBOUJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IENoYXJhY3RlciBmcm9tIFwiLi9DaGFyYWN0ZXJcIjtcclxuaW1wb3J0IExldmVsTWFuYWdlciBmcm9tIFwiLi9MZXZlbE1hbmFnZXJcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBDaGFyYWN0ZXIge1xyXG5cclxuICAgIC8vbmjhuq1uIGRhbWFnZVxyXG4gICAgcHVibGljIG9uSGl0KGRhbWFnZTogbnVtYmVyKXtcclxuICAgICAgICBzdXBlci5vbkhpdChkYW1hZ2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0XCIpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAvL2VuZW15IGRlYXRoIHPhur0gxJHGsGEgbsOzIHbhu4EgcG9vbFxyXG4gICAgcHJvdGVjdGVkIG9uRGVhdGgoKXtcclxuICAgICAgICAvLyBzdXBlci5vbkRlYXRoKCk7XHJcbiAgICAgICAgTGV2ZWxNYW5hZ2VyLklucy5vbkVuZW15RGVhdGgodGhpcyk7XHJcbiAgICAgICAgU2ltcGxlUG9vbC5zcGF3bihQb29sVHlwZS5WRlhfRXhwbG9yZSwgdGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgMCk7XHJcbiAgICAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaMOgbSBkaSBjaHV54buDbiBzYW5nIHbhu4sgdHLDrSBt4bubaVxyXG4gICAgcHVibGljIG1vdmVUbyh0YXJnZXQ6IGNjLlZlYzMsIGR1cmF0aW9uOiBudW1iZXIsIGlzV29ybGRTcGFjZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIEzhuqV5IHbhu4sgdHLDrSB0YXJnZXQgcG9zaXRpb24gY+G7p2Egbm9kZVxyXG4gICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gaXNXb3JsZFNwYWNlID8gdGhpcy5ub2RlLmdldExvY2FsUG9zaXRpb24odGFyZ2V0KSA6IHRhcmdldDtcclxuXHJcbiAgICAgICAgLy8gVOG6oW8gbeG7mXQgdHdlZW4gxJHhu4MgZGkgY2h1eeG7g24gbm9kZSB04burIHbhu4sgdHLDrSBoaeG7h24gdOG6oWkgxJHhur9uIHbhu4sgdHLDrSBt4bubaSAocG9zaXRpb24pXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgeyBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSxcclxuICAgICAgICAgICAgICAgIHsgICBlYXNpbmc6IFwibGluZWFyXCIsIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/LevelManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dafbF1IDRAvbIoBVoZ+QEg', 'LevelManager');
// _Game/Script/LevelManager.ts

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
var Ship_1 = require("./Ship");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelManager = /** @class */ (function (_super) {
    __extends(LevelManager, _super);
    function LevelManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //
        _this.ship = null;
        _this.list = [];
        _this.stage_1 = [];
        return _this;
    }
    LevelManager_1 = LevelManager;
    Object.defineProperty(LevelManager, "Ins", {
        get: function () {
            return LevelManager_1.ins;
        },
        enumerable: false,
        configurable: true
    });
    LevelManager.prototype.onLoad = function () {
        LevelManager_1.ins = this;
    };
    LevelManager.prototype.start = function () {
        for (var i = 0; i < this.stage_1.length; i++) {
            var e = SimplePool_1.default.spawnT(SimplePool_1.PoolType.Enemy_1, this.stage_1[i].getWorldPosition().add(cc.Vec3.UP.mul(1000)), 0);
            e.moveTo(this.stage_1[i].getWorldPosition(), 1, true);
            this.list.push(e);
            e.onInit(40);
        }
    };
    LevelManager.prototype.onLoadStage = function (stage) {
    };
    LevelManager.prototype.onEnemyDeath = function (c) {
        var index = this.list.indexOf(c);
        if (index != -1) {
            this.list.splice(index, 1);
        }
        console.log(this.list.length);
        if (this.list.length == 0) {
            console.log("Done");
        }
    };
    var LevelManager_1;
    __decorate([
        property(Ship_1.default)
    ], LevelManager.prototype, "ship", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "stage_1", void 0);
    LevelManager = LevelManager_1 = __decorate([
        ccclass
    ], LevelManager);
    return LevelManager;
}(cc.Component));
exports.default = LevelManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcTGV2ZWxNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxGLGdEQUF5RDtBQUN6RCwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFnREM7UUFwQ0UsRUFBRTtRQUdLLFVBQUksR0FBUyxJQUFJLENBQUM7UUFFakIsVUFBSSxHQUFnQixFQUFFLENBQUM7UUFHeEIsYUFBTyxHQUFjLEVBQUUsQ0FBQzs7SUE0QmxDLENBQUM7cUJBaERvQixZQUFZO0lBSTlCLHNCQUFrQixtQkFBRzthQUFyQjtZQUVHLE9BQU8sY0FBWSxDQUFDLEdBQUcsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVTLDZCQUFNLEdBQWhCO1FBQ0csY0FBWSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQVdTLDRCQUFLLEdBQWY7UUFDRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQVEscUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwSCxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmO0lBQ0osQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLEtBQWM7SUFFakMsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLENBQVk7UUFFN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0IsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QjtJQUNKLENBQUM7O0lBL0JEO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQzs4Q0FDVTtJQUt6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNhO0lBcEJiLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FnRGhDO0lBQUQsbUJBQUM7Q0FoREQsQUFnREMsQ0FoRHlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RyRDtrQkFoRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4vRW5lbXlcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgLy8gc2luZ2xldG9uXHJcbiAgIHByaXZhdGUgc3RhdGljIGlucyA6IExldmVsTWFuYWdlcjtcclxuICAgcHVibGljIHN0YXRpYyBnZXQgSW5zKCkgOiBMZXZlbE1hbmFnZXJcclxuICAge1xyXG4gICAgICByZXR1cm4gTGV2ZWxNYW5hZ2VyLmlucztcclxuICAgfVxyXG5cclxuICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgTGV2ZWxNYW5hZ2VyLmlucyA9IHRoaXM7XHJcbiAgIH1cclxuICAgLy9cclxuXHJcbiAgIEBwcm9wZXJ0eShTaGlwKVxyXG4gICBwdWJsaWMgc2hpcDogU2hpcCA9IG51bGw7XHJcblxyXG4gICBwcml2YXRlIGxpc3Q6IENoYXJhY3RlcltdID0gW107XHJcblxyXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgcHVibGljIHN0YWdlXzE6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICBcclxuICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhZ2VfMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgZSA9IFNpbXBsZVBvb2wuc3Bhd25UPEVuZW15PihQb29sVHlwZS5FbmVteV8xLCB0aGlzLnN0YWdlXzFbaV0uZ2V0V29ybGRQb3NpdGlvbigpLmFkZChjYy5WZWMzLlVQLm11bCgxMDAwKSksIDApO1xyXG4gICAgICAgICBlLm1vdmVUbyh0aGlzLnN0YWdlXzFbaV0uZ2V0V29ybGRQb3NpdGlvbigpLCAxLCB0cnVlKTtcclxuICAgICAgICAgdGhpcy5saXN0LnB1c2goZSk7XHJcbiAgICAgICAgIGUub25Jbml0KDQwKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb25Mb2FkU3RhZ2Uoc3RhZ2UgOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBvbkVuZW15RGVhdGgoYzogQ2hhcmFjdGVyKTogdm9pZHtcclxuXHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMubGlzdC5pbmRleE9mKGMpO1xyXG4gICAgICBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coIHRoaXMubGlzdC5sZW5ndGgpO1xyXG5cclxuICAgICAgaWYodGhpcy5saXN0Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJEb25lXCIpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
        // @property({
        //     type: [PoolAmount],
        //     displayName: "Custom Objects",
        //     serializable: true,
        // })
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
        property([PoolAmount])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcUG9vbENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLDJDQUFvRDtBQUU5QyxJQUFBLEtBQWlDLEVBQUUsQ0FBQyxVQUFVLEVBQTdDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLFNBQVMsZUFBaUIsQ0FBQztBQUdyRDtJQUFBO1FBRVcsU0FBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFNLEdBQWUsSUFBSSxDQUFDO1FBRzFCLFdBQU0sR0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDYTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzhDQUNLO0lBUmpCLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FTdEI7SUFBRCxpQkFBQztDQVRELEFBU0MsSUFBQTtBQVRZLGdDQUFVO0FBWXZCO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNENDO1FBMUNHLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIscUNBQXFDO1FBQ3JDLDBCQUEwQjtRQUMxQixLQUFLO1FBRUUsV0FBSyxHQUFpQixFQUFFLENBQUM7O0lBb0NwQyxDQUFDO0lBbENHLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFFcEMsNEJBQU0sR0FBTjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN2QyxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RGO1FBRUQscUVBQXFFO1FBQ3JFLCtCQUErQjtRQUMvQixvQ0FBb0M7UUFDcEMseUJBQXlCO1FBRXpCLG9DQUFvQztRQUNwQyx5Q0FBeUM7UUFFekMsaURBQWlEO1FBRWpELHFDQUFxQztRQUNyQywrQ0FBK0M7UUFFL0Msc0VBQXNFO1FBR3RFLGtDQUFrQztRQUVsQyxvRUFBb0U7UUFDcEUsbUVBQW1FO1FBRW5FLDhCQUE4QjtJQUdsQyxDQUFDO0lBbENEO1FBREMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7OENBQ1M7SUFSZixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNEMvQjtJQUFELGtCQUFDO0NBNUNELEFBNENDLENBNUN3QyxFQUFFLENBQUMsU0FBUyxHQTRDcEQ7a0JBNUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFBvb2xNZW1iZXIgZnJvbSBcIi4vUG9vbE1lbWJlclwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCwgeyBQb29sVHlwZSB9IGZyb20gXCIuL1NpbXBsZVBvb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSwgaW5zcGVjdG9yfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgUG9vbEFtb3VudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyByb290OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHVibGljIHByZWZhYjogUG9vbE1lbWJlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgYW1vdW50OiBudW1iZXIgPSAwO1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb29sQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KHtcclxuICAgIC8vICAgICB0eXBlOiBbUG9vbEFtb3VudF0sXHJcbiAgICAvLyAgICAgZGlzcGxheU5hbWU6IFwiQ3VzdG9tIE9iamVjdHNcIixcclxuICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsXHJcbiAgICAvLyB9KVxyXG4gICAgQHByb3BlcnR5KFtQb29sQW1vdW50XSlcclxuICAgIHB1YmxpYyBwb29sczogUG9vbEFtb3VudFtdID0gW107XHJcblxyXG4gICAgLy8gQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIC8vIHB1YmxpYyBwcmVmYWI6IFBvb2xNZW1iZXIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvb2xzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgU2ltcGxlUG9vbC5wcmVsb2FkKHRoaXMucG9vbHNbaV0ucHJlZmFiLCB0aGlzLnBvb2xzW2ldLnJvb3QsIHRoaXMucG9vbHNbaV0uYW1vdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxldCBtZW1iZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYikuZ2V0Q29tcG9uZW50KFBvb2xNZW1iZXIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbWJlciAhPSBudWxsKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZW1iZXIubm9kZSAhPSBudWxsKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZW1iZXIuaSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gbWVtYmVyLm5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gbWVtYmVyLm5vZGUuc2V0UG9zaXRpb24oY2MudjMoMCwwLDApKTtcclxuXHJcbiAgICAgICAgLy8gU2ltcGxlUG9vbC5wcmVsb2FkKHRoaXMucHJlZmFiLCB0aGlzLm5vZGUsIDIpO1xyXG5cclxuICAgICAgICAvLyBCdWxsZXRfSW5mby5ub2RlLnNldFBvc2l0aW9uKFBvcyk7XHJcbiAgICAgICAgLy8gQnVsbGV0X0luZm8ubm9kZS5zZXRQYXJlbnQodGhpcy5CdWxsZXRIb2xkKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IG1lbWJlciA9IFNpbXBsZVBvb2wuc3Bhd24oUG9vbFR5cGUuQnVsbGV0XzEsIGNjLnYzKDAsMCwwKSwgOTApO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lbWJlci5ub2RlLmFuZ2xlKTtcclxuXHJcbiAgICAgICAgLy8gU2ltcGxlUG9vbC5zcGF3bihQb29sVHlwZS5CdWxsZXRfMSwgY2MudjMoMTAwLDAsMCksIDE4MCkuaSA9IDEwMDtcclxuICAgICAgICAvLyBTaW1wbGVQb29sLnNwYXduKFBvb2xUeXBlLkJ1bGxldF8xLCBjYy52MygyMDAsMCwwKSwgMzApLmkgPSAxMDA7XHJcblxyXG4gICAgICAgIC8vIFNpbXBsZVBvb2wuZGVzcGF3bihtZW1iZXIpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Character.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb241ucKy5GSYBvAHYdm57I', 'Character');
// _Game/Script/Character.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Character.prototype, "isDead", {
        //khai bao action
        // public onDeathAction: (c:Character) => void;
        //getter
        get: function () {
            return this.hp <= 0;
        },
        enumerable: false,
        configurable: true
    });
    //khởi tạo
    Character.prototype.onInit = function (hp) {
        this.hp = hp;
    };
    //nhận damage
    Character.prototype.onHit = function (damage) {
        if (!this.isDead) {
            this.hp -= damage;
            if (this.isDead) {
                this.onDeath();
            }
        }
    };
    Character.prototype.onDeath = function () {
        // this.onDeathAction(this);
    };
    Character = __decorate([
        ccclass
    ], Character);
    return Character;
}(PoolMember_1.default));
exports.default = Character;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQ2hhcmFjdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBVTtJQUFqRDs7SUF1Q0EsQ0FBQztJQS9CRyxzQkFBSSw2QkFBTTtRQUpWLGlCQUFpQjtRQUNqQiwrQ0FBK0M7UUFFL0MsUUFBUTthQUNSO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELFVBQVU7SUFDSCwwQkFBTSxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYTtJQUNOLHlCQUFLLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ1osSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUM7WUFDbEIsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUNYLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtTQUNKO0lBQ0wsQ0FBQztJQUVTLDJCQUFPLEdBQWpCO1FBQ0ksNEJBQTRCO0lBQ2hDLENBQUM7SUE3QmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1QzdCO0lBQUQsZ0JBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q3NDLG9CQUFVLEdBdUNoRDtrQkF2Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgUG9vbE1lbWJlciBmcm9tIFwiLi9Qb29sL1Bvb2xNZW1iZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgUG9vbE1lbWJlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBocCA6IG51bWJlcjtcclxuXHJcbiAgICAvL2toYWkgYmFvIGFjdGlvblxyXG4gICAgLy8gcHVibGljIG9uRGVhdGhBY3Rpb246IChjOkNoYXJhY3RlcikgPT4gdm9pZDtcclxuXHJcbiAgICAvL2dldHRlclxyXG4gICAgZ2V0IGlzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ocCA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8va2jhu59pIHThuqFvXHJcbiAgICBwdWJsaWMgb25Jbml0KGhwOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaHAgPSBocDtcclxuICAgIH1cclxuXHJcbiAgICAvL25o4bqtbiBkYW1hZ2VcclxuICAgIHB1YmxpYyBvbkhpdChkYW1hZ2U6IG51bWJlcil7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNEZWFkKXtcclxuICAgICAgICAgICAgdGhpcy5ocCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNEZWFkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EZWF0aCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlYXRoKCl7XHJcbiAgICAgICAgLy8gdGhpcy5vbkRlYXRoQWN0aW9uKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vdGVzdFxyXG4gICAgLy8gcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgIC8vICAgICB0aGlzLm9uRGVhdGhBY3Rpb24gPSB0aGlzLm9uRW5lbXlEZWF0aDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgb25FbmVteURlYXRoKGUgOiBDaGFyYWN0ZXIpOiB2b2lke1xyXG5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
        _this.screen = new cc.Vec2(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
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
        //moi 0.5s bắn 1 lần
        if (this.timer <= 0) {
            this.timer = 0.5;
            this.shoot();
        }
        this.timer -= dt;
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
    Ship.prototype.onStart = function () {
    };
    Ship.prototype.onFinish = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcU2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixnREFBeUQ7QUFDekQseUNBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBdUdDO1FBaEdRLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBTy9CLG9CQUFjLEdBQWMsRUFBRSxDQUFDO1FBRXRDLG1CQUFtQjtRQUNYLGtCQUFZLEdBQWUsRUFBRSxDQUFDO1FBSzlCLFlBQU0sR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQThDdkcsZ0NBQWdDO1FBRXhCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBaUM1QixDQUFDO0lBNUVDLHFCQUFNLEdBQU47UUFDRSxtQ0FBbUM7UUFDbkMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzFDLENBQUM7SUFHRCx3QkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELE1BQU07SUFFTixrQkFBa0I7SUFDViwyQkFBWSxHQUFwQixVQUFxQixLQUEwQjtRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsaUJBQWlCO0lBQ1QsMkJBQVksR0FBcEIsVUFBcUIsS0FBMEI7UUFDN0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw0QkFBNEI7SUFDcEIsNEJBQWEsR0FBckIsVUFBc0IsS0FBMEI7UUFDOUMsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQU1ELHFCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2Ysb0JBQW9CO1FBQ3BCLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sb0JBQUssR0FBYjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxvQkFBVSxDQUFDLEtBQUssQ0FBQyxxQkFBUSxDQUFDLFFBQVEsRUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakk7SUFDSCxDQUFDO0lBRU0sd0JBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDMUMsQ0FBQztJQUVNLHVCQUFRLEdBQWY7SUFFQSxDQUFDO0lBRU0sc0JBQU8sR0FBZDtJQUVBLENBQUM7SUFFTSx1QkFBUSxHQUFmO0lBRUEsQ0FBQztJQS9GRDtRQUxDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLEVBQUUsZ0JBQWdCO1NBQzFCLENBQUM7Z0RBRW9DO0lBT3RDO1FBTEMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLE9BQU8sRUFBRSxnQkFBZ0I7U0FDMUIsQ0FBQztnREFFb0M7SUFkbkIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXVHeEI7SUFBRCxXQUFDO0NBdkdELEFBdUdDLENBdkdpQyxFQUFFLENBQUMsU0FBUyxHQXVHN0M7a0JBdkdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEJ1bGxldCBmcm9tIFwiLi9CdWxsZXRcIjtcclxuaW1wb3J0IFNpbXBsZVBvb2wsIHsgUG9vbFR5cGUgfSBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KHtcclxuICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgIHRvb2x0aXA6ICdidWxsZXRQb2ludHNfMSdcclxuICB9KVxyXG4gIC8vbGlzdCDEkeG6oW4gYmFuIMSR4bqndVxyXG4gIHB1YmxpYyBidWxsZXRQb2ludHNfMTogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIEBwcm9wZXJ0eSh7XHJcbiAgICB0eXBlOiBbY2MuTm9kZV0sXHJcbiAgICB0b29sdGlwOiAnYnVsbGV0UG9pbnRzXzInXHJcbiAgfSlcclxuICAvL2xpc3QgxJHhuqFuIHNhdSBraGkgbGV2ZWwgdXBcclxuICBwdWJsaWMgYnVsbGV0UG9pbnRzXzI6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAvL2xpc3QgxJHhuqFuIGLhuq9uIHJhICBcclxuICBwcml2YXRlIGJ1bGxldFBvaW50cyA6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAvLyBwcml2YXRlIHBsYXllcjogY2MuTm9kZTtcclxuICBwcml2YXRlIHRvdWNoT2Zmc2V0OiBjYy5WZWMyO1xyXG5cclxuICBwcml2YXRlIHNjcmVlbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS53aWR0aCwgY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodCk7XHJcbiAgcHJpdmF0ZSBjbGFtcEhvcml6b246IGNjLlZlYzI7Ly8gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi54KTtcclxuICBwcml2YXRlIGNsYW1wVmVydGljYWw6IGNjLlZlYzI7Ly8gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi55KTtcclxuICBcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gdGhpcy5wbGF5ZXIgPSBjYy5maW5kKCdwbGF5ZXInKTtcclxuICAgIC8vc2V0IHVwIG1vdmUgb2JqZWN0XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5zY3JlZW4gPSBuZXcgY2MuVmVjMihjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGgsIGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQpO1xyXG4gICAgdGhpcy5jbGFtcEhvcml6b24gPSBuZXcgY2MuVmVjMigtMC41LCAwLjUpLm11bCh0aGlzLnNjcmVlbi54KTtcclxuICAgIHRoaXMuY2xhbXBWZXJ0aWNhbCA9IG5ldyBjYy5WZWMyKC0wLjUsIDAuNSkubXVsKHRoaXMuc2NyZWVuLnkpO1xyXG5cclxuICAgIHRoaXMuYnVsbGV0UG9pbnRzID0gdGhpcy5idWxsZXRQb2ludHNfMTtcclxuICB9XHJcblxyXG4gIFxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZWQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy9Nb3ZlXHJcblxyXG4gIC8vYmF0IGRhdSBhbiB4dW9uZ1xyXG4gIHByaXZhdGUgb25Ub3VjaEJlZ2FuKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKS8qOiBib29sZWFuKi8ge1xyXG4gICAgdGhpcy50b3VjaE9mZnNldCA9IFV0aWxpdGllcy52ZWMzVG9WZWMyKHRoaXMubm9kZS5wb3NpdGlvbikuc3VidHJhY3QodGhpcy5nZXRNb3VzZVBvaW50KGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICAvL2RpIGNodXllbiBjaHVvdFxyXG4gIHByaXZhdGUgb25Ub3VjaE1vdmVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICBjb25zdCBuZXdQb3MgPSB0aGlzLmdldE1vdXNlUG9pbnQoZXZlbnQpLmFkZCh0aGlzLnRvdWNoT2Zmc2V0KTtcclxuXHJcbiAgICBuZXdQb3MueCA9IGNjLm1pc2MuY2xhbXBmKG5ld1Bvcy54LCB0aGlzLmNsYW1wSG9yaXpvbi54LCB0aGlzLmNsYW1wSG9yaXpvbi55KTtcclxuICAgIG5ld1Bvcy55ID0gY2MubWlzYy5jbGFtcGYobmV3UG9zLnksIHRoaXMuY2xhbXBWZXJ0aWNhbC54LCB0aGlzLmNsYW1wVmVydGljYWwueSk7XHJcbiAgICBcclxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IFV0aWxpdGllcy52ZWMyVG9WZWMzKG5ld1Bvcyk7XHJcbiAgfVxyXG5cclxuICAvL2xheSB2aSB0cmkgY2h1b3QgYmFtIHh1b25nXHJcbiAgcHJpdmF0ZSBnZXRNb3VzZVBvaW50KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKTogY2MuVmVjMntcclxuICAgIHJldHVybiBldmVudC5nZXRMb2NhdGlvbigpLnN1YihjYy52Mih0aGlzLnNjcmVlbi54ICogMC41LCB0aGlzLnNjcmVlbi55ICogMC41KSk7XHJcbiAgfVxyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgLy9tb2kgMC41cyBi4bqvbiAxIGzhuqduXHJcbiAgICBpZih0aGlzLnRpbWVyIDw9IDApe1xyXG4gICAgICB0aGlzLnRpbWVyID0gMC41O1xyXG4gICAgICB0aGlzLnNob290KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lciAtPSBkdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvb3QoKXtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWxsZXRQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgKFNpbXBsZVBvb2wuc3Bhd24oUG9vbFR5cGUuQnVsbGV0XzEsICB0aGlzLmJ1bGxldFBvaW50c1tpXS5nZXRXb3JsZFBvc2l0aW9uKCksdGhpcy5idWxsZXRQb2ludHNbaV0uYW5nbGUpIGFzIEJ1bGxldCkub25Jbml0KDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBvd2VyVXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1bGxldFBvaW50cyA9IHRoaXMuYnVsbGV0UG9pbnRzXzI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TaGllbGQoKTogdm9pZCB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblN0YXJ0KCk6IHZvaWQge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25GaW5pc2goKTogdm9pZCB7XHJcbiAgICBcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Pool/PoolMember.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4d12mgJHNHHbhShPyOuGl5', 'PoolMember');
// _Game/Script/Pool/PoolMember.ts

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
var SimplePool_1 = require("./SimplePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PoolMember = /** @class */ (function (_super) {
    __extends(PoolMember, _super);
    function PoolMember() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.poolType = SimplePool_1.PoolType.None;
        _this.i = 10;
        return _this;
    }
    __decorate([
        property({ type: cc.Enum(SimplePool_1.PoolType) })
    ], PoolMember.prototype, "poolType", void 0);
    PoolMember = __decorate([
        ccclass
    ], PoolMember);
    return PoolMember;
}(cc.Component));
exports.default = PoolMember;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcUG9vbFxcUG9vbE1lbWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRiwyQ0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFLQztRQUhVLGNBQVEsR0FBYSxxQkFBUSxDQUFDLElBQUksQ0FBQztRQUVuQyxPQUFDLEdBQVcsRUFBRSxDQUFDOztJQUMxQixDQUFDO0lBSEc7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBUSxDQUFDLEVBQUUsQ0FBQztnREFDSTtJQUZ6QixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBSzlCO0lBQUQsaUJBQUM7Q0FMRCxBQUtDLENBTHVDLEVBQUUsQ0FBQyxTQUFTLEdBS25EO2tCQUxvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNpbXBsZVBvb2wgZnJvbSBcIi4vU2ltcGxlUG9vbFwiO1xyXG5pbXBvcnQgeyBQb29sVHlwZSB9IGZyb20gXCIuL1NpbXBsZVBvb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbE1lbWJlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKFBvb2xUeXBlKSB9KVxyXG4gICAgcHVibGljIHBvb2xUeXBlOiBQb29sVHlwZSA9IFBvb2xUeXBlLk5vbmU7XHJcblxyXG4gICAgcHVibGljIGk6IG51bWJlciA9IDEwO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        _this.timeAlive = 1;
        return _this;
    }
    VFX.prototype.onEnable = function () {
        var _this = this;
        this.anim.play();
        // cc.tween(this.node).delay(0.5).call(()=> SimplePool.despawn(this));
        //delay 0.5s thi despawn
        setTimeout(function () {
            SimplePool_1.default.despawn(_this);
        }, this.timeAlive * 1000);
    };
    __decorate([
        property({ type: cc.Animation })
    ], VFX.prototype, "anim", void 0);
    __decorate([
        property({ type: cc.Float })
    ], VFX.prototype, "timeAlive", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcVkZYLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdEQUEyQztBQUMzQyxnREFBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBaUMsdUJBQVU7SUFBM0M7UUFBQSxxRUFrQkM7UUFmRyxVQUFJLEdBQWtCLElBQUksQ0FBQztRQUczQixlQUFTLEdBQVksQ0FBQyxDQUFDOztJQVkzQixDQUFDO0lBVmEsc0JBQVEsR0FBbEI7UUFBQSxpQkFTQztRQVBHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFakIsc0VBQXNFO1FBQ3RFLHdCQUF3QjtRQUN4QixVQUFVLENBQUM7WUFDUCxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBZEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3FDQUNOO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzswQ0FDTjtJQU5OLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FrQnZCO0lBQUQsVUFBQztDQWxCRCxBQWtCQyxDQWxCZ0Msb0JBQVUsR0FrQjFDO2tCQWxCb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2wvUG9vbE1lbWJlclwiO1xyXG5pbXBvcnQgU2ltcGxlUG9vbCBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVkZYIGV4dGVuZHMgUG9vbE1lbWJlciB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQW5pbWF0aW9uIH0pXHJcbiAgICBhbmltIDogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5GbG9hdCB9KVxyXG4gICAgdGltZUFsaXZlIDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbS5wbGF5KCk7XHJcblxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC41KS5jYWxsKCgpPT4gU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpKTtcclxuICAgICAgICAvL2RlbGF5IDAuNXMgdGhpIGRlc3Bhd25cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4gICAgICAgIH0sIHRoaXMudGltZUFsaXZlICogMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Utilities.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05edcloxuJAGLEtYk5yVlIn', 'Utilities');
// _Game/Script/Utilities.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    //chuyen vector 3 sang vector 2
    Utilities.vec3ToVec2 = function (v) {
        return cc.v2(v.x, v.y);
    };
    //chuyen vector 2 sang vector 3
    Utilities.vec2ToVec3 = function (v) {
        return cc.v3(v.x, v.y, 0);
    };
    Utilities = __decorate([
        ccclass
    ], Utilities);
    return Utilities;
}());
exports.default = Utilities;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcVXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQVdBLENBQUM7SUFUQywrQkFBK0I7SUFDakIsb0JBQVUsR0FBeEIsVUFBeUIsQ0FBVTtRQUNqQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELCtCQUErQjtJQUNqQixvQkFBVSxHQUF4QixVQUF5QixDQUFVO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQVZrQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBVzdCO0lBQUQsZ0JBQUM7Q0FYRCxBQVdDLElBQUE7a0JBWG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxpdGllc3tcclxuXHJcbiAgLy9jaHV5ZW4gdmVjdG9yIDMgc2FuZyB2ZWN0b3IgMlxyXG4gIHB1YmxpYyBzdGF0aWMgdmVjM1RvVmVjMih2OiBjYy5WZWMzKSA6IGNjLlZlYzJ7XHJcbiAgICByZXR1cm4gY2MudjIodi54LCB2LnkpO1xyXG4gIH1cclxuXHJcbiAgLy9jaHV5ZW4gdmVjdG9yIDIgc2FuZyB2ZWN0b3IgM1xyXG4gIHB1YmxpYyBzdGF0aWMgdmVjMlRvVmVjMyh2OiBjYy5WZWMyKSA6IGNjLlZlYzN7XHJcbiAgICByZXR1cm4gY2MudjModi54LCB2LnksIDApO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/BGScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ffb8Wz4pFDzIyiVTrkEw0C', 'BGScroll');
// _Game/Script/BGScroll.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layer1 = null;
        _this.layer2 = null;
        _this.speed = 0.1;
        _this.SCREEN_HEIGHT = 1920;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    // start () {
    // }
    NewClass.prototype.update = function (dt) {
        var delta = cc.v3(0, -this.speed * dt, 0);
        this.layer1.position = this.layer1.position.add(delta);
        this.layer2.position = this.layer2.position.add(delta);
        if (this.layer1.position.y <= -this.SCREEN_HEIGHT) {
            this.layer1.position = this.layer1.position.add(cc.Vec3.UP.mul(this.SCREEN_HEIGHT * 2));
        }
        if (this.layer2.position.y <= -this.SCREEN_HEIGHT) {
            this.layer2.position = this.layer2.position.add(cc.Vec3.UP.mul(this.SCREEN_HEIGHT * 2));
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer2", void 0);
    __decorate([
        property(cc.Float)
    ], NewClass.prototype, "speed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQkdTY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrQ0M7UUEvQkcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFFWCxtQkFBYSxHQUFHLElBQUksQ0FBQzs7SUF1QmxDLENBQUM7SUFwQkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixhQUFhO0lBQ2IsSUFBSTtJQUVKLHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRjtJQUNMLENBQUM7SUE5QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0M7SUFUSCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0M1QjtJQUFELGVBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBa0NqRDtrQkFsQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxheWVyMTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsYXllcjI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHNwZWVkOiBudW1iZXIgPSAwLjE7XHJcbiAgICBcclxuICAgIHJlYWRvbmx5IFNDUkVFTl9IRUlHSFQgPSAxOTIwO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICAvLyBzdGFydCAoKSB7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhID0gY2MudjMoMCwgLXRoaXMuc3BlZWQgKiBkdCwgMCk7XHJcbiAgICAgICAgdGhpcy5sYXllcjEucG9zaXRpb24gPSB0aGlzLmxheWVyMS5wb3NpdGlvbi5hZGQoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIyLnBvc2l0aW9uID0gdGhpcy5sYXllcjIucG9zaXRpb24uYWRkKGRlbHRhKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5sYXllcjEucG9zaXRpb24ueSA8PSAtdGhpcy5TQ1JFRU5fSEVJR0hUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXIxLnBvc2l0aW9uID0gdGhpcy5sYXllcjEucG9zaXRpb24uYWRkKGNjLlZlYzMuVVAubXVsKHRoaXMuU0NSRUVOX0hFSUdIVCAqIDIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxheWVyMi5wb3NpdGlvbi55IDw9IC10aGlzLlNDUkVFTl9IRUlHSFQpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXllcjIucG9zaXRpb24gPSB0aGlzLmxheWVyMi5wb3NpdGlvbi5hZGQoY2MuVmVjMy5VUC5tdWwodGhpcy5TQ1JFRU5fSEVJR0hUICogMikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Booster.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09b02JVHm9LUqtuvJ+3fRZy', 'Booster');
// _Game/Script/Booster.ts

// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// import Character from "./Character";
// import LevelManager from "./LevelManager";
// import PoolMember from "./Pool/PoolMember";
// import SimplePool from "./Pool/SimplePool";
// import Ship from "./Ship";
// const {ccclass, property} = cc._decorator;
// @ccclass
// export default class Booster extends PoolMember {
//     //script này copy của Khánh cho nhanh, mà hình như ô Khánh này copy của ChatGPT hay sao mà tự dưng nhìn comment chuẩn chỉ thế
//     private speed: number = 500;
//     private time: number = 0;
//     private threshold: number = 20;
//     onEnable() {
//         this.time = 1;
//     }
//     update(dt) {
//         if (this.time > 0) {
//             // calculate pivot of boost: when active is move down to end screen height
//             const direction = cc.v2(0, -1).rotateSelf(this.node.angle * Math.PI / 180);
//             // add info with deltatime to boost interact with player
//             const velocity = direction.mul(this.speed);
//             const delta = velocity.mul(cc.director.getDeltaTime());
//             const v3Delta = new cc.Vec3(delta.x, delta.y, 0);
//             const newPos = this.node.position.add(v3Delta);
//             // move down the boost
//             this.node.setPosition(newPos);
//             // after time move on screen, boost will move toward player
//             this.time -= dt;
//         }
//         else {
//             //get info player
//             const playerPos = LevelManager.Ins.ship.position;
//             //get info this boost
//             const boostPos = this.node.position;
//             // calculate distance btw this boost with player
//             const distance = playerPos.sub(boostPos).mag();
//             const direction = playerPos.sub(boostPos).normalize();
//             // movement action
//             const movement = direction.mul(2000 * dt);
//             // move this boost towards player node
//             this.node.position = boostPos.add(movement);
//             // checking if distance btw this boost with player = 0, it will despawn self
//             if (distance < this.threshold) {
//                 this.onDespawn();
//             }
//         }
//     }
//     onDespawn() {
//         LevelManager.Ins.ship.getComponent(Ship).onPowerUp();
//         SimplePool.despawn(this);
//     }
//     // onCollisionEnter(other: cc.Collider, self: cc.Collider) {
//     //     //đoạn này k cần so sánh group name vì đã chia group contact rồi
//     //     // if (other.node.group == 'player') {
//     //     other.getComponent(Ship).onPowerUp();
//     //     SimplePool.despawn(this);
//     //     // }
//     // }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQm9vc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7QUFDdkIsMkVBQTJFO0FBQzNFLHNCQUFzQjtBQUN0QixxRkFBcUY7QUFDckYsaUNBQWlDO0FBQ2pDLHFGQUFxRjtBQUVyRix1Q0FBdUM7QUFDdkMsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsNkJBQTZCO0FBRTdCLDZDQUE2QztBQUU3QyxXQUFXO0FBQ1gsb0RBQW9EO0FBRXBELG9JQUFvSTtBQUNwSSxtQ0FBbUM7QUFDbkMsZ0NBQWdDO0FBQ2hDLHNDQUFzQztBQUV0QyxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLFFBQVE7QUFFUixtQkFBbUI7QUFFbkIsK0JBQStCO0FBQy9CLHlGQUF5RjtBQUN6RiwwRkFBMEY7QUFFMUYsdUVBQXVFO0FBQ3ZFLDBEQUEwRDtBQUMxRCxzRUFBc0U7QUFDdEUsZ0VBQWdFO0FBQ2hFLDhEQUE4RDtBQUU5RCxxQ0FBcUM7QUFDckMsNkNBQTZDO0FBRTdDLDBFQUEwRTtBQUMxRSwrQkFBK0I7QUFDL0IsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixnQ0FBZ0M7QUFDaEMsZ0VBQWdFO0FBRWhFLG9DQUFvQztBQUNwQyxtREFBbUQ7QUFFbkQsK0RBQStEO0FBQy9ELDhEQUE4RDtBQUM5RCxxRUFBcUU7QUFFckUsaUNBQWlDO0FBQ2pDLHlEQUF5RDtBQUV6RCxxREFBcUQ7QUFDckQsMkRBQTJEO0FBRTNELDJGQUEyRjtBQUMzRiwrQ0FBK0M7QUFDL0Msb0NBQW9DO0FBQ3BDLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osUUFBUTtBQUNSLG9CQUFvQjtBQUNwQixnRUFBZ0U7QUFDaEUsb0NBQW9DO0FBQ3BDLFFBQVE7QUFHUixtRUFBbUU7QUFFbkUsOEVBQThFO0FBQzlFLG9EQUFvRDtBQUNwRCxtREFBbUQ7QUFDbkQsdUNBQXVDO0FBQ3ZDLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vIC8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAvLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vIC8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vIC8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbi8vIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vQ2hhcmFjdGVyXCI7XHJcbi8vIGltcG9ydCBMZXZlbE1hbmFnZXIgZnJvbSBcIi4vTGV2ZWxNYW5hZ2VyXCI7XHJcbi8vIGltcG9ydCBQb29sTWVtYmVyIGZyb20gXCIuL1Bvb2wvUG9vbE1lbWJlclwiO1xyXG4vLyBpbXBvcnQgU2ltcGxlUG9vbCBmcm9tIFwiLi9Qb29sL1NpbXBsZVBvb2xcIjtcclxuLy8gaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xyXG5cclxuLy8gY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vLyBAY2NjbGFzc1xyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBCb29zdGVyIGV4dGVuZHMgUG9vbE1lbWJlciB7XHJcblxyXG4vLyAgICAgLy9zY3JpcHQgbsOgeSBjb3B5IGPhu6dhIEtow6FuaCBjaG8gbmhhbmgsIG3DoCBow6xuaCBuaMawIMO0IEtow6FuaCBuw6B5IGNvcHkgY+G7p2EgQ2hhdEdQVCBoYXkgc2FvIG3DoCB04buxIGTGsG5nIG5ow6xuIGNvbW1lbnQgY2h14bqpbiBjaOG7iSB0aOG6v1xyXG4vLyAgICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gNTAwO1xyXG4vLyAgICAgcHJpdmF0ZSB0aW1lOiBudW1iZXIgPSAwO1xyXG4vLyAgICAgcHJpdmF0ZSB0aHJlc2hvbGQ6IG51bWJlciA9IDIwO1xyXG5cclxuLy8gICAgIG9uRW5hYmxlKCkge1xyXG4vLyAgICAgICAgIHRoaXMudGltZSA9IDE7XHJcbi8vICAgICB9XHJcbiAgICBcclxuLy8gICAgIHVwZGF0ZShkdCkge1xyXG5cclxuLy8gICAgICAgICBpZiAodGhpcy50aW1lID4gMCkge1xyXG4vLyAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgcGl2b3Qgb2YgYm9vc3Q6IHdoZW4gYWN0aXZlIGlzIG1vdmUgZG93biB0byBlbmQgc2NyZWVuIGhlaWdodFxyXG4vLyAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBjYy52MigwLCAtMSkucm90YXRlU2VsZih0aGlzLm5vZGUuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuXHJcbi8vICAgICAgICAgICAgIC8vIGFkZCBpbmZvIHdpdGggZGVsdGF0aW1lIHRvIGJvb3N0IGludGVyYWN0IHdpdGggcGxheWVyXHJcbi8vICAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gZGlyZWN0aW9uLm11bCh0aGlzLnNwZWVkKTtcclxuLy8gICAgICAgICAgICAgY29uc3QgZGVsdGEgPSB2ZWxvY2l0eS5tdWwoY2MuZGlyZWN0b3IuZ2V0RGVsdGFUaW1lKCkpO1xyXG4vLyAgICAgICAgICAgICBjb25zdCB2M0RlbHRhID0gbmV3IGNjLlZlYzMoZGVsdGEueCwgZGVsdGEueSwgMCk7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IG5ld1BvcyA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGQodjNEZWx0YSk7XHJcblxyXG4vLyAgICAgICAgICAgICAvLyBtb3ZlIGRvd24gdGhlIGJvb3N0XHJcbi8vICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihuZXdQb3MpO1xyXG5cclxuLy8gICAgICAgICAgICAgLy8gYWZ0ZXIgdGltZSBtb3ZlIG9uIHNjcmVlbiwgYm9vc3Qgd2lsbCBtb3ZlIHRvd2FyZCBwbGF5ZXJcclxuLy8gICAgICAgICAgICAgdGhpcy50aW1lIC09IGR0O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgLy9nZXQgaW5mbyBwbGF5ZXJcclxuLy8gICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zID0gTGV2ZWxNYW5hZ2VyLklucy5zaGlwLnBvc2l0aW9uO1xyXG5cclxuLy8gICAgICAgICAgICAgLy9nZXQgaW5mbyB0aGlzIGJvb3N0XHJcbi8vICAgICAgICAgICAgIGNvbnN0IGJvb3N0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG5cclxuLy8gICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGRpc3RhbmNlIGJ0dyB0aGlzIGJvb3N0IHdpdGggcGxheWVyXHJcbi8vICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gcGxheWVyUG9zLnN1Yihib29zdFBvcykubWFnKCk7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBsYXllclBvcy5zdWIoYm9vc3RQb3MpLm5vcm1hbGl6ZSgpO1xyXG5cclxuLy8gICAgICAgICAgICAgLy8gbW92ZW1lbnQgYWN0aW9uXHJcbi8vICAgICAgICAgICAgIGNvbnN0IG1vdmVtZW50ID0gZGlyZWN0aW9uLm11bCgyMDAwICogZHQpO1xyXG5cclxuLy8gICAgICAgICAgICAgLy8gbW92ZSB0aGlzIGJvb3N0IHRvd2FyZHMgcGxheWVyIG5vZGVcclxuLy8gICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gYm9vc3RQb3MuYWRkKG1vdmVtZW50KTtcclxuXHJcbi8vICAgICAgICAgICAgIC8vIGNoZWNraW5nIGlmIGRpc3RhbmNlIGJ0dyB0aGlzIGJvb3N0IHdpdGggcGxheWVyID0gMCwgaXQgd2lsbCBkZXNwYXduIHNlbGZcclxuLy8gICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpcy50aHJlc2hvbGQpIHtcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMub25EZXNwYXduKCk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBvbkRlc3Bhd24oKSB7XHJcbi8vICAgICAgICAgTGV2ZWxNYW5hZ2VyLklucy5zaGlwLmdldENvbXBvbmVudChTaGlwKS5vblBvd2VyVXAoKTtcclxuLy8gICAgICAgICBTaW1wbGVQb29sLmRlc3Bhd24odGhpcyk7XHJcbi8vICAgICB9XHJcblxyXG5cclxuLy8gICAgIC8vIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xyXG5cclxuLy8gICAgIC8vICAgICAvL8SRb+G6oW4gbsOgeSBrIGPhuqduIHNvIHPDoW5oIGdyb3VwIG5hbWUgdsOsIMSRw6MgY2hpYSBncm91cCBjb250YWN0IHLhu5NpXHJcbi8vICAgICAvLyAgICAgLy8gaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT0gJ3BsYXllcicpIHtcclxuLy8gICAgIC8vICAgICBvdGhlci5nZXRDb21wb25lbnQoU2hpcCkub25Qb3dlclVwKCk7XHJcbi8vICAgICAvLyAgICAgU2ltcGxlUG9vbC5kZXNwYXduKHRoaXMpO1xyXG4vLyAgICAgLy8gICAgIC8vIH1cclxuLy8gICAgIC8vIH1cclxuLy8gfVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
