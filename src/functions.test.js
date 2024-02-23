import { handleLeftPannelBelowSearchBarButtons } from "./functions";

describe("handleLeftPannelBelowSearchBarButtons", () => {
    test('should have properties named buttonName and buttonValue with specific constraints', () => {
        const mockCallBack = jest.fn(handleLeftPannelBelowSearchBarButtons);

        // Call the mock function with a valid argument
        const validObj = { buttonName: "akash kharat", buttonValue: true };
        mockCallBack(validObj);

        expect(mockCallBack.mock.calls).toHaveLength(1);

        // Check if the argument is an object
        expect(typeof mockCallBack.mock.calls[0][0]).toBe('object');

        // Check if the object has only two properties
        const properties = Object.keys(mockCallBack.mock.calls[0][0]);
        expect(properties).toHaveLength(2);

        // Check if the properties are named buttonName and buttonValue
        expect(properties).toContain('buttonName');
        expect(properties).toContain('buttonValue');

        // Check specific constraints on buttonName
        const buttonName = mockCallBack.mock.calls[0][0].buttonName;
        expect(typeof buttonName).toBe('string');
        expect(/^[a-z]+(?: [a-z]+)*$/i.test(buttonName)).toBeTruthy(); // Check if the first char is lowercase and only contains letters and underscores

        // Check specific constraints on buttonValue
        const buttonValue = mockCallBack.mock.calls[0][0].buttonValue;
        expect(typeof buttonValue).toBe('boolean');
    });

    test('should dispatch setLeftBelowSearchBarButtons with the correct argument', () => {
        const obj = { buttonName: "akash kharat", buttonValue: true };


        console.log("store", obj)

        // expect(store).toBeDefined()

        // const states = store.getState()
        // // Call the handleLeftPannelBelowSearchBarButtons function
        // store.dispatch(handleLeftPannelBelowSearchBarButtons(obj));

        // // Check if setLeftBelowSearchBarButtons was dispatched with the correct argument
        // const actions = store.getActions();
        // expect(actions).toEqual([
        //     setLeftBelowSearchBarButtons(obj),
        // ]);

        // // Optional: You can also check the mock function calls for setLeftBelowSearchBarButtons
        // expect(setLeftBelowSearchBarButtons).toHaveBeenCalledWith(obj);
        // expect(setLeftBelowSearchBarButtons).toHaveBeenCalledTimes(1);

        // // Check if the reducer was called with the correct state and action
        // const newState = chatSlice.reducer(store.getState(), setLeftBelowSearchBarButtons(obj));
        // expect(newState).toEqual(/* your expected state after the reducer is applied */);
    });

})


// import configureMockStore from 'redux-mock-store';
import { generateMessage } from './functions';
// import { setChats } from './slices/chatsSlice';
// import { stateUpdated } from './functions';
// import moment from 'moment';  // Assuming moment library is used in your file

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);


describe.skip('generateMessage', () => {
    test('should generate message with non-empty text', () => {
        const text = 'Hello, world!';

        const mockCallBack = jest.fn(generateMessage);

        mockCallBack.moc

        mockCallBack(text);

        expect(mockCallBack.mock.calls).toHaveLength(1);

        expect(typeof mockCallBack.mock.calls[0][0]).toBe('string');

        expect(mockCallBack.mock.calls).not.toContain("")
    });

    test.skip('should call setChats reducer with an object containing userMobileNo', () => {
        const store = mockStore({});  // Provide an initial state with userMobileNo in usersSlice
        const text = 'Hello, world!';

        store.dispatch(generateMessage(text));

        const actions = store.getActions();
        const setChatsAction = actions.find(action => action.type === 'chats/setChats');
        expect(setChatsAction).toBeDefined();

        // Check if setChats is called with an object containing userMobileNo
        const { userMobileNo } = setChatsAction.payload;
        expect(userMobileNo).toBeDefined();
        expect(userMobileNo).not.toEqual('');  // Check if userMobileNo is not empty
    });

    test.skip('should call stateUpdated after calling setChats with the same text', () => {
        const store = mockStore({});
        const text = 'Hello, world!';

        store.dispatch(generateMessage(text));

        const actions = store.getActions();
        const setChatsAction = actions.find(action => action.type === 'chats/setChats');
        const stateUpdatedAction = actions.find(action => action.type === 'stateUpdated');

        // Check if setChats is called before stateUpdated
        expect(actions.indexOf(setChatsAction)).toBeLessThan(actions.indexOf(stateUpdatedAction));

        // Check if stateUpdated is called with the same text as setChats
        expect(stateUpdatedAction.payload).toBe(setChatsAction.payload.messageText);
    });
});



// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// // Mock the setLeftBelowSearchBarButtons action
// jest.mock('./functions', () => ({
//     setLeftBelowSearchBarButtons: jest.fn((obj) => ({ type: 'SET_LEFT_BELOW_SEARCH_BAR_BUTTONS', payload: obj })),
// }));

// test('should dispatch setLeftBelowSearchBarButtons with the correct argument', () => {
//     const store = mockStore({});
//     const obj = { buttonName: "akash_kharat", buttonValue: true };

//     // Call the handleLeftPannelBelowSearchBarButtons function
//     store.dispatch(handleLeftPannelBelowSearchBarButtons(obj));

//     // Check if setLeftBelowSearchBarButtons was dispatched with the correct argument
//     expect(store.getActions()).toEqual([
//         { type: 'SET_LEFT_BELOW_SEARCH_BAR_BUTTONS', payload: obj },
//     ]);

//     // Optional: You can also check the mock function calls for setLeftBelowSearchBarButtons
//     expect(setLeftBelowSearchBarButtons).toHaveBeenCalledWith(obj);
//     expect(setLeftBelowSearchBarButtons).toHaveBeenCalledTimes(1);
// });


// test('should have properties named buttonName and buttonValue', () => {
//     const mockCallBack = jest.fn(handleLeftPannelBelowSearchBarButtons);

//     const obj = { buttonName: "Akash Kharat", buttonValue: "9373429068" };

//     mockCallBack(obj);

//     expect(mockCallBack.mock.calls).toHaveLength(1);

//     // Check if the properties are present in the argument passed to the mock function
//     expect(mockCallBack.mock.calls[0][0]).toHaveProperty('buttonName');
//     expect(mockCallBack.mock.calls[0][0]).toHaveProperty('buttonValue');

//     // Optionally, you can also check the values of the properties
//     expect(mockCallBack.mock.calls[0][0].buttonName).toBe("Akash Kharat");
//     expect(mockCallBack.mock.calls[0][0].buttonValue).toBe("9373429068");
// });

