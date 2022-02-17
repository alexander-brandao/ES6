class Tv{

    constructor(){
        // underline "_" is a convention for encapsulation
        this._publicChannelAvailable = Array(2,4,6,8,10,12)
        this._currentChannel = 10
        this._volume = 10
    }

    // getters and setters for recover the values (good practices)

    get activeChannel(){
        return this._currentChannel
    }

    set activeChannel(channel){
        if(this._publicChannelAvailable.indexOf(channel) !== -1){
            this._currentChannel = channel
        }
    }
}

let tv = new Tv()

tv.activeChannel = 12
document.write(tv.activeChannel)