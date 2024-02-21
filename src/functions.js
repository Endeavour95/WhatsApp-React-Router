import { setButtonLeftTopNavigation, setLeftBelowSearchBarButtons, setLeftTopNavigationButtons } from "./slices/buttonsSlice";
import { setChats, setSearchText, updateMessageStatus } from "./slices/chatsSlice";
import { setSelectedUser, setUnreadMessages } from "./slices/usersSlice";

export const openWhatsAppDesktop = () => {
    return (dispatch) => {
        const microsoftStoreLink = 'https://www.microsoft.com/store/productId/9NKSQGP7F2NH?ocid=pdpshare';
        window.open(microsoftStoreLink, '_blank');
    };
};

export const handleLeftPannelBelowSearchBarButtons = (obj) => {
    return (dispatch) => {
        dispatch(setLeftBelowSearchBarButtons(obj))
    }
}

export const handleLeftPannelSearchBar = (value) => {
    return (dispatch) => {
        dispatch(setSearchText(value))
    }
}

export const handleLeftTopNavigation = (obj) => {
    return (dispatch) => {
        dispatch(setLeftTopNavigationButtons(obj))
    }
}

export const handleLeftUsersList = (obj) => {
    return (dispatch) => {
        dispatch(setSelectedUser(obj))
        dispatch(setUnreadMessages(obj))
    }
}

export const handlePersonalProfileInfoDrawer = (obj) => {
    return (dispatch) => {
        dispatch(setButtonLeftTopNavigation(obj))
    }
}


export const generateMessage = (text) => {
    return (dispatch, getState) => {
        const data = getState
        console.log("sdfsdfsafdasdfsd", data)
        const chats = data.chats.chats
        const selectedUser = data.peoples.selectedUser
        dispatch(setChats({
            "messageId": chats.length < 1 ? 1 : Number(chats[chats.length - 1].messageId) + 1,
            "messageText": text,
            "messageTime": new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            "messageDate": new Date().toLocaleDateString([], { year: 'numeric', month: 'numeric', day: 'numeric', }),
            "userMobileNo": selectedUser.userMobileNo,
            "deliveredStatus": false,
            "readStatus": false,
        }))
        stateUpdated(text)
    }
}

function stateUpdated(text) {
    return (dispatch, getState) => {
        const chats = getState().chats.chats
        const selectedUser = getState().peoples.selectedUser
        const lastChat = chats[chats.length - 1]
        if (Object.hasOwn(lastChat, "deliveredStatus")) {
            setTimeout(() => {
                dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "deliveredStatus", value: true }))
            }, 2000);
            setTimeout(() => {
                dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "readStatus", value: true }))
            }, 5000);
            setTimeout(() => {
                generateReplyMessage(text)
            }, 10000);
        }
    }
}

function generateReplyMessage(text) {
    return (dispatch, getState) => {
        const chats = getState().chats.chats
        const selectedUser = getState().peoples.selectedUser
        dispatch(setChats({
            "messageId": chats.length < 1 ? 1 : Number(chats[chats.length - 1].messageId) + 1,
            "messageText": text + " reply Message",
            "messageTime": new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            "messageDate": new Date().toLocaleDateString([], { year: 'numeric', month: 'numeric', day: 'numeric', }),
            "userMobileNo": selectedUser.userMobileNo,
        }))
    }
}