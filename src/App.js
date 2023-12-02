import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";

function App() {
    const [theme, setTheme] = useState('light');

    const toggleMode = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.body.style.backgroundColor = "#343a40";
            document.body.style.color = "White";
        }
        else {
            setTheme('light');
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "black";
        }
    }
    return (
        <>
            <Navbar mode={theme} toggleMode={toggleMode} />
            <AboutUs mode={theme} />
            <TextInput Heading="Type the text to edit" mode={theme} />
        </>
    );
}

export default App;
