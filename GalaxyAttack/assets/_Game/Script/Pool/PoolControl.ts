// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PoolMember from "./PoolMember";
import SimplePool from "./SimplePool";

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

    // @property({
    //     type: Array(PoolAmount),
    //     displayName: "Custom Objects",
    //     serializable: true,
    // })
    @property(Array(PoolAmount))
    pools: PoolAmount[] = [];

    onLoad () {
        for (let i = 0; i < this.pools.length; i++){
            SimplePool.preload(this.pools[i].prefab, this.pools[i].root, this.pools[i].amount);
        }
    }

}
