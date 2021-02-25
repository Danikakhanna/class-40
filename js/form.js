class Form{
    constructor(){
 this.title=createElement('h2')
 this.input=createInput("").attribute("placeFolder","name")
 this.button=createButton("play")
 
 this.reset=createButton("reset")
 this.replay=createButton("replay")
 this.greeting=createElement('h2')
 this.greeting2=createElement('h2')
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
        this.title.style('color','blue')
        this.title.style('font-size','50px')
        this.title.html('Car Racing Key')
        this.title.position(displayWidth/2-50,20)
        this.input.position(displayWidth/2-50,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.reset.position(displayWidth-160,20)
        this.replay.position(displayWidth-80,20)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html('Welcome'+player.name)
            this.greeting.position(displayWidth/2-50,displayHeight/4)
    
        })
    }
    end(){
        this.greeting2.html(player.name+ ' rank Is' +player.rank)
        this.greeting2.position(displayWidth/2-50,displayHeight/4)
        this.reset.mousePressed(()=>{
            this.greeting2.hide()
           game.updateState(0)
            player.updateCount(0)
           player.updaterank(0)
    
        })
        this.replay.mousePressed(()=>{
            database.ref('players').remove()
            clear()
            game.start()
        })
    }
}