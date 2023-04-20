import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {loading, user} = useAuth()
    if(loading) {
        return
    }
    if(user) {
        return children
    }
    return <Navigate to="/login" replace/>;
};

export default PrivateRoutes;