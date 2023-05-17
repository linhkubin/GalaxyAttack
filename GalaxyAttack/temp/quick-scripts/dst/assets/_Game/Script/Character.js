
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Character.prototype, "isDead", {
        //getter
        get: function () {
            return this.hp <= 0;
        },
        enumerable: false,
        configurable: true
    });
    Character.prototype.onInit = function (hp) {
        this.hp = hp;
    };
    Character.prototype.onHit = function (damage) {
        if (!this.isDead) {
            this.hp -= damage;
            if (this.isDead) {
                this.onDeathAction(this);
            }
        }
    };
    Character = __decorate([
        ccclass
    ], Character);
    return Character;
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcQ2hhcmFjdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EOztJQWlDQSxDQUFDO0lBekJHLHNCQUFJLDZCQUFNO1FBRFYsUUFBUTthQUNSO1lBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVNLDBCQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSx5QkFBSyxHQUFaLFVBQWEsTUFBYztRQUN2QixJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNaLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDO1lBQ2xCLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7SUFDTCxDQUFDO0lBdkJnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBaUM3QjtJQUFELGdCQUFDO0NBakNELEFBaUNDLENBakNzQyxFQUFFLENBQUMsU0FBUyxHQWlDbEQ7a0JBakNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgaHAgOiBudW1iZXI7XHJcblxyXG4gICAgLy9raGFpIGJhbyBhY3Rpb25cclxuICAgIHB1YmxpYyBvbkRlYXRoQWN0aW9uOiAoZTpDaGFyYWN0ZXIpID0+IHZvaWQ7XHJcblxyXG4gICAgLy9nZXR0ZXJcclxuICAgIGdldCBpc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHAgPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Jbml0KGhwOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuaHAgPSBocDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25IaXQoZGFtYWdlOiBudW1iZXIpe1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRGVhZCl7XHJcbiAgICAgICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlO1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzRGVhZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVhdGhBY3Rpb24odGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy90ZXN0XHJcbiAgICAvLyBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgLy8gICAgIHRoaXMub25EZWF0aEFjdGlvbiA9IHRoaXMub25FbmVteURlYXRoO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyBvbkVuZW15RGVhdGgoZSA6IENoYXJhY3Rlcik6IHZvaWR7XHJcblxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==