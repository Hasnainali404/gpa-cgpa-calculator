"use client";

import { X, AlertCircle, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

/**
 * ConfirmModal component for user confirmations.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal is visible.
 * @param {Function} props.onClose - Function to call when closing without confirmation.
 * @param {Function} props.onConfirm - Function to call when user confirms.
 * @param {string} props.title - Modal title.
 * @param {string} props.message - Modal description.
 * @param {string} props.confirmText - Text for the confirm button.
 */
export default function ConfirmModal({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirm" }) {
    // Handle Escape key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-600/20 rounded-lg">
                                <AlertCircle className="text-blue-400" size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-white">{title}</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-white transition-colors p-1"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <p className="text-gray-400 mb-8 leading-relaxed">
                        {message}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold rounded-xl transition-all active:scale-95"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 size={18} />
                            {confirmText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
