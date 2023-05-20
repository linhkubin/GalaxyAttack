// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolMember from "./PoolMember";
import SimplePool, { PoolType } from "./SimplePool";

const {ccclass, property, inspector} = cc._decorator;

@ccclass
export class PoolAmount {
    @property(cc.Node)
    public root: cc.Node = null;

    @property(cc.Prefab)
    public prefab: PoolMember = null;

    @property(cc.Integer)
    public amount: number = 0;
}

@ccclass
export default class PoolControl extends cc.Component {

    @property({
        type: Array(PoolAmount),
        displayName: "Custom Objects",
        serializable: true,
    })
    pools: PoolAmount[] = [];

    // @property(cc.Prefab)
    // public prefab: PoolMember = null;

    onLoad () {
        for (let i = 0; i < this.pools.length; i++){
            SimplePool.preload(this.pools[i].prefab, this.pools[i].root, this.pools[i].amount);
        }

        // let member = cc.instantiate(this.prefab).getComponent(PoolMember);
        // console.log(member != null);
        // console.log(member.node != null);
        // console.log(member.i);
        
        // member.node.setParent(this.node);
        // member.node.setPosition(cc.v3(0,0,0));

        // SimplePool.preload(this.prefab, this.node, 2);

        // Bullet_Info.node.setPosition(Pos);
        // Bullet_Info.node.setParent(this.BulletHold);

        // let member = SimplePool.spawn(PoolType.Bullet_1, cc.v3(0,0,0), 90);

       
        // console.log(member.node.angle);

        // SimplePool.spawn(PoolType.Bullet_1, cc.v3(100,0,0), 180).i = 100;
        // SimplePool.spawn(PoolType.Bullet_1, cc.v3(200,0,0), 30).i = 100;

        // SimplePool.despawn(member);


    }

}
