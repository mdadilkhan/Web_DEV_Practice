

// 1st way
import { Navigate,Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const isAuthenticated=true;
  return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace />
}

export default ProtectedRoutes



// // 2nd way
// import { Navigate } from 'react-router-dom';

// const ProtectedRoutes = ({children}) => {

//     const isAuthenticated=false;
//   return isAuthenticated ? children : <Navigate to="/login" replace />
// }

// export default ProtectedRoutes
