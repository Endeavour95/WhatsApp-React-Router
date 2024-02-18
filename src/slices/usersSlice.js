import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        personalInfo: {
            "name": "Ashutosh Verulkar",
            "profilePicture": "",
            "countryCode": "+91",
            "mobileNo": "7218724953",
            "about": "I am not perfect but I am limited edition",
        },
        users: [
            {
                "userName": "Rameshwar Varpe",
                "profilePicture": "",
                "countryCode": "+91",
                "userMobileNo": "9673524106",
                "userAbout": "Urgent calls only",
                "userLastSeen": "15:23",
                "userUnreadMessages": "8",
            },
            {
                "userName": "Harshal Dhokane",
                "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/425129692_689143370096096_5853688436436413836_n.jpg?ccb=11-4&oh=01_AdS1_cEWdewmQJNLrvr5rhTFCL8OWPN600Z5p0be3honrw&oe=65D70026&_nc_sid=e6ed6c&_nc_cat=104",
                "countryCode": "+91",
                "userMobileNo": "7744938053",
                "userAbout": "Sleeping",
                "userLastSeen": "14:23",
                "userUnreadMessages": "9",
            },
            {
                "userName": "Sanket Gupta",
                "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/422481063_763291511911523_3485251882021467671_n.jpg?ccb=11-4&oh=01_AdTu-UmaGIOyDHhUCoaqFD6fohwRqMxzkpOglMDYTqYKaA&oe=65D39B50&_nc_sid=e6ed6c&_nc_cat=104",
                "countryCode": "+91",
                "userMobileNo": "8329086681",
                "userAbout": "EVERYDAY IN EVERYWAY I'M GETTING BETTER AND BETTER 😇",
                "userLastSeen": "03:00",
                "userUnreadMessages": "",
            },
            {
                "userName": "Abhishek Chopade",
                "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/312280415_693376235414492_8643811253461028228_n.jpg?ccb=11-4&oh=01_AdRvjs-c305nvIRH0Zk6FZT044yIFGHzryVvpgJT72Qknw&oe=65D78539&_nc_sid=e6ed6c&_nc_cat=102",
                "countryCode": "+91",
                "userMobileNo": "9766764627",
                "userAbout": "At work",
                "userLastSeen": "05:00",
                "userUnreadMessages": "",
            },
            {
                "userName": "Prajwal Ingole",
                "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/366895269_1281219732765291_2344527761445279511_n.jpg?ccb=11-4&oh=01_AdTgEf22MZXMwBhjnqh_IK1cJeXRT6c1n7IGdk6fjzvGMQ&oe=65D78738&_nc_sid=e6ed6c&_nc_cat=103",
                "countryCode": "+91",
                "userMobileNo": "9075809004",
                "userAbout": "Battery about to die",
                "userLastSeen": "24:00",
                "userUnreadMessages": "",
            },
            {
                "userName": "Nikhilesh Mane",
                "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/379727675_1379561979616037_7922129445927542609_n.jpg?ccb=11-4&oh=01_AdRTfAs4DKjvazSPotZLZL2peIym2qNKzmmebs0BZjS_RQ&oe=65D6C6EE&_nc_sid=e6ed6c&_nc_cat=107",
                "countryCode": "+91",
                "userMobileNo": "9075490251",
                "userAbout": "कुळ-हिंदुत्व👑 सण-शिवजयंती💥 रुबाब-मराठा💪 शान-भगवा झेंडा🚩 दैवत-छत्रपती शिवाजी महाराज🙏 जन्मभूमी- अमरावती🚩 आमच ईमान स्वराज्य 🔱",
                "userLastSeen": "23:00",
                "userUnreadMessages": "",
            },
            {
                "userName": "Aditya",
                "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/383670737_350499304234701_3256428619540089720_n.jpg?ccb=11-4&oh=01_AdRZlCAB99R3jLn-V1nFg2_aos87f9K-iAFN8H0wIS2b_A&oe=65D6C99F&_nc_sid=e6ed6c&_nc_cat=108",
                "countryCode": "+91",
                "userMobileNo": "8668559528",
                "userAbout": "पंख त्यांचेच मजबूत असतात जे एकटे उडतात, आणि प्रवाहाविरुद्ध झेप घेतात.",
                "userLastSeen": "01:27",
                "userUnreadMessages": "9",
            },
            {
                "userName": "Om Chokhat",
                "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/412096892_3622341318094188_2561229067796895047_n.jpg?ccb=11-4&oh=01_AdR7fsboa4T8Qyl-exEi5MVdR6E2Z9CY1yoMWBbk10uuEQ&oe=65D36CA6&_nc_sid=e6ed6c&_nc_cat=111",
                "countryCode": "+91",
                "userMobileNo": "9284486105",
                "userAbout": "🏢CIVIL 😎",
                "userLastSeen": "",
                "userUnreadMessages": "5",
            },
            {
                "userName": "Mangesh Ganjare",
                "profilePicture": "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/421376558_1452364815350883_4050033814544328015_n.jpg?ccb=11-4&oh=01_AdTwf9-ybt9LPz_69bAcB14uLJ2yjKBedfMOJMwzk1Jcfw&oe=65D775A7&_nc_sid=e6ed6c&_nc_cat=108",
                "countryCode": "+91",
                "userMobileNo": "9767746080",
                "userAbout": "At work",
                "userLastSeen": "",
                "userUnreadMessages": "8",
            },
            {
                "userName": "Prathamesh Gode",
                "profilePicture": "",
                "countryCode": "+91",
                "userMobileNo": "8208210160",
                "userAbout": "Available",
                "userLastSeen": "",
                "userUnreadMessages": "2",
            },
            {
                "userName": "Akash Kharat",
                "profilePicture": "https://media-pnq1-2.cdn.whatsapp.net/v/t61.24694-24/298671268_436032878476595_472822148243604340_n.jpg?ccb=11-4&oh=01_AdQ_r3JDM_JnDje8XaAlYCBBe_RdyaCdCdeADVM_AaDxHQ&oe=65DD990C&_nc_sid=e6ed6c&_nc_cat=109",
                "countryCode": "+91",
                "userMobileNo": "9373429068",
                "userAbout": "Available",
                "userLastSeen": "",
                "userUnreadMessages": "2",
            },
        ],
        selectedUserMobileNo: "",
    },
    reducers: {
        setUsers: (state, action) => {
            state.users.push(action.payload)
        },
        setUnreadMessages: (state, action) => {
            const userToUpdate = state.users.find((user) => user.userMobileNo === action.payload);

            if (userToUpdate) {
                userToUpdate.userUnreadMessages = "";
            }
        },
        setSelectedUserMobileNo : (state, action) => {
            state.selectedUserMobileNo = action.payload
        }
    }
})

export const { setUsers, setUnreadMessages, setSelectedUserMobileNo} = userSlice.actions

export default userSlice.reducer