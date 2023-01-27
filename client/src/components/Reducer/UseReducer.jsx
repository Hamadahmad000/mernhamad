
export const initialState = false

export const reducer = (state,action)=>{
    console.log(action)
    if(action.type === "USER"){
        return action.payload
    }
    return state
}