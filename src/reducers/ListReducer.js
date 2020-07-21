const initialState = [
    {
        id: 0,
        title: "Monday",
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
        id: 1,
        title: "Tuesday",
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
        default:
            return state;
    }
}

export default ListReducer;