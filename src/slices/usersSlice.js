import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
//     try {
//         const response = await axios.get('https://b75f741106774e1ba768db869459ed2b.api.mockbin.io/');
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// });

// const whatsAppData = {
//     peoples: [
//         {
//             userName: "Rameshwar Varpe",
//             profilePicture: "",
//             countryCode: "+91",
//             userMobileNo: "9673524106",
//             userAbout: "Urgent calls only",
//             userLastSeen: "15:23",
//             userUnreadMessages: "8",
//         },
//         {
//             userName: "Harshal Dhokane",
//             profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/425129692_689143370096096_5853688436436413836_n.jpg?ccb=11-4&oh=01_AdS1_cEWdewmQJNLrvr5rhTFCL8OWPN600Z5p0be3honrw&oe=65D70026&_nc_sid=e6ed6c&_nc_cat=104",
//             countryCode: "+91",
//             userMobileNo: "7744938053",
//             userAbout: "Sleeping",
//             userLastSeen: "14:23",
//             userUnreadMessages: "9",
//         },
//         {
//             userName: "Sanket Gupta",
//             profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/422481063_763291511911523_3485251882021467671_n.jpg?ccb=11-4&oh=01_AdTu-UmaGIOyDHhUCoaqFD6fohwRqMxzkpOglMDYTqYKaA&oe=65D39B50&_nc_sid=e6ed6c&_nc_cat=104",
//             countryCode: "+91",
//             userMobileNo: "8329086681",
//             userAbout: "EVERYDAY IN EVERYWAY I'M GETTING BETTER AND BETTER 😇",
//             userLastSeen: "03:00",
//             userUnreadMessages: "",
//         },
//         {
//             userName: "Abhishek Chopade",
//             profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/312280415_693376235414492_8643811253461028228_n.jpg?ccb=11-4&oh=01_AdRvjs-c305nvIRH0Zk6FZT044yIFGHzryVvpgJT72Qknw&oe=65D78539&_nc_sid=e6ed6c&_nc_cat=102",
//             countryCode: "+91",
//             userMobileNo: "9766764627",
//             userAbout: "At work",
//             userLastSeen: "05:00",
//             userUnreadMessages: "",
//         },
//         {
//             userName: "Prajwal Ingole",
//             profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/366895269_1281219732765291_2344527761445279511_n.jpg?ccb=11-4&oh=01_AdTgEf22MZXMwBhjnqh_IK1cJeXRT6c1n7IGdk6fjzvGMQ&oe=65D78738&_nc_sid=e6ed6c&_nc_cat=103",
//             countryCode: "+91",
//             userMobileNo: "9075809004",
//             userAbout: "Battery about to die",
//             userLastSeen: "24:00",
//             userUnreadMessages: "",
//         },
//         {
//             userName: "Nikhilesh Mane",
//             profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/379727675_1379561979616037_7922129445927542609_n.jpg?ccb=11-4&oh=01_AdRTfAs4DKjvazSPotZLZL2peIym2qNKzmmebs0BZjS_RQ&oe=65D6C6EE&_nc_sid=e6ed6c&_nc_cat=107",
//             countryCode: "+91",
//             userMobileNo: "9075490251",
//             userAbout: "कुळ-हिंदुत्व👑 सण-शिवजयंती💥 रुबाब-मराठा💪 शान-भगवा झेंडा🚩 दैवत-छत्रपती शिवाजी महाराज🙏 जन्मभूमी- अमरावती🚩 आमच ईमान स्वराज्य 🔱",
//             userLastSeen: "23:00",
//             userUnreadMessages: "",
//         },
//         {
//             userName: "Aditya",
//             profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/383670737_350499304234701_3256428619540089720_n.jpg?ccb=11-4&oh=01_AdRZlCAB99R3jLn-V1nFg2_aos87f9K-iAFN8H0wIS2b_A&oe=65D6C99F&_nc_sid=e6ed6c&_nc_cat=108",
//             countryCode: "+91",
//             userMobileNo: "8668559528",
//             userAbout: "पंख त्यांचेच मजबूत असतात जे एकटे उडतात, आणि प्रवाहाविरुद्ध झेप घेतात.",
//             userLastSeen: "01:27",
//             userUnreadMessages: "9",
//         },
//         {
//             userName: "Om Chokhat",
//             profilePicture: "",
//             countryCode: "+91",
//             userMobileNo: "9284486105",
//             userAbout: "🏢CIVIL 😎",
//             userLastSeen: "",
//             userUnreadMessages: "5",
//         },
//         {
//             userName: "Mangesh Ganjare",
//             profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/421376558_1452364815350883_4050033814544328015_n.jpg?ccb=11-4&oh=01_AdTwf9-ybt9LPz_69bAcB14uLJ2yjKBedfMOJMwzk1Jcfw&oe=65D775A7&_nc_sid=e6ed6c&_nc_cat=108",
//             countryCode: "+91",
//             userMobileNo: "9767746080",
//             userAbout: "At work",
//             userLastSeen: "",
//             userUnreadMessages: "8",
//         },
//         {
//             userName: "Prathamesh Gode",
//             profilePicture: "",
//             countryCode: "+91",
//             userMobileNo: "8208210160",
//             userAbout: "Available",
//             userLastSeen: "",
//             userUnreadMessages: "2",
//         },
//         {
//             userName: "Akash Kharat",
//             profilePicture: "",
//             countryCode: "+91",
//             userMobileNo: "9373429068",
//             userAbout: "Available",
//             userLastSeen: "",
//             userUnreadMessages: "2",
//         },
//     ],
//     chats: [
//         {
//             messageId: 1,
//             messageText: 'hii',
//             messageTime: "13:28",
//             messageDate: '2/9/2024',
//             userMobileNo: '9673524106',
//             deliverdStatus: true,
//             readStatus: true,
//         },

