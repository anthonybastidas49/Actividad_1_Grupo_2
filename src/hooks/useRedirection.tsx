import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const useRedirection = (path:string, delay:number) => {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(path);
        }, delay);
    });
};

export default useRedirection;