import React from 'react'
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Catalog} from "./components/Catalog/Catalog";
import {Footer} from "./components/Footer/Footer";
import {Provider} from "react-redux";
import {store} from "./store/index.js";

export const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <main>
                <Navigation/>
                <Catalog/>
            </main>
            <Footer/>
        </Provider>
    )
}
