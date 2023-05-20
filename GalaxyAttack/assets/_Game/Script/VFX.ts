// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolMember from "./Pool/PoolMember";
import SimplePool from "./Pool/SimplePool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class VFX extends PoolMember {

    @property({ type: cc.Animation })
    anim : cc.Animation = null;

    @property({ type: cc.Float })
    timeAlive : number = 1;

    protected onEnable(): void {

        this.anim.play();

        // cc.tween(this.node).delay(0.5).call(()=> SimplePool.despawn(this));
        //delay 0.5s thi despawn
        setTimeout(() => {
            SimplePool.despawn(this);
        }, this.timeAlive * 1000);
    }
}
