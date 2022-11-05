
const initState = {
    isLoading: false
}
export const appReducer = (state: InitStateType = initState, action: ActionTypes): InitStateType => {
    switch (action.type) {
        case "SET_IS_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }
}


// ACTION CREATORS
const setIsLoadingAC = (value: boolean) => {
    return { type: "SET_IS_LOADING", isLoading: value}
}


// TYPES
type InitStateType = {
    isLoading: boolean
}

type ActionTypes = SetIsLoadingType

type SetIsLoadingType = ReturnType<typeof setIsLoadingAC>