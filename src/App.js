import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './views/Home';
import Team from './views/Team';
import Footer from './components/Footer';

function App() {
    return (
        <ChakraProvider>
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/organisers" element={<Team />} />
                </Routes>
            </Router>
            <Footer />
        </ChakraProvider>
    );
}

export default App;
