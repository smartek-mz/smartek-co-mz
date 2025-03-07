import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MemberDetails from "./pages/MemberDetails";
import LangSwitch from "./components/LangSwitch";


const App: React.FC = () => {
    return (
        <Router>
            <LangSwitch />
            <Routes>
                {/* Statics */}
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/contato" element={<Contact />} />
                {/* Dynamics */}
                <Route path="/membro/:uid" element={<MemberDetails />} />
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
