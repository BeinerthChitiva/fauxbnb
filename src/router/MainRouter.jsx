import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";
import RouterIn from './RouterIn';
import RouterOut from './RouterOut';


export default function MainRouter(){
    const { isLoggedIn } = useAuth()
    return(
        <Router>
            { isLoggedIn ? <RouterIn/> : <RouterOut/>}
        </Router>
    )
}