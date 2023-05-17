
const { ccclass, property } = cc._decorator;

@ccclass
export default class Utilities{

  //chuyen vector 3 sang vector 2
  public static vec3ToVec2(v: cc.Vec3) : cc.Vec2{
    return cc.v2(v.x, v.y);
  }

  //chuyen vector 2 sang vector 3
  public static vec2ToVec3(v: cc.Vec2) : cc.Vec3{
    return cc.v3(v.x, v.y, 0);
  }
}
