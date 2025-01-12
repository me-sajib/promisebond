import { useLocation, useRoutes } from 'react-router-dom'
import './App.css'
import routes from './router/routes'
import { createContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const ParentContext = createContext();

function App() {
    const location = useLocation();
    const pathname = location.pathname
    const content = useRoutes(routes);
    const [values, setValues] = useState([])

    useEffect(() => {
        const defaultDemoData = [{
            id: 3939393,
            name: 'John Doe',
            email: '3@3.com',
            password: '123456',
            role: 'issuer'
        },
        {
            id: 3939394,
            name: 'Jane Doe',
            email: '4@4.com',
            password: '123456',
            role: 'admin'
        },
        {
            id: 3939395,
            name: 'Bob Doe',
            email: '5@5.com',
            password: '123456',
            role: 'buyer'
        }
        ]
        localStorage.setItem('users', JSON.stringify(defaultDemoData))
    }, [])

    return (
        <>
            {pathname !== '/dashboard' && <Navbar />}
            <ParentContext.Provider value={{ values, setValues }}>
                {content}
            </ParentContext.Provider>
            {pathname !== '/dashboard' && <Footer />}
        </>
    )
}

export default App
