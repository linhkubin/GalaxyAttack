// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Bullet from "./Bullet";
import SimplePool, { PoolType } from "./Pool/SimplePool";
import Utilities from "./Utilities";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Ship extends cc.Component {

  @property(cc.Label)
  label: cc.Label = null;
  
  @property({
    type: [cc.Node],
    tooltip: 'bulletPoints'
  })
  public bulletPoints: cc.Node[] = [];

  // private player: cc.Node;
  private touchOffset: cc.Vec2;

  private screen: cc.Vec2 = new cc.Vec2(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
  private clampHorizon: cc.Vec2;// = new cc.Vec2(-0.5, 0.5).mul(this.screen.x);
  private clampVertical: cc.Vec2;// = new cc.Vec2(-0.5, 0.5).mul(this.screen.y);
  

  onLoad() {
    // this.player = cc.find('player');
    //set up move object
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);

    this.screen = new cc.Vec2(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height);
    this.clampHorizon = new cc.Vec2(-0.5, 0.5).mul(this.screen.x);
    this.clampVertical = new cc.Vec2(-0.5, 0.5).mul(this.screen.y);
  }

  
  onDestroy() {
    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
  }

  //Move

  //bat dau an xuong
  private onTouchBegan(event: cc.Event.EventTouch)/*: boolean*/ {
    this.touchOffset = Utilities.vec3ToVec2(this.node.position).subtract(this.getMousePoint(event));
  }

  //di chuyen chuot
  private onTouchMoved(event: cc.Event.EventTouch) {
    const newPos = this.getMousePoint(event).add(this.touchOffset);

    newPos.x = cc.misc.clampf(newPos.x, this.clampHorizon.x, this.clampHorizon.y);
    newPos.y = cc.misc.clampf(newPos.y, this.clampVertical.x, this.clampVertical.y);
    
    this.node.position = Utilities.vec2ToVec3(newPos);
  }

  //lay vi tri chuot bam xuong
  private getMousePoint(event: cc.Event.EventTouch): cc.Vec2{
    return event.getLocation().sub(cc.v2(this.screen.x * 0.5, this.screen.y * 0.5));
  }

  //------------------------------

  @property(cc.Node)
  target: cc.Node = null;
    
  @property(cc.Node)
  follow: cc.Node = null;

  private timer: number = 0;

  update(dt: number) {
    //moi 0.5s bắn 1 lần
    if(this.timer <= 0){
      this.timer = 0.5;
      this.shoot();
    }

    this.timer -= dt;
    this.follow.setWorldPosition(this.target.getWorldPosition());
  }

  private shoot(){
    for (let i = 0; i < this.bulletPoints.length; i++) {
      (SimplePool.spawn(PoolType.Bullet_1,  this.bulletPoints[i].getWorldPosition(),this.bulletPoints[i].angle) as Bullet).onInit(10);
    }
  }

  public onLevelUp(): void {
     
  }

  public onShield(): void {
    
  }

  public onStart(): void {
    
  }

  public onFinish(): void {
    
  }
}
