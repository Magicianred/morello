import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 5;
const initialState = [
  {
    title: "Monday",
    id: 0,
    cards: [
      {
        id: 0,
        skill: "Potatoe Farming",
      },
      {
        id: 1,
        skill: "Carrot Farming",
      },
    ],
  },
  {
    title: "Tuesday",
    id: 1,
    cards: [
      {
        id: 0,
        skill: "Carpentry",
      },
      {
        id: 1,
        skill: "Cooking",
      },
      {
        id: 2,
        skill: "Cutting wood",
      },
      {
        id: 3,
        skill: "Ferrying Fish",
      },
    ],
  },
];

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID,
      };
      listID += 1;
      return [...state, newList];
    
      case CONSTANTS.ADD_CARD:
          const newCard = {
              skill: action.payload.text,
              id:cardID
          }
          cardID += 1;
         const newState = state.map(list =>{
              if(list.id === action.payload.listID){
                  return {
                      ...list,
                      cards:[...list.cards, newCard]
                  }
                  //
              } else {
                  return list;
              }
          })
          return newState

    default:
      return state;
  }
};

export default ListReducer;
