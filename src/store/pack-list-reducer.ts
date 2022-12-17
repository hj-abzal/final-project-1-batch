import {Dispatch} from "redux";
import MainPacksList from "../pages/PacksList/MainPacksList";
import {packsApi} from "../api/api";

export type PackListType = {
    _id: string;
    user_id: string;
    user_name: string;
    private: string;
    name: string;
    path: string;
    garde: number;
    shots: number;
    cardsCount: number;
    type: string;
    rating: number;
    created: Date;
    updated: Date;
    more_id: number;
}
export type PackListResponseType = {
    cardPacks: PackListType[],
    page: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    token: string;
    tokenDeathTime: number
}
export type SearchParamsType = {
    packName: string;
    min: number;
    max: number;
    sortPacks: number;
    page: number;
    pageCount: number;
    isMine: boolean;
}
export type InitStateType = {
    packsList: PackListResponseType,
    searchParams: SearchParamsType
}
const initialState: InitStateType = {
    packsList: {
        cardPacks: [],
        page: 1,
        pageCount: 4,
        cardPacksTotalCount: 0,
        minCardsCount: 1,
        maxCardsCount: 1,
        token: "",
        tokenDeathTime: 1,
    } as PackListResponseType,
    searchParams: {
        packName: "",
        min: 0,
        max: 100,
        sortPacks: 0,
        page: 1,
        pageCount: 4,
        isMine: false,
    }
}


type ActionType = setPacksAT

export const packListReducer = (state: InitStateType = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "tyuiop":
            return {
                ...state,
                packsList: action.packsLists
            }

        default:
            return state
    }
}
export const setPacksAC = (packsLists: PackListResponseType): setPacksAT => {
    return {type: 'tyuiop', packsLists}

}
type setPacksAT = {
    type: 'tyuiop',
    packsLists: PackListResponseType
}
export const getPackListTC=()=>{
    return (dispatch:Dispatch)=>{

        //store get
        packsApi.get(`packName=`)
            .then((res)=>{
                dispatch(setPacksAC(res.data))

            })
    }
}
