import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default RootLayout;
