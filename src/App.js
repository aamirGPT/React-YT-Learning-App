import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    const [theme, setTheme] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        setAlert({
            Type: type,
            Message: message,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const toggleMode = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.style.backgroundColor = "#343a40";
            document.body.style.color = "White";
            showAlert("success", "Dark Theme Enabled");
        } else {
            setTheme("light");
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "black";
            showAlert("success", "Light Theme Enabled");
        }
    };
    return (
        <>
            <Router>
                <Navbar mode={theme} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Routes>
                    <Route
                        path="/AboutUs"
                        element={<AboutUs mode={theme} />}
                    ></Route>
                    <Route
                        path="/"
                        element={
                            <TextInput
                                Heading="Type the text to edit"
                                mode={theme}
                            />
                        }
                    ></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
