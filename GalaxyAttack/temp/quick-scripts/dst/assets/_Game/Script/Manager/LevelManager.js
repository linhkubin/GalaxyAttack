
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Manager/LevelManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dafbF1IDRAvbIoBVoZ+QEg', 'LevelManager');
// _Game/Script/Manager/LevelManager.ts

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
var SimplePool_1 = require("../Pool/SimplePool");
var Ship_1 = require("../Ship");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelManager = /** @class */ (function (_super) {
    __extends(LevelManager, _super);
    function LevelManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //------------------------------------
        //Level Manager sẽ điều khiển luồng chính trong game
        _this.ship = null;
        _this.stage_1 = [];
        _this.stage_2 = [];
        _this.list = [];
        _this.stage = 0;
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
        this.onLoadStage_1();
        this.isBooster = false;
        //di chuyển tàu lên xong đợi  người chơi điều khiển
        this.ship.onAwake();
    };
    LevelManager.prototype.onLoadStage_1 = function () {
        for (var i = 0; i < this.stage_1.length; i++) {
            var e = SimplePool_1.default.spawnT(SimplePool_1.PoolType.Enemy_1, this.stage_1[i].getWorldPosition().add(cc.Vec3.UP.mul(1000)), 0);
            e.moveTo(this.stage_1[i].getWorldPosition(), 1, true);
            this.list.push(e);
            e.onInit(40);
        }
    };
    LevelManager.prototype.onLoadStage_2 = function () {
        //bay từ 2 bên sang
        for (var i = 0; i < 14; i++) {
            var e = SimplePool_1.default.spawnT(SimplePool_1.PoolType.Enemy_2, this.node.getWorldPosition().add(new cc.Vec3(-1000, 0, 0)), 0);
            e.moveTo(this.stage_2[i].getWorldPosition(), 0.5, true);
            this.list.push(e);
            e.onInit(40);
        }
        for (var i = 13; i < this.stage_2.length; i++) {
            var e = SimplePool_1.default.spawnT(SimplePool_1.PoolType.Enemy_2, this.node.getWorldPosition().add(new cc.Vec3(1000, 0, 0)), 0);
            e.moveTo(this.stage_2[i].getWorldPosition(), 0.5, true);
            this.list.push(e);
            e.onInit(40);
        }
    };
    LevelManager.prototype.onFinish = function () {
        //kết thúc màn game di chuyển tàu lên thẳng phía trên
        this.ship.onFinish();
        //show UI end card
    };
    //enemy death sẽ gọi vào hàm này
    //nếu ship chết thì cần viết 1 func khác để ship gọi vào
    LevelManager.prototype.onEnemyDeath = function (c) {
        //remove enemy ra khỏi list
        var index = this.list.indexOf(c);
        if (index != -1) {
            this.list.splice(index, 1);
        }
        //nếu kết thúc stage thì next stage
        if (this.list.length == 0) {
            this.stage++;
            switch (this.stage) {
                case 0:
                    this.onLoadStage_1();
                    break;
                case 1:
                    this.onLoadStage_2();
                    break;
                default:
                    //kết thúc stage thì kết thúc game
                    this.onFinish();
                    break;
            }
        }
        //enemy đầu tiên chết sẽ tạo booster ra
        if (!this.isBooster) {
            this.isBooster = true;
            SimplePool_1.default.spawn(SimplePool_1.PoolType.Booster, c.node.getWorldPosition());
        }
    };
    var LevelManager_1;
    __decorate([
        property(Ship_1.default)
    ], LevelManager.prototype, "ship", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "stage_1", void 0);
    __decorate([
        property(cc.Node)
    ], LevelManager.prototype, "stage_2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcTWFuYWdlclxcTGV2ZWxNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxGLGlEQUEwRDtBQUMxRCxnQ0FBMkI7QUFFckIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF3R0M7UUE1RkUsc0NBQXNDO1FBRXRDLG9EQUFvRDtRQUc3QyxVQUFJLEdBQVMsSUFBSSxDQUFDO1FBR2xCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFHeEIsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUV2QixVQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUV2QixXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQTZFN0IsQ0FBQztxQkF4R29CLFlBQVk7SUFJOUIsc0JBQWtCLG1CQUFHO2FBQXJCO1lBRUcsT0FBTyxjQUFZLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRVMsNkJBQU0sR0FBaEI7UUFDRyxjQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBbUJTLDRCQUFLLEdBQWY7UUFDRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdNLG9DQUFhLEdBQXBCO1FBQ0csS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFF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QztZQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixRQUFPLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ2YsS0FBSyxDQUFDO29CQUNILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFDVCxLQUFLLENBQUM7b0JBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUNyQixNQUFNO2dCQUNUO29CQUNHLGtDQUFrQztvQkFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQixNQUFNO2FBQ1g7U0FDSDtRQUVELHVDQUF1QztRQUN2QyxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixvQkFBVSxDQUFDLEtBQUssQ0FBQyxxQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUNoRTtJQUNKLENBQUM7O0lBckZEO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQzs4Q0FDVTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNhO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ2E7SUF2QmIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXdHaEM7SUFBRCxtQkFBQztDQXhHRCxBQXdHQyxDQXhHeUMsRUFBRSxDQUFDLFNBQVMsR0F3R3JEO2tCQXhHb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4uL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4uL0VuZW15XCI7XHJcbmltcG9ydCBTaW1wbGVQb29sLCB7IFBvb2xUeXBlIH0gZnJvbSBcIi4uL1Bvb2wvU2ltcGxlUG9vbFwiO1xyXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vU2hpcFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgLy8gc2luZ2xldG9uXHJcbiAgIHByaXZhdGUgc3RhdGljIGlucyA6IExldmVsTWFuYWdlcjtcclxuICAgcHVibGljIHN0YXRpYyBnZXQgSW5zKCkgOiBMZXZlbE1hbmFnZXJcclxuICAge1xyXG4gICAgICByZXR1cm4gTGV2ZWxNYW5hZ2VyLmlucztcclxuICAgfVxyXG5cclxuICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgTGV2ZWxNYW5hZ2VyLmlucyA9IHRoaXM7XHJcbiAgIH1cclxuICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgIC8vTGV2ZWwgTWFuYWdlciBz4bq9IMSRaeG7gXUga2hp4buDbiBsdeG7k25nIGNow61uaCB0cm9uZyBnYW1lXHJcblxyXG4gICBAcHJvcGVydHkoU2hpcClcclxuICAgcHVibGljIHNoaXA6IFNoaXAgPSBudWxsO1xyXG4gICBcclxuICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgIHB1YmxpYyBzdGFnZV8xOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgXHJcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICBwdWJsaWMgc3RhZ2VfMjogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICBwcml2YXRlIGxpc3Q6IENoYXJhY3RlcltdID0gW107XHJcbiAgIHByaXZhdGUgaXNCb29zdGVyOiBib29sZWFuO1xyXG4gICBwcml2YXRlIHN0YWdlOiBudW1iZXIgPSAwO1xyXG4gICBcclxuXHJcbiAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5vbkxvYWRTdGFnZV8xKCk7XHJcbiAgICAgIHRoaXMuaXNCb29zdGVyID0gZmFsc2U7XHJcbiAgICAgIC8vZGkgY2h1eeG7g24gdMOgdSBsw6puIHhvbmcgxJHhu6NpICBuZ8aw4budaSBjaMahaSDEkWnhu4F1IGtoaeG7g25cclxuICAgICAgdGhpcy5zaGlwLm9uQXdha2UoKTtcclxuICAgfVxyXG5cclxuXHJcbiAgIHB1YmxpYyBvbkxvYWRTdGFnZV8xKCk6IHZvaWQge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhZ2VfMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgZSA9IFNpbXBsZVBvb2wuc3Bhd25UPEVuZW15PihQb29sVHlwZS5FbmVteV8xLCB0aGlzLnN0YWdlXzFbaV0uZ2V0V29ybGRQb3NpdGlvbigpLmFkZChjYy5WZWMzLlVQLm11bCgxMDAwKSksIDApO1xyXG4gICAgICAgICBlLm1vdmVUbyh0aGlzLnN0YWdlXzFbaV0uZ2V0V29ybGRQb3NpdGlvbigpLCAxLCB0cnVlKTtcclxuICAgICAgICAgdGhpcy5saXN0LnB1c2goZSk7XHJcbiAgICAgICAgIGUub25Jbml0KDQwKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgb25Mb2FkU3RhZ2VfMigpOiB2b2lkIHtcclxuICAgICAgLy9iYXkgdOG7qyAyIGLDqm4gc2FuZ1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE0OyBpKyspIHtcclxuICAgICAgICAgbGV0IGUgPSBTaW1wbGVQb29sLnNwYXduVDxFbmVteT4oUG9vbFR5cGUuRW5lbXlfMiwgdGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKS5hZGQobmV3IGNjLlZlYzMoLTEwMDAsMCwwKSksIDApO1xyXG4gICAgICAgICBlLm1vdmVUbyh0aGlzLnN0YWdlXzJbaV0uZ2V0V29ybGRQb3NpdGlvbigpLCAwLjUsIHRydWUpO1xyXG4gICAgICAgICB0aGlzLmxpc3QucHVzaChlKTtcclxuICAgICAgICAgZS5vbkluaXQoNDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMTM7IGkgPCB0aGlzLnN0YWdlXzIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgbGV0IGUgPSBTaW1wbGVQb29sLnNwYXduVDxFbmVteT4oUG9vbFR5cGUuRW5lbXlfMiwgdGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKS5hZGQobmV3IGNjLlZlYzMoMTAwMCwwLDApKSwgMCk7XHJcbiAgICAgICAgIGUubW92ZVRvKHRoaXMuc3RhZ2VfMltpXS5nZXRXb3JsZFBvc2l0aW9uKCksIDAuNSwgdHJ1ZSk7XHJcbiAgICAgICAgIHRoaXMubGlzdC5wdXNoKGUpO1xyXG4gICAgICAgICBlLm9uSW5pdCg0MCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgb25GaW5pc2goKSB7XHJcbiAgICAgIC8va+G6v3QgdGjDumMgbcOgbiBnYW1lIGRpIGNodXnhu4NuIHTDoHUgbMOqbiB0aOG6s25nIHBow61hIHRyw6puXHJcbiAgICAgIHRoaXMuc2hpcC5vbkZpbmlzaCgpO1xyXG4gICAgICAvL3Nob3cgVUkgZW5kIGNhcmRcclxuICAgfVxyXG5cclxuICAgLy9lbmVteSBkZWF0aCBz4bq9IGfhu41pIHbDoG8gaMOgbSBuw6B5XHJcbiAgIC8vbuG6v3Ugc2hpcCBjaOG6v3QgdGjDrCBj4bqnbiB2aeG6v3QgMSBmdW5jIGtow6FjIMSR4buDIHNoaXAgZ+G7jWkgdsOgb1xyXG4gICBwdWJsaWMgb25FbmVteURlYXRoKGM6IENoYXJhY3Rlcik6IHZvaWR7XHJcblxyXG4gICAgICAvL3JlbW92ZSBlbmVteSByYSBraOG7j2kgbGlzdFxyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmxpc3QuaW5kZXhPZihjKTtcclxuICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL27hur91IGvhur90IHRow7pjIHN0YWdlIHRow6wgbmV4dCBzdGFnZVxyXG4gICAgICBpZih0aGlzLmxpc3QubGVuZ3RoID09IDApe1xyXG4gICAgICAgICB0aGlzLnN0YWdlKys7XHJcbiAgICAgICAgIHN3aXRjaCh0aGlzLnN0YWdlKXtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICB0aGlzLm9uTG9hZFN0YWdlXzEoKTtcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgdGhpcy5vbkxvYWRTdGFnZV8yKCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAvL2vhur90IHRow7pjIHN0YWdlIHRow6wga+G6v3QgdGjDumMgZ2FtZVxyXG4gICAgICAgICAgICAgICB0aGlzLm9uRmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vZW5lbXkgxJHhuqd1IHRpw6puIGNo4bq/dCBz4bq9IHThuqFvIGJvb3N0ZXIgcmFcclxuICAgICAgaWYoIXRoaXMuaXNCb29zdGVyKXtcclxuICAgICAgICAgdGhpcy5pc0Jvb3N0ZXIgPSB0cnVlO1xyXG4gICAgICAgICBTaW1wbGVQb29sLnNwYXduKFBvb2xUeXBlLkJvb3N0ZXIsIGMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKCkpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbn1cclxuIl19