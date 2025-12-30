import './App.css'
import GlobalRouter from "./router.tsx";
import {LibraryProvider} from "./context/LibraryContext.tsx"

function AppRouter() {

    return (
        <LibraryProvider>
            <GlobalRouter/>
        </LibraryProvider>
  )
}

export default AppRouter
