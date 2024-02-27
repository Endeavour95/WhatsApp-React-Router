import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import DefaultRightPannel from "./components/DefaultRightPannel";
import Right from "./components/Right";
import App from "./App";
import PersonalProfileInfoDrawer from "./components/PersonalProfileInfoDrawer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "personalInfo",
                element: <PersonalProfileInfoDrawer />
            },
            {
                path: ":userMobileNo",
                element: <Right />,
            },
        ]
    }
])