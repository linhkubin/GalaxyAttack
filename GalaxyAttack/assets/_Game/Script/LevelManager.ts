// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Character from "./Character";
import Enemy from "./Enemy";
import SimplePool, { PoolType } from "./Pool/SimplePool";
import Ship from "./Ship";

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

   @property(Ship)
   public ship: Ship = null;

   private list: Character[] = [];
   private isBooster: boolean;

   @property(cc.Node)
   public stage_1: cc.Node[] = [];
   
   @property(cc.Node)
   public stage_2: cc.Node[] = [];
   

   protected start(): void {
      this.onLoadStage_1();
      this.isBooster = false;
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

   }

   public onEnemyDeath(c: Character): void{

      //remove enemy ra khỏi list
      let index = this.list.indexOf(c);
      if (index != -1) {
         this.list.splice(index, 1);
      }

      //nếu kết thúc stage thì next stage
      if(this.list.length == 0){
         console.log("Done");
      }

      //enemy đầu tiên chết sẽ tạo booster ra
      if(!this.isBooster){
         this.isBooster = true;
         SimplePool.spawn(PoolType.Booster, c.node.getWorldPosition());
      }
   }

}
