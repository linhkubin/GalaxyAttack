// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolMember from "./Pool/PoolMember";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Character extends PoolMember {

    private hp : number;

    //khai bao action
    // public onDeathAction: (c:Character) => void;

    //getter
    get isDead(): boolean {
        return this.hp <= 0;
    }

    //khởi tạo
    public onInit(hp: number){
        this.hp = hp;
    }

    //nhận damage
    public onHit(damage: number){
        if(!this.isDead){
            this.hp -= damage;
            if(this.isDead){
                this.onDeath();
            }
        }
    }

    protected onDeath(){
        // this.onDeathAction(this);
    }

}
