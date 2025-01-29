import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./routes/components/NavBar";
import { HomeScreen } from "./routes/HomeScreen";
import { LoginScreen } from "./routes/LoginScreen";
import { AboutScreen } from "./routes/AboutScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { UserProvider } from "./routes/context/UserProvider";

export const App = () => {
    return (
        <UserProvider>
            <NavBar></NavBar>

            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                <Route
                    path="/login"
                    element={<LoginScreen></LoginScreen>}
                ></Route>
                <Route
                    path="/about"
                    element={<AboutScreen></AboutScreen>}
                ></Route>
                <Route
                    path="/contact"
                    element={<ContactScreen></ContactScreen>}
                ></Route>
                <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
        </UserProvider>
    );
};
