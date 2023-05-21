"use strict";
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