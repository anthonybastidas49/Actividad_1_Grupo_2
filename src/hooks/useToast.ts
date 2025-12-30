import type { ShowToastOptions, ToastItem } from "@/types/toast";
import { useCallback, useRef, useState } from "react";

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Record<string, number>>({});

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    const timerId = timers.current[id];
    if (timerId) {
      clearTimeout(timerId);
      delete timers.current[id];
    }
  }, []);

  const showToast = useCallback(
    (message: string, options: ShowToastOptions = {}) => {
      const id = crypto.randomUUID();
      const type = options.type || "success";
      const duration = options.duration || 3000;
      const newToast: ToastItem = { id, message, type, duration };

      setToasts((prevToasts) => [...prevToasts, newToast]);

      timers.current[id] = setTimeout(() => {
        removeToast(id);
      }, duration);
      return id;
    },
    [removeToast]
  );

  return {
    toasts,
    showToast
  };
};
