// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Character from "./Character";
import PoolMember from "./Pool/SimplePool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemy extends Character {

    public onHit(damage: number){
    
        // super.onHit(damage);
        console.log("hit");
    }    

}
