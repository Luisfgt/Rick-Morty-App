import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./action-types"


const initialState = {
    myFavorites: [],
    allFavorites: [],
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allFavorites: action.payload
            }
                ;
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allFavorites: action.payload
            }
                ;

        case FILTER:
            const filterByGender = [...state.allFavorites].filter((favorite) => favorite.gender === action.payload);
            return {
                ...state,
                myFavorites: filterByGender,
            }
                ;
        case ORDER:
            const favoriteOrdered = action.payload === 'A'
                ? [...state.allFavorites].sort((characterA, CharacterB) => characterA.id - CharacterB.id)
                : [...state.allFavorites].sort((characterA, CharacterB) => CharacterB.id - characterA.id)

            return {
                ...state,
                myFavorites: favoriteOrdered,
            }
                ;

        default:
            return { ...state }
    }
}

export default rootReducer;