import Header from './components/Header'
import Footer from './components/Footer'
import Vaporwave from './components/Vaporwave'
import Home from './components/Home'

export default function App() {
    return (
        <>
            <main className="bg-black font-IBMPlexMono h-full min-h-screen flex flex-col">
                <div className="w-full h-[2px] bg-red-600 z-10"></div>
                <Header />
                <Home />
                <Footer />
            </main>
            <Vaporwave />
        </>
    )
}
