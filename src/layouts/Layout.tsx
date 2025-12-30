import {Header} from "@/layouts/header/Header.tsx";
import {Footer} from "@/layouts/footer/Footer.tsx";

export const Layout = ({children}:{children: any}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};