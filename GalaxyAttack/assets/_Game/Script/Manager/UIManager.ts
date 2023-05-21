// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
 
@ccclass
export default class UIManager extends cc.Component {

    // singleton
    private static ins : UIManager;
    public static get Ins() : UIManager
    {
       return UIManager.ins;
    }
 
    protected onLoad(): void {
        UIManager.ins = this;

        for (let i = 0; i < this.prefabs.length; i++){
            this.roots[i] = new cc.Node();
            this.roots[i].setParent(this.node);
        }
    }
    //------------------------------------
    
    // open UI theo index, UI nào thứ tự càng cao thì layer càng cao
    // close UI cũng theo index luôn
    // UI có nút bấm nào thì nên tạo 1 function rồi kéo thả vào trong này, ví dụ như ấn end card button

    // prefab để show ui lên
    @property([cc.Prefab])
    prefabs : cc.Node[] = [];

    //list roots node để show layer theo đúng thứ tự mong muốn
    roots : cc.Node[] = [];

    //list canvas để lấy link
    canvas : cc.Node[] = [];

    //open theo index
    public onOpen(index: number){
        if(this.canvas[index] == null) {
            this.canvas[index] = cc.instantiate(this.prefabs[index]);
            this.canvas[index].setParent(this.roots[index]);
        }

        this.canvas[index].active = true;
    }

    //close theo index
    public onClose(index: number){
        if(this.canvas[index] != null){
            this.canvas[index].active = false;
        }
    }

    public endcardButton(){

    }
}
