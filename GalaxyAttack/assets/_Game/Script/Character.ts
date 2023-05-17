// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Character extends cc.Component {

    private hp : number;

    //khai bao action
    public onDeathAction: (e:Character) => void;

    //getter
    get isDead(): boolean {
        return this.hp <= 0;
    }

    public onInit(hp: number){
        this.hp = hp;
    }

    public onHit(damage: number){
        if(!this.isDead){
            this.hp -= damage;
            if(this.isDead){
                this.onDeathAction(this);
            }
        }
    }

    // //test
    // protected onLoad(): void {
    //     this.onDeathAction = this.onEnemyDeath;
    // }

    // public onEnemyDeath(e : Character): void{

    // }
}
