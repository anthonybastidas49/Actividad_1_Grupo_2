import { useState } from "react";
import { ToastsViewport } from "../toasts_viewport/ToastsViewport";
import { useToast } from "@/hooks/useToast";
import { useNavigate } from "react-router-dom";
const storageKey = "cartBooks";

export const PaymentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: {
      value: "",
      errorMessage: "",
    },
    cardHolder: {
      value: "",
      errorMessage: "",
    },
    expirationDate: {
      value: "",
      errorMessage: "",
    },
    cvv: {
      value: "",
      errorMessage: "",
    },
  });

  const { showToast, toasts } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormData((prev) => ({
      ...prev,
      cardNumber: { ...prev.cardNumber, errorMessage: "" },
      cardHolder: { ...prev.cardHolder, errorMessage: "" },
      expirationDate: { ...prev.expirationDate, errorMessage: "" },
      cvv: { ...prev.cvv, errorMessage: "" },
    }));

    if (!formData.cardNumber.value.match(/^\d{16}$/)) {
      setFormData((prev) => ({
        ...prev,
        cardNumber: {
          ...prev.cardNumber,
          errorMessage: "Número de tarjeta inválido",
        },
      }));
      return;
    }

    if (formData.cardHolder.value.trim() === "") {
      setFormData((prev) => ({
        ...prev,
        cardHolder: {
          ...prev.cardHolder,
          errorMessage: "El nombre del titular es obligatorio",
        },
      }));
      return;
    }

    if (!formData.expirationDate.value.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      setFormData((prev) => ({
        ...prev,
        expirationDate: {
          ...prev.expirationDate,
          errorMessage: "Fecha de expiración inválida",
        },
      }));
      return;
    }

    if (!formData.cvv.value.match(/^\d{3,4}$/)) {
      setFormData((prev) => ({
        ...prev,
        cvv: {
          ...prev.cvv,
          errorMessage: "CVV inválido",
        },
      }));
      return;
    }

    showToast("Pago realizado con éxito", { type: "success", duration: 3000 });
    localStorage.removeItem(storageKey);
    setFormData({
      cardNumber: { value: "", errorMessage: "" },
      cardHolder: { value: "", errorMessage: "" },
      expirationDate: { value: "", errorMessage: "" },
      cvv: { value: "", errorMessage: "" },
    });

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };
  return (
    <section className="payment-form__section">
      <ToastsViewport toasts={toasts} />
      <h2 className="payment-form__title">Formulario de Pago</h2>
      <form
        className="payment-form__form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="payment-form__group">
          <label htmlFor="cardNumber" className="payment-form__label">
            Número de Tarjeta
          </label>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            id="cardNumber"
            name="cardNumber"
            className="payment-form__input"
            value={formData.cardNumber.value}
            onChange={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 16);
              setFormData({
                ...formData,
                cardNumber: { ...formData.cardNumber, value: onlyDigits },
              });
            }}
            pattern="^\d{16}$"
            title="Ingresa 16 dígitos"
            required
          />
          {formData.cardNumber.errorMessage && (
            <span className="payment-form__error">
              {formData.cardNumber.errorMessage}
            </span>
          )}
        </div>

        <div className="payment-form__group">
          <label htmlFor="cardHolder" className="payment-form__label">
            Titular de la Tarjeta
          </label>
          <input
            type="text"
            autoComplete="cc-name"
            id="cardHolder"
            name="cardHolder"
            className="payment-form__input"
            value={formData.cardHolder.value}
            onChange={(e) =>
              setFormData({
                ...formData,
                cardHolder: { ...formData.cardHolder, value: e.target.value },
              })
            }
            pattern="^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{3,}$"
            title="Ingresa el nombre (mínimo 3 letras)"
            required
          />
          {formData.cardHolder.errorMessage && (
            <span className="payment-form__error">
              {formData.cardHolder.errorMessage}
            </span>
          )}
        </div>

        <div className="payment-form__group">
          <label htmlFor="expirationDate" className="payment-form__label">
            Fecha de Expiración
          </label>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            id="expirationDate"
            name="expirationDate"
            className="payment-form__input"
            placeholder="MM/AA"
            value={formData.expirationDate.value}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "").slice(0, 4); // MMYY
              const formatted =
                digits.length <= 2
                  ? digits
                  : `${digits.slice(0, 2)}/${digits.slice(2)}`;
              setFormData({
                ...formData,
                expirationDate: {
                  ...formData.expirationDate,
                  value: formatted,
                },
              });
            }}
            pattern="^(0[1-9]|1[0-2])\/\d{2}$"
            title="Formato MM/AA (ej: 09/28)"
            required
          />
          {formData.expirationDate.errorMessage && (
            <span className="payment-form__error">
              {formData.expirationDate.errorMessage}
            </span>
          )}
        </div>

        <div className="payment-form__group">
          <label htmlFor="cvv" className="payment-form__label">
            CVV
          </label>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            id="cvv"
            name="cvv"
            className="payment-form__input"
            value={formData.cvv.value}
            onChange={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 4);
              setFormData({
                ...formData,
                cvv: { ...formData.cvv, value: onlyDigits },
              });
            }}
            pattern="^\d{3,4}$"
            title="CVV de 3 o 4 dígitos"
            required
          />
          {formData.cvv.errorMessage && (
            <span className="payment-form__error">
              {formData.cvv.errorMessage}
            </span>
          )}
        </div>

        <button type="submit" className="payment-form__button">
          Pagar Ahora
        </button>
      </form>
    </section>
  );
};
