// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Character from "./Character";
import PoolMember from "./Pool/PoolMember";
import SimplePool from "./Pool/SimplePool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends PoolMember {

    @property
    private speed: number = 2000;
    private damage: number = 4;

    public onInit(damage: number) {
        this.damage = damage;
    }

    update(dt: number) {
        const velocity = this.node.up.mul(dt).mul(this.speed);
        const newPos = this.node.position.add(velocity);

        // move bullet forward with info of spawn point (pivot & rotation)
        this.node.setPosition(newPos);

        // despawn bullet if out of bound
        if (this.node.position.y >= 950) {
            // NodePool.getInstance().putNode(this.node);
            SimplePool.despawn(this);
        }
    }

    // Despawn bullet if col with enemy
    onCollisionEnter(other: cc.Collider, self: cc.Collider) {

        if (other.node.group == 'enemy') {
        //     // spawn a Sparkle 
        //     // const Sparkle = SparklePool.getInstance().getSparkle();
        //     // Sparkle.setPosition(this.node.position);
        //     // Sparkle.setParent(GameManager.getInstance().Explosion_Hold);
        //     //TODO: test
            other.getComponent(Character).onHit(this.damage);
            SimplePool.despawn(this);
        }
    }

}
