
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
cc.Node.prototype.setWorldPosition = function (pos) {
    var _a;
    //this ở đây là node luôn
    var localPos = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.convertToNodeSpaceAR(pos);
    this.position = localPos;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX0dhbWVcXFNjcmlwdFxcY2NFeHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7QUFVakYsc0NBQXNDO0FBQ3ZDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHO0lBQ2pDLHlCQUF5QjtJQUN6QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsc0NBQXNDO0FBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsR0FBWTs7SUFDdkQseUJBQXlCO0lBQ3pCLElBQU0sUUFBUSxTQUFHLElBQUksQ0FBQyxNQUFNLDBDQUFFLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQzdCLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbi8vIGV4dGVuc2lvbiB2aeG6v3QgZ2V0IHNldCB24buLdHLDrSB3b3JsZCBwb3N0aW9uIHRoYXkgdsOsIGxvY2FsIHBvc3Rpb25cclxuZGVjbGFyZSBtb2R1bGUgY2Mge1xyXG4gIGV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7XHJcbiAgICBnZXRXb3JsZFBvc2l0aW9uKCk6IGNjLlZlYzM7XHJcbiAgICBzZXRXb3JsZFBvc2l0aW9uKHBvczogY2MuVmVjMyk6IHZvaWQ7XHJcbiAgfVxyXG59XHJcblxyXG4gLy8gTOG6pXkgZ2nDoSB0cuG7iyB3b3JsZCBwb3NpdGlvbiBj4bunYSBub2RlXHJcbmNjLk5vZGUucHJvdG90eXBlLmdldFdvcmxkUG9zaXRpb24gPSBmdW5jdGlvbiAoKTogY2MuVmVjMyB7XHJcbiAgICAvL3RoaXMg4bufIMSRw6J5IGzDoCBub2RlIGx1w7RuXHJcbiAgICBjb25zdCB3b3JsZFBvcyA9IHRoaXMuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYzKDAsIDAsIDApKTtcclxuICAgIHJldHVybiB3b3JsZFBvcztcclxufTtcclxuXHJcbi8vIMSQ4bq3dCBnacOhIHRy4buLIHdvcmxkIHBvc2l0aW9uIGNobyBub2RlXHJcbmNjLk5vZGUucHJvdG90eXBlLnNldFdvcmxkUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zOiBjYy5WZWMzKSB7XHJcbiAgICAvL3RoaXMg4bufIMSRw6J5IGzDoCBub2RlIGx1w7RuXHJcbiAgICBjb25zdCBsb2NhbFBvcyA9IHRoaXMucGFyZW50Py5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGxvY2FsUG9zO1xyXG59OyJdfQ==