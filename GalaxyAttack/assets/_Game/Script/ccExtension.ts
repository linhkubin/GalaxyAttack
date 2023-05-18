// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// extension viết get set vịtrí world postion thay vì local postion
declare module cc {
  export interface Node {
    getWorldPosition(): cc.Vec3;
    getLocalPosition(pos: cc.Vec3): cc.Vec3;
    setWorldPosition(pos: cc.Vec3): void;
  }
}

 // Lấy giá trị world position của node
cc.Node.prototype.getWorldPosition = function (): cc.Vec3 {
    //this ở đây là node luôn
    const worldPos = this.convertToWorldSpaceAR(cc.v3(0, 0, 0));
    return worldPos;
};

// Đặt giá trị world position cho node
cc.Node.prototype.setWorldPosition = function (worldPosition: cc.Vec3) {
    //this ở đây là node luôn
    const localPos = this.parent?.convertToNodeSpaceAR(worldPosition);
    this.position = localPos;
};

 // Lấy giá trị local position của node
cc.Node.prototype.getLocalPosition = function (worldPosition: cc.Vec3): cc.Vec3 {
    //this ở đây là node luôn
    const localPosition = this.parent?.convertToNodeSpaceAR(worldPosition);
    return localPosition;
};
