// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import LevelManager from "./Manager/LevelManager";
import PoolMember from "./Pool/PoolMember";
import SimplePool from "./Pool/SimplePool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PowerUp extends PoolMember {

    //script này copy của Khánh cho nhanh, mà hình như ô Khánh này copy của ChatGPT hay sao mà tự dưng nhìn comment chuẩn chỉ thế
    private speed: number = 500;
    private time: number = 0;
    private threshold: number = 20;

    onEnable() {
        this.time = 1;
    }
    
    update(dt) {

        if (this.time > 0) {
            // calculate pivot of boost: when active is move down to end screen height
            const direction = cc.v2(0, -1).rotateSelf(this.node.angle * Math.PI / 180);

            // add info with deltatime to boost interact with player
            const velocity = direction.mul(this.speed);
            const delta = velocity.mul(cc.director.getDeltaTime());
            const v3Delta = new cc.Vec3(delta.x, delta.y, 0);
            const newPos = this.node.position.add(v3Delta);

            // move down the boost
            this.node.setPosition(newPos);

            // after time move on screen, boost will move toward player
            this.time -= dt;
        }
        else {
            //get info player
            const playerPos = LevelManager.Ins.ship.node.position;

            //get info this boost
            const boostPos = this.node.position;

            // calculate distance btw this boost with player
            const distance = playerPos.sub(boostPos).mag();
            const direction = playerPos.sub(boostPos).normalize();

            // movement action
            const movement = direction.mul(2000 * dt);

            // move this boost towards player node
            this.node.position = boostPos.add(movement);

            // checking if distance btw this boost with player = 0, it will despawn self
            if (distance < this.threshold) {
                this.onDespawn();
            }
        }
    }

    onDespawn() {
        LevelManager.Ins.ship.onPowerUp();
        SimplePool.despawn(this);
    }

}
