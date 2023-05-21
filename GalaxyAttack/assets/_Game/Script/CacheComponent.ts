// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Character from "./Character";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CacheComponent {

    private static linkCharacter: Map<cc.Collider, Character> = new Map<cc.Collider, Character>;

    public static getCharacter(col: cc.Collider): Character{
        if(!this.linkCharacter.has(col)){
            this.linkCharacter.set(col, col.getComponent(Character));
        }
        return this.linkCharacter.get(col);
    }
    
}
