import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const MainPage = lazy(() => import('../pages/out/MainPage'));
const HostPage = lazy(() => import('../pages/out/HostPage'));
const SignupPage = lazy(() => import('../pages/out/SignupPage'));
const LoginPage = lazy(() => import('../pages/out/LoginPage'));
const HelpPage = lazy(() => import('../pages/out/HelpPage'));

export default function RouterOut(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<MainPage/>}/>
                <Route path="/host" element={<HostPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/help" element={<HelpPage/>}/>
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </Suspense>
    )
}