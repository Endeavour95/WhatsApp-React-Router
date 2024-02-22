import { handleLeftPannelBelowSearchBarButtons } from "./functions";

test('should have properties named buttonName and buttonValue', () => {

    const obj = { buttonName: "Akash Kharat", buttonValue: "9373429068" }

    expect(obj).toEqual({ buttonName: "Akash Kharat", buttonValue: "9373429068" })
})