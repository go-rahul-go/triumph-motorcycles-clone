import Header from "./components/Header";
import "./style.css"
import Home from "./pages/Home";
import { Routes, Route,Navigate } from "react-router-dom";
import AccessoriesPage from "./pages/AccessoriesPage";
import { createContext, useState } from "react";
import ClothingPage from "./pages/ClothingPage";
import OwnersPage from "./pages/OwnersPage";
import DiscoverPage from "./pages/DiscoverPage";
export const HideContext = createContext();
function App() {
    const [hide, changeHide] = useState(false)

    return (

        <>
            <Header changeDisplay={changeHide}/>
            <HideContext.Provider value={hide}>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/accessories" element={<AccessoriesPage />} />
                    <Route path="/clothing" element={<ClothingPage/>}/>
                    <Route path="/owner" element={<OwnersPage/>}/>
                    <Route path="/discover" element={<DiscoverPage/>}/>
                    <Route path="*" element={<Navigate to="/" />}/>
                </Routes>
            </HideContext.Provider>
        </>
    )
}

export default App;
