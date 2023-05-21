
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1acdTJ5/xOOaoh/vERQpQ2', 'UIManager');
// _Game/Script/Manager/UIManager.ts

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
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //------------------------------------
        // open UI theo index, UI nào thứ tự càng cao thì layer càng cao
        // close UI cũng theo index luôn
        // UI có nút bấm nào thì nên tạo 1 function rồi kéo thả vào trong này, ví dụ như ấn end card button
        // prefab để show ui lên
        _this.prefabs = [];
        //list roots node để show layer theo đúng thứ tự mong muốn
        _this.roots = [];
        //list canvas để lấy link
        _this.canvas = [];
        return _this;
    }
    UIManager_1 = UIManager;
    Object.defineProperty(UIManager, "Ins", {
        get: function () {
            return UIManager_1.ins;
        },
        enumerable: false,
        configurable: true
    });
    UIManager.prototype.onLoad = function () {
        UIManager_1.ins = this;
        for (var i = 0; i < this.prefabs.length; i++) {
            this.roots[i] = new cc.Node();
            this.roots[i].setParent(this.node);
        }
    };
    //open theo index
    UIManager.prototype.onOpen = function (index) {
        if (this.canvas[index] == null) {
            this.canvas[index] = cc.instantiate(this.prefabs[index]);
            this.canvas[index].setParent(this.roots[index]);
        }
        this.canvas[index].active = true;
    };
    //close theo index
    UIManager.prototype.onClose = function (index) {
        if (this.canvas[index] != null) {
            this.canvas[index].active = false;
        }
    };
    UIManager.prototype.endcardButton = function () {
    };
    var UIManager_1;
    __decorate([
        property([cc.Prefab])
    ], UIManager.prototype, "prefabs", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcTWFuYWdlclxcVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBcURDO1FBcENHLHNDQUFzQztRQUV0QyxnRUFBZ0U7UUFDaEUsZ0NBQWdDO1FBQ2hDLG1HQUFtRztRQUVuRyx3QkFBd0I7UUFFeEIsYUFBTyxHQUFlLEVBQUUsQ0FBQztRQUV6QiwwREFBMEQ7UUFDMUQsV0FBSyxHQUFlLEVBQUUsQ0FBQztRQUV2Qix5QkFBeUI7UUFDekIsWUFBTSxHQUFlLEVBQUUsQ0FBQzs7SUFzQjVCLENBQUM7a0JBckRvQixTQUFTO0lBSTFCLHNCQUFrQixnQkFBRzthQUFyQjtZQUVHLE9BQU8sV0FBUyxDQUFDLEdBQUcsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVTLDBCQUFNLEdBQWhCO1FBQ0ksV0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQWlCRCxpQkFBaUI7SUFDViwwQkFBTSxHQUFiLFVBQWMsS0FBYTtRQUN2QixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrQkFBa0I7SUFDWCwyQkFBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFTSxpQ0FBYSxHQUFwQjtJQUVBLENBQUM7O0lBM0JEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzhDQUNHO0lBekJSLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FxRDdCO0lBQUQsZ0JBQUM7Q0FyREQsQUFxREMsQ0FyRHNDLEVBQUUsQ0FBQyxTQUFTLEdBcURsRDtrQkFyRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuIFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHNpbmdsZXRvblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zIDogVUlNYW5hZ2VyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zKCkgOiBVSU1hbmFnZXJcclxuICAgIHtcclxuICAgICAgIHJldHVybiBVSU1hbmFnZXIuaW5zO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFVJTWFuYWdlci5pbnMgPSB0aGlzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJlZmFicy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdHNbaV0gPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3RzW2ldLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBcclxuICAgIC8vIG9wZW4gVUkgdGhlbyBpbmRleCwgVUkgbsOgbyB0aOG7qSB04buxIGPDoG5nIGNhbyB0aMOsIGxheWVyIGPDoG5nIGNhb1xyXG4gICAgLy8gY2xvc2UgVUkgY8WpbmcgdGhlbyBpbmRleCBsdcO0blxyXG4gICAgLy8gVUkgY8OzIG7DunQgYuG6pW0gbsOgbyB0aMOsIG7Dqm4gdOG6oW8gMSBmdW5jdGlvbiBy4buTaSBrw6lvIHRo4bqjIHbDoG8gdHJvbmcgbsOgeSwgdsOtIGThu6UgbmjGsCDhuqVuIGVuZCBjYXJkIGJ1dHRvblxyXG5cclxuICAgIC8vIHByZWZhYiDEkeG7gyBzaG93IHVpIGzDqm5cclxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcclxuICAgIHByZWZhYnMgOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICAvL2xpc3Qgcm9vdHMgbm9kZSDEkeG7gyBzaG93IGxheWVyIHRoZW8gxJHDum5nIHRo4bupIHThu7EgbW9uZyBtdeG7kW5cclxuICAgIHJvb3RzIDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgLy9saXN0IGNhbnZhcyDEkeG7gyBs4bqleSBsaW5rXHJcbiAgICBjYW52YXMgOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICAvL29wZW4gdGhlbyBpbmRleFxyXG4gICAgcHVibGljIG9uT3BlbihpbmRleDogbnVtYmVyKXtcclxuICAgICAgICBpZih0aGlzLmNhbnZhc1tpbmRleF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1tpbmRleF0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNbaW5kZXhdLnNldFBhcmVudCh0aGlzLnJvb3RzW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL2Nsb3NlIHRoZW8gaW5kZXhcclxuICAgIHB1YmxpYyBvbkNsb3NlKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIGlmKHRoaXMuY2FudmFzW2luZGV4XSAhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNbaW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5kY2FyZEJ1dHRvbigpe1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=