//         {
//             messageId: 2,
//             messageText: 'bye',
//             messageTime: "13:29",
//             messageDate: '2/10/2024',
//             userMobileNo: '7744938053',
//             deliveredStatus: true,
//             readStatus: false,
//         },

//         {
//             messageId: 3,
//             messageText: 'kay',
//             messageTime: "13:48",
//             messageDate: '2/10/2024',
//             userMobileNo: '9673524106',
//             deliveredStatus: false,
//             readStatus: false,
//         },
//         {
//             messageId: 4,
//             messageText: 'hello',
//             messageTime: "01:28",
//             messageDate: '2/11/2024',
//             userMobileNo: '9673524106',
//             deliveredStatus: true,
//             readStatus: false,
//         },
//         {
//             messageId: 5,
//             messageText: 'good morning',
//             messageTime: "13:28",
//             messageDate: '2/12/2024',
//             userMobileNo: '7744938053',
//             deliveredStatus: true,
//             readStatus: false,
//         },
//         {
//             messageId: 6,
//             messageText: 'goodnight',
//             messageTime: "13:28",
//             messageDate: '2/14/2024',
//             userMobileNo: '9673524106',
//             deliveredStatus: true,
//             readStatus: true,
//         },
//         {
//             messageId: 7,
//             messageText: 'goodnight',
//             messageTime: "13:28",
//             messageDate: '2/14/2024',
//             userMobileNo: '9673524106',
//         },
//         {
//             messageId: 8,
//             messageText: 'goodnight',
//             messageTime: "13:28",
//             messageDate: '2/14/2024',
//             userMobileNo: '9673524106',
//         },
//         {
//             messageId: 9,
//             messageText: 'goodnight',
//             messageTime: "13:28",
//             messageDate: '2/14/2024',
//             userMobileNo: '9673524106',
//         },
//         {
//             messageId: 10,
//             messageText: 'goodnight',
//             messageTime: "13:28",
//             messageDate: '2/14/2024',
//             userMobileNo: '9673524106',
//         }
//     ]
// }

// console.log(JSON.stringify(whatsAppData))

