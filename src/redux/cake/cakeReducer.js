import {BUY_Cake} from './cakeTypes'

const initalState = {
    numOfCakes :10
}

export const cakeReducer=(state=initalState,action)=>{
    switch(action.type){
        case BUY_Cake :return{
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

