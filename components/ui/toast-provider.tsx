"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Toast Types
type ToastType = "info" | "success" | "warning" | "error";

// Toast Item interface
interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

// Context interface
interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

// Create context with default values
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Toast Provider Props
interface ToastProviderProps {
  children: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

// Generate unique ID for toasts
const generateId = (): string => Math.random().toString(36).substring(2, 9);

export function ToastProvider({
  children,
  position = "bottom-right"
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Position classes
  const positionClasses = {
    "top-right": "top-4 right-4 flex-col",
    "top-left": "top-4 left-4 flex-col",
    "bottom-right": "bottom-4 right-4 flex-col-reverse",
    "bottom-left": "bottom-4 left-4 flex-col-reverse"
  };

  // Add toast
  const addToast = useCallback((message: string, type: ToastType = "info", duration = 5000) => {
    const newToast: Toast = {
      id: generateId(),
      message,
      type,
      duration
    };

    setToasts(prev => [...prev, newToast]);

    if (duration !== Infinity) {
      setTimeout(() => {
        removeToast(newToast.id);
      }, duration);
    }
  }, []);

  // Remove toast
  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div
        className={cn(
          "fixed z-50 flex gap-2 mx-auto w-full max-w-md p-4",
          positionClasses[position]
        )}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "bg-background border p-4 rounded-lg shadow-md w-full flex items-start gap-3 animate-in slide-in-from-right-5 duration-300",
              {
                "border-green-500 text-green-500": toast.type === "success",
                "border-blue-500 text-blue-500": toast.type === "info",
                "border-yellow-500 text-yellow-500": toast.type === "warning",
                "border-red-500 text-red-500": toast.type === "error",
              }
            )}
          >
            {/* Icon based on type */}
            <span className="flex-shrink-0">
              {toast.type === "success" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {toast.type === "error" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
              {toast.type === "warning" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 5V9M8 11V11.01M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
              {toast.type === "info" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1V1.01M8 5V11M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </span>

            {/* Message */}
            <div className="flex-1 text-foreground text-sm">{toast.message}</div>

            {/* Close button */}
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Close toast"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// Custom hook to use toast
export function useToast() {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
