
import {CONSTANTS} from '../actions'

let listID = 2;
const initialState = [
    {
        title: "Monday",
        id: 0,
        cards: [
            {
                id: 0,
                skill: "Potatoe Farming"
            },
            {
                id: 1,
                skill: "Carrot Farming"
            }
        ]

    },
    {
        title: "Tuesday",
        id: 1,
        cards: [
            {
                id: 0,
                skill: "Carpentry"
            },
            {
                id: 1,
                skill: "Cooking"
            },
            {
                id: 2,
                skill: "Cutting wood"
            }
        ]

    }
]


const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList ={
                title:action.payload.title,
                cards:[],
                id: listID
            }
            listID += 1
            return [...state, newList]
        default:
            return state;
    }
}

export default ListReducer;