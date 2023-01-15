import React, { Suspense } from "react";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewHome from "./views/Newhome";
// import Rewards from './components/rewards/Rewards';
// import Timeline from './components/Timeline';

// const Home = React.lazy(() => import("./views/Home"));
const Team = React.lazy(() => import("./views/Team"));
const Home = React.lazy(() => import("./views/Newhome"));

function App() {

    const config = {
        initialColorMode: 'dark',
    }
    const theme = extendTheme({ config })

    return (
        <ChakraProvider initialColorMode={theme.config.initialColorMode}>
            <Router>
                <Navbar />
                <Suspense>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/organisers" element={<Team />} />
                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />
                    </Routes>
                </Suspense>
            </Router>
            {/* <Footer /> */}
        </ChakraProvider>
    );
}

export default App;
