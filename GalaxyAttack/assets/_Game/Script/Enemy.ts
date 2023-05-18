// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Character from "./Character";
import LevelManager from "./LevelManager";
import SimplePool from "./Pool/SimplePool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemy extends Character {

    //nhận damage
    public onHit(damage: number){
        super.onHit(damage);
        // console.log("hit");
    }    

    //enemy death sẽ đưa nó về pool
    protected onDeath(){
        // super.onDeath();
        LevelManager.Ins.onEnemyDeath(this);
        SimplePool.despawn(this);
    }

    //hàm di chuyển sang vị trí mới
    public moveTo(target: cc.Vec3, duration: number, isWorldSpace: boolean): void {
        // Lấy vị trí target position của node
        const targetPosition = isWorldSpace ? this.node.getLocalPosition(target) : target;

        // Tạo một tween để di chuyển node từ vị trí hiện tại đến vị trí mới (position)
        cc.tween(this.node)
            .to(duration, 
                { position: targetPosition },
                {   easing: "linear", }
                )
            .start();
    }

}
