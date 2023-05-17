
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
// Script/Utilities.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVdGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO0lBV0EsQ0FBQztJQVRDLCtCQUErQjtJQUNqQixvQkFBVSxHQUF4QixVQUF5QixDQUFVO1FBQ2pDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsK0JBQStCO0lBQ2pCLG9CQUFVLEdBQXhCLFVBQXlCLENBQVU7UUFDakMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBVmtCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FXN0I7SUFBRCxnQkFBQztDQVhELEFBV0MsSUFBQTtrQkFYb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbGl0aWVze1xyXG5cclxuICAvL2NodXllbiB2ZWN0b3IgMyBzYW5nIHZlY3RvciAyXHJcbiAgcHVibGljIHN0YXRpYyB2ZWMzVG9WZWMyKHY6IGNjLlZlYzMpIDogY2MuVmVjMntcclxuICAgIHJldHVybiBjYy52Mih2LngsIHYueSk7XHJcbiAgfVxyXG5cclxuICAvL2NodXllbiB2ZWN0b3IgMiBzYW5nIHZlY3RvciAzXHJcbiAgcHVibGljIHN0YXRpYyB2ZWMyVG9WZWMzKHY6IGNjLlZlYzIpIDogY2MuVmVjM3tcclxuICAgIHJldHVybiBjYy52Myh2LngsIHYueSwgMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==