export type ToastType = "success" | "error" | "warning" | "info";

export type ToastItem = {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
};

export type ShowToastOptions = {
  type?: ToastType;
  duration?: number; 
};