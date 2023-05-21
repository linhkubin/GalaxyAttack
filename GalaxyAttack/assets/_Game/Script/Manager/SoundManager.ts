// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

export enum AudioType {
    FX_Bullet = 0,
    FX_EnemyDie = 1,
    FX_Booster = 2,
}


@ccclass
export default class SoundManager extends cc.Component {

   // singleton
   private static ins : SoundManager;
   public static get Ins() : SoundManager
   {
      return SoundManager.ins;
   }

   protected onLoad(): void {
       SoundManager.ins = this;
   }
   //------------------------------------

    @property([cc.AudioClip])
    clips: cc.AudioClip[] = [];
        
    private audies: cc.AudioSource[] = [];

    protected start(): void {
        for (let i = 0; i < this.clips.length; i++){
            let node = new cc.Node().addComponent(cc.AudioSource);
            node.clip = this.clips[i];
            this.audies.push(node);
        }
    }

    public PlayClip(type: AudioType): void {
        console.log(type);
        console.log(this.audies.length);
        this.audies[type].play();
    }
}