export const userSlice = createSlice({
    name: "peoples",
    initialState: {
        personalInfo: {
            name: "Ashutosh Verulkar",
            profilePicture: "",
            countryCode: "+91",
            mobileNo: "7218724953",
            about: "I am not perfect but I am limited edition",
        },
        peoples: [
            {
                userName: "Gunjan",
                profilePicture: "https://media-pnq1-2.cdn.whatsapp.net/v/t61.24694-24/421389557_372065352102660_7712977677576430661_n.jpg?ccb=11-4&oh=01_AdSuegxPK2e2ts-Ulvk5Tfqp2d82q0-TXu39kD8TzAL_Hw&oe=65E0BE59&_nc_sid=e6ed6c&_nc_cat=105",
                countryCode: "+91",
                userMobileNo: "93709 82838",
                userAbout: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ॥",
                userLastSeen: "15:23",
                userUnreadMessages: "8",
            },
            {
                userName: "Rameshwar Varpe",
                profilePicture: "",
                countryCode: "+91",
                userMobileNo: "9673524106",
                userAbout: "Urgent calls only",
                userLastSeen: "15:23",
                userUnreadMessages: "8",
            },
            {
                userName: "Harshal Dhokane",
                profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/425129692_689143370096096_5853688436436413836_n.jpg?ccb=11-4&oh=01_AdS1_cEWdewmQJNLrvr5rhTFCL8OWPN600Z5p0be3honrw&oe=65D70026&_nc_sid=e6ed6c&_nc_cat=104",
                countryCode: "+91",
                userMobileNo: "7744938053",
                userAbout: "Sleeping",
                userLastSeen: "14:23",
                userUnreadMessages: "9",
            },
            {
                userName: "Sanket Gupta",
                profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/422481063_763291511911523_3485251882021467671_n.jpg?ccb=11-4&oh=01_AdTu-UmaGIOyDHhUCoaqFD6fohwRqMxzkpOglMDYTqYKaA&oe=65D39B50&_nc_sid=e6ed6c&_nc_cat=104",
                countryCode: "+91",
                userMobileNo: "8329086681",
                userAbout: "EVERYDAY IN EVERYWAY I'M GETTING BETTER AND BETTER 😇",
                userLastSeen: "03:00",
                userUnreadMessages: "",
            },
            {
                userName: "Abhishek Chopade",
                profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/312280415_693376235414492_8643811253461028228_n.jpg?ccb=11-4&oh=01_AdRvjs-c305nvIRH0Zk6FZT044yIFGHzryVvpgJT72Qknw&oe=65D78539&_nc_sid=e6ed6c&_nc_cat=102",
                countryCode: "+91",
                userMobileNo: "9766764627",
                userAbout: "At work",
                userLastSeen: "05:00",
                userUnreadMessages: "",
            },
            {
                userName: "Prajwal Ingole",
                profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/366895269_1281219732765291_2344527761445279511_n.jpg?ccb=11-4&oh=01_AdTgEf22MZXMwBhjnqh_IK1cJeXRT6c1n7IGdk6fjzvGMQ&oe=65D78738&_nc_sid=e6ed6c&_nc_cat=103",
                countryCode: "+91",
                userMobileNo: "9075809004",
                userAbout: "Battery about to die",
                userLastSeen: "24:00",
                userUnreadMessages: "",
            },
            {
                userName: "Nikhilesh Mane",
                profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/379727675_1379561979616037_7922129445927542609_n.jpg?ccb=11-4&oh=01_AdRTfAs4DKjvazSPotZLZL2peIym2qNKzmmebs0BZjS_RQ&oe=65D6C6EE&_nc_sid=e6ed6c&_nc_cat=107",
                countryCode: "+91",
                userMobileNo: "9075490251",
                userAbout: "कुळ-हिंदुत्व👑 सण-शिवजयंती💥 रुबाब-मराठा💪 शान-भगवा झेंडा🚩 दैवत-छत्रपती शिवाजी महाराज🙏 जन्मभूमी- अमरावती🚩 आमच ईमान स्वराज्य 🔱",
                userLastSeen: "23:00",
                userUnreadMessages: "",
            },
            {
                userName: "Aditya",
                profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/383670737_350499304234701_3256428619540089720_n.jpg?ccb=11-4&oh=01_AdRZlCAB99R3jLn-V1nFg2_aos87f9K-iAFN8H0wIS2b_A&oe=65D6C99F&_nc_sid=e6ed6c&_nc_cat=108",
                countryCode: "+91",
                userMobileNo: "8668559528",
                userAbout: "पंख त्यांचेच मजबूत असतात जे एकटे उडतात, आणि प्रवाहाविरुद्ध झेप घेतात.",
                userLastSeen: "01:27",
                userUnreadMessages: "9",
            },
            {
                userName: "Om Chokhat",
                profilePicture: "",
                countryCode: "+91",
                userMobileNo: "9284486105",
                userAbout: "🏢CIVIL 😎",
                userLastSeen: "",
                userUnreadMessages: "5",
            },
            {
                userName: "Mangesh Ganjare",
                profilePicture: "https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/421376558_1452364815350883_4050033814544328015_n.jpg?ccb=11-4&oh=01_AdTwf9-ybt9LPz_69bAcB14uLJ2yjKBedfMOJMwzk1Jcfw&oe=65D775A7&_nc_sid=e6ed6c&_nc_cat=108",
                countryCode: "+91",
                userMobileNo: "9767746080",
                userAbout: "At work",
                userLastSeen: "",
                userUnreadMessages: "8",
            },
            {
                userName: "Prathamesh Gode",
                profilePicture: "",
                countryCode: "+91",
                userMobileNo: "8208210160",
                userAbout: "Available",
                userLastSeen: "",
                userUnreadMessages: "2",
            },
            {
                userName: "Akash Kharat",
                profilePicture: "",
                countryCode: "+91",
                userMobileNo: "9373429068",
                userAbout: "Available",
                userLastSeen: "",
                userUnreadMessages: "2",
            },
        ],
        selectedUser: {},
        selectedUserMobileNo : "",
    },
    reducers: {
        setPeoples: (state, action) => {
            state.peoples = action.payload
        },
        setUnreadMessages: (state, action) => {
            const userToUpdate = state.peoples.find((user) => user.userMobileNo === action.payload.userMobileNo);

            if (userToUpdate) {
                userToUpdate.userUnreadMessages = "";
            }
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        },
        selectedUserMobileNo : (state, action) => {
            state.selectedUserMobileNo = action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchChats.fulfilled, (state, action) => {
    //         state.peoples = action.payload.peoples;
    //     });
    // },
})

export const { setPeoples, setUnreadMessages, setSelectedUser } = userSlice.actions

export default userSlice.reducer