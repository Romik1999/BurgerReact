import {useState} from 'react'
import {Container} from "./components/Container/Container";
import {Header} from "./components/Header/Header";

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <main>
                <nav>
                    <Container maks="leskin" className="navigation__container"/>
                </nav>
                <section></section>
            </main>
            <footer></footer>
        </>
    )
}
