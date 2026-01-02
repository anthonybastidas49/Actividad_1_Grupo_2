import { useNavigate } from "react-router";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="back__button back__button--center"
    >
      ← Volver
    </button>
  );
};
