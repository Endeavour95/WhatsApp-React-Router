import { createSlice } from '@reduxjs/toolkit'

export const buttonsSlice = createSlice({
    name: 'buttons',
    initialState: {
        leftTopNavigationButtons: {
            "personalProfileIcon": false,
            "communityOutlineIcon": false,
            "statusUnreadIcon": false,
            "newsletterOutlineIcon": false,
            "newChatOutlineIcon": false,
            "menuDotIcon": false
        },
    },
    reducers: {
        setLeftTopNavigationButtons: (state, action) => {
            state.leftTopNavigationButtons = Object.fromEntries(Object.entries(state.leftTopNavigationButtons).map(([name, value]) => [name, name === action.payload.buttonName ? action.payload.buttonValue : false]))
        },
        setButtonLeftTopNavigation: (state, action) => {
            state.leftTopNavigationButtons[action.payload.buttonName] = action.payload.buttonValue
        }
    },
})

export const { setLeftTopNavigationButtons, setButtonLeftTopNavigation } = buttonsSlice.actions

export default buttonsSlice.reducer