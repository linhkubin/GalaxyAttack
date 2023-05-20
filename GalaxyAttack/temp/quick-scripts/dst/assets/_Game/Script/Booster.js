
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