
const initialState = {
    uniqueCount: localStorage.getItem("videoCount") === null ? [] : localStorage.getItem("videoCount").split(",")

}

const mainReducer = (prevState = initialState, action) => {
    if (action.type === "INC_COUNT") {
        const updatedVal = prevState.uniqueCount.indexOf(action.videoId) >= 0 ? [...prevState.uniqueCount] : [...prevState.uniqueCount, action.videoId];


        localStorage.setItem("videoCount", updatedVal)
        return { ...prevState, uniqueCount: [...updatedVal] }
    }

    return { ...prevState }
}

export default mainReducer;