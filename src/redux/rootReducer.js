import {combineReducers} from 'redux'

import {cakeReducer} from './cake/cakeReducer'
import {icecreamReducer} from './Icecream/icecreamReducer'


 const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:icecreamReducer

})

export default rootReducer