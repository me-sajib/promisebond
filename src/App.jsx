import { useLocation, useRoutes } from 'react-router-dom'
import './App.css'
import routes from './router/routes'
import { createContext, useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export const ParentContext = createContext();

function App() {
    const location = useLocation();
    const pathname = location.pathname
    const content = useRoutes(routes);
    const [values, setValues] = useState([])

    return (
        <>
            {/* {pathname !== '/admin' && <Header />} */}
            <ParentContext.Provider value={{ values, setValues }}>
                {content}
            </ParentContext.Provider>
            {/* {pathname !== '/admin' && <Footer />} */}
        </>
    )
}

export default App
