// Creates the Redux Store
const initState = {
    test: [
        { username: "ahamd", password: "123" }
    ],
    user: null,
    hotels: []
}

// Edits the Redux variables
const rootReducer = (state = initState, action) => {
    // console.log("action", action)
    if (action.type === "STORE-USER") {
        try {
            const serializedState = JSON.stringify({
                ...state,
                user: action.user
            });
            localStorage.setItem("state", serializedState)
        }
        catch (e) {
            console.log(e)
        }
        return {
            ...state,
            user: action.user
        }
    }
        if (action.type === "STORE-HOTELS") {
        try {
            const serializedState = JSON.stringify({
                ...state,
                user: action.user
            });
            localStorage.setItem("state", serializedState)
        }
        catch (e) {
            console.log(e)
        }
        return {
            ...state,
            hotels: action.hotels
        }
    }
    return state;
}

export default rootReducer;
