import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";
import Alert from "./components/Alert";

function App() {
    const [theme, setTheme] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => { 
        setAlert({
            Type: type,
            Message: message
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const toggleMode = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.style.backgroundColor = "#343a40";
            document.body.style.color = "White";
            showAlert("success", "Dark Theme Enabled");
        }
        else {
            setTheme('light');
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "black";
            showAlert("success", "Light Theme Enabled");
        }
    }
    return (
        <>
            <Navbar mode={theme} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <AboutUs mode={theme} />
            <TextInput Heading="Type the text to edit" mode={theme} />
        </>
    );
}

export default App;
