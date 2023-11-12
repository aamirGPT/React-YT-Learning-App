import "./App.css";
import Navbar from "./components/Navbar";
import TextInput from "./components/TextInput";

function App() {
    return (
        <>
            <Navbar />
            <TextInput Heading="Type the text to edit"/>
        </>
    );
}

export default App;
