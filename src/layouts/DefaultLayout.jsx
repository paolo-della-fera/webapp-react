import { Outlet } from "react-router-dom";
import Header from "../components/AppHeader"
import Footer from "../components/AppFooter"


const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default DefaultLayout;