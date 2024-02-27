import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    chats: [
        {
            messageId: 1,
            messageText: 'hii',
            messageTime: "13:28",
            messageDate: '2/9/2024',
            userMobileNo: '9673524106',
            deliverdStatus: true,
            readStatus: true,
        },

        {
            messageId: 2,
            messageText: 'bye',
            messageTime: "13:29",
            messageDate: '2/10/2024',
            userMobileNo: '7744938053',
            deliveredStatus: true,
            readStatus: false,
        },

        {
            messageId: 3,
            messageText: 'kay',
            messageTime: "13:48",
            messageDate: '2/10/2024',
            userMobileNo: '9673524106',
            deliveredStatus: false,
            readStatus: false,
        },
        {
            messageId: 4,
            messageText: 'hello',
            messageTime: "01:28",
            messageDate: '2/11/2024',
            userMobileNo: '9673524106',
            deliveredStatus: true,
            readStatus: false,
        },
        {
            messageId: 5,
            messageText: 'good morning',
            messageTime: "13:28",
            messageDate: '2/12/2024',
            userMobileNo: '7744938053',
            deliveredStatus: true,
            readStatus: false,
        },
        {
            messageId: 6,
            messageText: 'goodnight',
            messageTime: "13:28",
            messageDate: '2/14/2024',
            userMobileNo: '9673524106',
            deliveredStatus: true,
            readStatus: true,
        },
        {
            messageId: 7,
            messageText: 'goodnight',
            messageTime: "13:28",
            messageDate: '2/14/2024',
            userMobileNo: '9673524106',
        },
        {
            messageId: 8,
            messageText: 'goodnight',
            messageTime: "13:28",
            messageDate: '2/14/2024',
            userMobileNo: '9673524106',
        },
        {
            messageId: 9,
            messageText: 'goodnight',
            messageTime: "13:28",
            messageDate: '2/14/2024',
            userMobileNo: '9673524106',
        },
        {
            messageId: 10,
            messageText: 'goodnight',
            messageTime: "13:28",
            messageDate: '2/14/2024',
            userMobileNo: '9673524106',
        }
    ],
    searchText: "",
}

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setNewChats: (state, action) => {
            state.chats = action.payload
        },
        setChats: (state, action) => {
            state.chats.push(action.payload)
            // console.log("updateState", state.chats)
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
    // extraReducers: (builder) => {
    //     builder.addCase(fetchChats.fulfilled, (state, action) => {
    //         // let data = action.payload
    //         // console.log("payload", data.chats)
    //         state.chats = action.payload.chats;
    //     });
    // },
})

export const { setNewChats, setChats, setSearchText, updateMessageStatus } = chatsSlice.actions

export default chatsSlice.reducer