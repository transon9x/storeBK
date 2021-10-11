const ThemeReducer = (state = {
    tableData: [],
    visible: false

}, action) => {
    switch (action.type) {
        case 'SET_MODE':
            return {
                ...state,
                mode: action.payload
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.payload
            }
        case 'GET_USER_API':
            return {
                ...state,
                tableData: action.tableData
            }
        case 'GET_MODAL':
            return {
                ...state,
                visible: action.visible
            }
        case 'OFF_MODAL':
            return {
                ...state,
                visible: action.visible
            }
        default:
            return state
    }
}

export default ThemeReducer