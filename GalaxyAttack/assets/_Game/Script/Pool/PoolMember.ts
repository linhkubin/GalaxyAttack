// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SimplePool from "./SimplePool";
import { PoolType } from "./SimplePool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PoolMember extends cc.Component {
    @property({ type: cc.Enum(PoolType) })
    public poolType: PoolType = PoolType.None;

    public i: number = 10;
}
