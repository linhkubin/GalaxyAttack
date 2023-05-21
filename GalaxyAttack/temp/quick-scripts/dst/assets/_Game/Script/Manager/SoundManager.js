
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_Game/Script/Manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b75390Cvt1Ec6p5bAc/Bhm3', 'SoundManager');
// _Game/Script/Manager/SoundManager.ts

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
exports.AudioType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioType;
(function (AudioType) {
    AudioType[AudioType["FX_Bullet"] = 0] = "FX_Bullet";
    AudioType[AudioType["FX_EnemyDie"] = 1] = "FX_EnemyDie";
    AudioType[AudioType["FX_Booster"] = 2] = "FX_Booster";
})(AudioType = exports.AudioType || (exports.AudioType = {}));
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //------------------------------------
        _this.clips = [];
        _this.audies = [];
        return _this;
    }
    SoundManager_1 = SoundManager;
    Object.defineProperty(SoundManager, "Ins", {
        get: function () {
            return SoundManager_1.ins;
        },
        enumerable: false,
        configurable: true
    });
    SoundManager.prototype.onLoad = function () {
        SoundManager_1.ins = this;
    };
    SoundManager.prototype.start = function () {
        for (var i = 0; i < this.clips.length; i++) {
            var node = new cc.Node().addComponent(cc.AudioSource);
            node.clip = this.clips[i];
            this.audies.push(node);
        }
    };
    SoundManager.prototype.PlayClip = function (type) {
        console.log(type);
        console.log(this.audies.length);
        this.audies[type].play();
    };
    var SoundManager_1;
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "clips", void 0);
    SoundManager = SoundManager_1 = __decorate([
        ccclass
    ], SoundManager);
    return SoundManager;
}(cc.Component));
exports.default = SoundManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcTWFuYWdlclxcU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDakIsbURBQWEsQ0FBQTtJQUNiLHVEQUFlLENBQUE7SUFDZixxREFBYyxDQUFBO0FBQ2xCLENBQUMsRUFKVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUlEO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBZ0NDO1FBcEJFLHNDQUFzQztRQUdyQyxXQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUVuQixZQUFNLEdBQXFCLEVBQUUsQ0FBQzs7SUFlMUMsQ0FBQztxQkFoQ29CLFlBQVk7SUFJOUIsc0JBQWtCLG1CQUFHO2FBQXJCO1lBRUcsT0FBTyxjQUFZLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRVMsNkJBQU0sR0FBaEI7UUFDSSxjQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBUVUsNEJBQUssR0FBZjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFTSwrQkFBUSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOztJQWhCRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzsrQ0FDRTtJQWZWLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FnQ2hDO0lBQUQsbUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3lDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NyRDtrQkFoQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIEF1ZGlvVHlwZSB7XHJcbiAgICBGWF9CdWxsZXQgPSAwLFxyXG4gICAgRlhfRW5lbXlEaWUgPSAxLFxyXG4gICAgRlhfQm9vc3RlciA9IDIsXHJcbn1cclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgLy8gc2luZ2xldG9uXHJcbiAgIHByaXZhdGUgc3RhdGljIGlucyA6IFNvdW5kTWFuYWdlcjtcclxuICAgcHVibGljIHN0YXRpYyBnZXQgSW5zKCkgOiBTb3VuZE1hbmFnZXJcclxuICAge1xyXG4gICAgICByZXR1cm4gU291bmRNYW5hZ2VyLmlucztcclxuICAgfVxyXG5cclxuICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgIFNvdW5kTWFuYWdlci5pbnMgPSB0aGlzO1xyXG4gICB9XHJcbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5BdWRpb0NsaXBdKVxyXG4gICAgY2xpcHM6IGNjLkF1ZGlvQ2xpcFtdID0gW107XHJcbiAgICAgICAgXHJcbiAgICBwcml2YXRlIGF1ZGllczogY2MuQXVkaW9Tb3VyY2VbXSA9IFtdO1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2xpcHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCkuYWRkQ29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuICAgICAgICAgICAgbm9kZS5jbGlwID0gdGhpcy5jbGlwc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpZXMucHVzaChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFBsYXlDbGlwKHR5cGU6IEF1ZGlvVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXVkaWVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5hdWRpZXNbdHlwZV0ucGxheSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==