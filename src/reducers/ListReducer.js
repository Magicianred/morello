const initialState = [{
    title: "monday",
    id: 0,
    cards: [
        {
            id: 0,
            skill: "Potatoe Farming"
        },
        {
            id: 1,
            skill: "carrot Farming"
        }
    ]

}]


const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default ListReducer;