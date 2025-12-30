import type { ToastItem } from "@/types/toast";

type ToastProps = {
  toasts: ToastItem[];
};

export const ToastsViewport = ({ toasts }: ToastProps) => {
  const toastStyles: Record<ToastItem["type"], string> = {
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
    warning: "bg-yellow-300 text-black",
    info: "bg-blue-600 text-white",
  };

  return (
    <div className="toasts">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toastStyles[toast.type]}`}>
          <span className="toast__message">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
