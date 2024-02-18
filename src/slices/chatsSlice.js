import { createSlice } from '@reduxjs/toolkit'

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        chats: [
            {
                "messageId": 1,
                "messageText": 'hii',
                "messageTime": "13:28",
                "messageDate": '2/9/2024',
                "userMobileNo": '9673524106',
                "deliverdStatus": true,
                "readStatus": true,
            },

            {
                "messageId": 2,
                "messageText": 'bye',
                "messageTime": "13:29",
                "messageDate": '2/10/2024',
                "userMobileNo": '7744938053',
                "deliverdStatus": true,
                "readStatus": false,
            },

            {
                "messageId": 3,
                "messageText": 'kay',
                "messageTime": "13:48",
                "messageDate": '2/10/2024',
                "userMobileNo": '9673524106',
                "deliverdStatus": false,
                "readStatus": false,
            },
            {
                "messageId": 4,
                "messageText": 'hello',
                "messageTime": "01:28",
                "messageDate": '2/11/2024',
                "userMobileNo": '9673524106',
                "deliverdStatus": true,
                "readStatus": false,
            },
            {
                "messageId": 5,
                "messageText": 'good morning',
                "messageTime": "13:28",
                "messageDate": '2/12/2024',
                "userMobileNo": '7744938053',
                "deliverdStatus": true,
                "readStatus": false,
            },
            {
                "messageId": 6,
                "messageText": 'goodnight',
                "messageTime": "13:28",
                "messageDate": '2/14/2024',
                "userMobileNo": '9673524106',
                "deliverdStatus": true,
                "readStatus": true,
            },
            {
                "messageId": 7,
                "messageText": 'goodnight',
                "messageTime": "13:28",
                "messageDate": '2/14/2024',
                "userMobileNo": '9673524106',
            },
            {
                "messageId": 8,
                "messageText": 'goodnight',
                "messageTime": "13:28",
                "messageDate": '2/14/2024',
                "userMobileNo": '9673524106',
            },
            {
                "messageId": 9,
                "messageText": 'goodnight',
                "messageTime": "13:28",
                "messageDate": '2/14/2024',
                "userMobileNo": '9673524106',
            },
            {
                "messageId": 10,
                "messageText": 'goodnight',
                "messageTime": "13:28",
                "messageDate": '2/14/2024',
                "userMobileNo": '9673524106',
            }
        ],
        searchText: ""
    },
    reducers: {
        setChats: (state, action) => {
            state.chats.push(action.payload)
        },
        setSearchText : (state, action) => {
            state.searchText = action.payload
        }
    },
})

export const { setChats, setSearchText } = chatsSlice.actions

export default chatsSlice.reducer