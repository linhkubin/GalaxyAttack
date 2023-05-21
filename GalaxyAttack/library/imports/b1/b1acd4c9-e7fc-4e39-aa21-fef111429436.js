"use strict";
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