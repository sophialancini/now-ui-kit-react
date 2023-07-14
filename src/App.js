
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "views/Index.js";
import DemoIndex from "views/DemoIndex.js";
import AboutPage from 'views/AboutPage';
import ContactPage from 'views/ContactPage';
import CardasPage from 'views/CardasPage';


export const LanguageContext = React.createContext(null);

function App() {
    const [language, setLanguage] = React.useState("pt");

    return (
        <LanguageContext.Provider value={{ language: language, setLanguage: setLanguage }}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Index />} />
                    <Route path="/index" element={<DemoIndex />} />
                    <Route path="/sobre" element={<AboutPage />} />
                    <Route path="/contato" element={<ContactPage />} />
                    <Route path="/cardas" element={<CardasPage />} />
                </Routes>
            </BrowserRouter>
        </LanguageContext.Provider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App