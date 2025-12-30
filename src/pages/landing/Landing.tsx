import useRedirection from "../../hooks/useRedirection.tsx";
import { useNavigate} from 'react-router-dom';

export const Landing = () => {
    const homePath = "/home";
    useRedirection(homePath, 5000);
    const navigate = useNavigate()
    // @ts-ignore
    return (
        <div className="landing__container">
            <div className="max-w-2xl mx-auto text-center animate-fadeInUp">

                <div className="landing__subcontainer">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Relatos de Papel
                    </h1>

                    <button
                        onClick={() => { navigate(homePath); }}
                        className="landing_button"
                    >
                         Ver la biblioteca
                    </button>

                    <p className="landing_alternativa_text">
                        Redirigiendo automáticamente...
                    </p>
                </div>

            </div>
        </div>
    )
}

