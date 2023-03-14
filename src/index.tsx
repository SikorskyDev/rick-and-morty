import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./pages/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import CharacterDetails from "./pages/CharacterDetails";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/:id" element={<CharacterDetails />} />
                    <Route
                        path="*"
                        element={
                            <div style={{ textAlign: "center" }}>Not Found</div>
                        }
                    />
            </Routes>
        </Provider>
    </HashRouter>
);
