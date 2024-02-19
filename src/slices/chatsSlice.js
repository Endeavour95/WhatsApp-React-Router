import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
    try {
        const response = await axios.get('https://e7018a72c3904682ac401fe1f6b3a773.api.mockbin.io/');
        return response.data;
    } catch (error) {
        throw error;
    }
});


export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        chats: [
            // {
            //     "messageId": 1,
            //     "messageText": 'hii',
            //     "messageTime": "13:28",
            //     "messageDate": '2/9/2024',
            //     "userMobileNo": '9673524106',
            //     "deliverdStatus": true,
            //     "readStatus": true,
            // },

            // {
            //     "messageId": 2,
            //     "messageText": 'bye',
            //     "messageTime": "13:29",
            //     "messageDate": '2/10/2024',
            //     "userMobileNo": '7744938053',
            //     "deliverdStatus": true,
            //     "readStatus": false,
            // },

            // {
            //     "messageId": 3,
            //     "messageText": 'kay',
            //     "messageTime": "13:48",
            //     "messageDate": '2/10/2024',
            //     "userMobileNo": '9673524106',
            //     "deliverdStatus": false,
            //     "readStatus": false,
            // },
            // {
            //     "messageId": 4,
            //     "messageText": 'hello',
            //     "messageTime": "01:28",
            //     "messageDate": '2/11/2024',
            //     "userMobileNo": '9673524106',
            //     "deliverdStatus": true,
            //     "readStatus": false,
            // },
            // {
            //     "messageId": 5,
            //     "messageText": 'good morning',
            //     "messageTime": "13:28",
            //     "messageDate": '2/12/2024',
            //     "userMobileNo": '7744938053',
            //     "deliverdStatus": true,
            //     "readStatus": false,
            // },
            // {
            //     "messageId": 6,
            //     "messageText": 'goodnight',
            //     "messageTime": "13:28",
            //     "messageDate": '2/14/2024',
            //     "userMobileNo": '9673524106',
            //     "deliverdStatus": true,
            //     "readStatus": true,
            // },
            // {
            //     "messageId": 7,
            //     "messageText": 'goodnight',
            //     "messageTime": "13:28",
            //     "messageDate": '2/14/2024',
            //     "userMobileNo": '9673524106',
            // },
            // {
            //     "messageId": 8,
            //     "messageText": 'goodnight',
            //     "messageTime": "13:28",
            //     "messageDate": '2/14/2024',
            //     "userMobileNo": '9673524106',
            // },
            // {
            //     "messageId": 9,
            //     "messageText": 'goodnight',
            //     "messageTime": "13:28",
            //     "messageDate": '2/14/2024',
            //     "userMobileNo": '9673524106',
            // },
            // {
            //     "messageId": 10,
            //     "messageText": 'goodnight',
            //     "messageTime": "13:28",
            //     "messageDate": '2/14/2024',
            //     "userMobileNo": '9673524106',
            // }
        ],
        searchText: ""
    },
    reducers: {
        setNewChats: (state, action) => {
            state.chats = action.payload
        },
        setChats: (state, action) => {
            state.chats.push(action.payload)
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
        updateMessageStatus: (state, action) => {
            let message = state.chats.find((chat) => chat.messageId === action.payload.messageId);

            if (message) {
                message[action.payload.status] = action.payload.value;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChats.fulfilled, (state, action) => {
            console.log("payload", action.payload)
            // state.chats = action.payload;
        });
    },
})

export const { setNewChats, setChats, setSearchText, updateMessageStatus } = chatsSlice.actions

export default chatsSlice.reducer