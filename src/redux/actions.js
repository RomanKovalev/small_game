export const setGameConfig = gameConfig => ({
    type: "SET_GAME_CONFIG",
    payload: gameConfig
})
export const setName = name => ({
    type: "SET_NAME",
    payload: name
})
export const setMode = mode => ({
    type: "SET_MODE",
    payload: mode
})
export const setMessage = message => ({
    type: "SET_MESSAGE",
    payload: message
})
export const addAISquare = square => ({
    type: "ADD_AI_SQUARE",
    payload: square
})
export const addHumanSquare = square => ({
    type: "ADD_HUMAN_SQUARE",
    payload: square
})
export const setActive = square => ({
    type: "SET_ACTIVE",
    payload: square
})
export const setStatus = status => ({
    type: "SET_STATUS",
    payload: status
})
export const setResultTable = results => ({
    type: "SET_RESULT_TABLE",
    payload: results
})
export const setShowed = showed => ({
    type: "SET_SHOWED",
    payload: showed
})
export const setPage = page => ({
    type: "SET_PAGE",
    payload: page
})
export const setButtonLabel = label => ({
    type: "SET_BUTTON_LABEL",
    payload: label
})
