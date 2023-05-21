// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Character from "../Character";
import Enemy from "../Enemy";
import SimplePool, { PoolType } from "../Pool/SimplePool";
import Ship from "../Ship";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LevelManager extends cc.Component {

   // singleton
   private static ins : LevelManager;
   public static get Ins() : LevelManager
   {
      return LevelManager.ins;
   }

   protected onLoad(): void {
      LevelManager.ins = this;
   }
   //------------------------------------

   //Level Manager sẽ điều khiển luồng chính trong game

   @property(Ship)
   public ship: Ship = null;
   
   @property(cc.Node)
   public stage_1: cc.Node[] = [];
   
   @property(cc.Node)
   public stage_2: cc.Node[] = [];

   private list: Character[] = [];
   private isBooster: boolean;
   private stage: number = 0;
   

   protected start(): void {
      this.onLoadStage_1();
      this.isBooster = false;
      //di chuyển tàu lên xong đợi  người chơi điều khiển
      this.ship.onAwake();
   }


   public onLoadStage_1(): void {
      for (let i = 0; i < this.stage_1.length; i++) {
         let e = SimplePool.spawnT<Enemy>(PoolType.Enemy_1, this.stage_1[i].getWorldPosition().add(cc.Vec3.UP.mul(1000)), 0);
         e.moveTo(this.stage_1[i].getWorldPosition(), 1, true);
         this.list.push(e);
         e.onInit(40);
      }
   }

   public onLoadStage_2(): void {
      //bay từ 2 bên sang
      for (let i = 0; i < 14; i++) {
         let e = SimplePool.spawnT<Enemy>(PoolType.Enemy_2, this.node.getWorldPosition().add(new cc.Vec3(-1000,0,0)), 0);
         e.moveTo(this.stage_2[i].getWorldPosition(), 0.5, true);
         this.list.push(e);
         e.onInit(40);
      }

      for (let i = 13; i < this.stage_2.length; i++) {
         let e = SimplePool.spawnT<Enemy>(PoolType.Enemy_2, this.node.getWorldPosition().add(new cc.Vec3(1000,0,0)), 0);
         e.moveTo(this.stage_2[i].getWorldPosition(), 0.5, true);
         this.list.push(e);
         e.onInit(40);
      }
   }

   onFinish() {
      //kết thúc màn game di chuyển tàu lên thẳng phía trên
      this.ship.onFinish();
      //show UI end card
   }

   //enemy death sẽ gọi vào hàm này
   //nếu ship chết thì cần viết 1 func khác để ship gọi vào
   public onEnemyDeath(c: Character): void{

      //remove enemy ra khỏi list
      let index = this.list.indexOf(c);
      if (index != -1) {
         this.list.splice(index, 1);
      }

      //nếu kết thúc stage thì next stage
      if(this.list.length == 0){
         this.stage++;
         switch(this.stage){
            case 0:
               this.onLoadStage_1();
               break;
            case 1:
               this.onLoadStage_2();
               break;
            default:
               //kết thúc stage thì kết thúc game
               this.onFinish();
               break;
         }
      }

      //enemy đầu tiên chết sẽ tạo booster ra
      if(!this.isBooster){
         this.isBooster = true;
         SimplePool.spawn(PoolType.Booster, c.node.getWorldPosition());
      }
   }

}
