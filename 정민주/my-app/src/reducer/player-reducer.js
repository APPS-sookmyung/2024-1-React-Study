export default function playerReducer(player,action){
    switch(action.type){
        case 'left':{
            return ({
                x: player.x-10,
                y: player.y,
                face: -1
            })
        }
        case 'right':{
            return ({
                x: player.x+10,
                y: player.y,
                face: 1
            })
        }
        default: {
            throw Error("Unknown Operation")
        }
    }

}