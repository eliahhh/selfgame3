class User1{

    constructor(){

        this.index = null;
        this.email1 = null;
        this.input = null;
        this.radio1 = null;
        this.radio2 = null;
        this.radio3 = null;
        this.radio4 = null;
        this.radio5 = null;

        
    }

    getCount(){

        var personCountRef = database.ref('personCount');
        personCountRef.on("value",(data)=>{
            personCount = data.val();
        })
    }
    updateCount(count){

        database.ref('/').update({
            personCount:count
        })
    }
    update(){

        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            input:this.input,
            email:this.email,
            radio1:this.radio1,
            radio2:this.radio2,
            radio3:this.radio3,
            radio4:this.radio4,
            radio5:this.radio5,
        })
    }
    reset(){

        this.index = null;
        this.email1 = null;
        this.input = null;
        this.radio1 = null;
        this.radio2 = null;
        this.radio3 = null;
        this.radio4 = null;
        this.radio5 = null;

    }
}