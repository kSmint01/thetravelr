"use client";

import { useState } from "react";
import { X, Bell, CheckCircle2 } from "lucide-react";

type Variant = "dark" | "green" | "white" | "gradient";

interface Props {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

function Modal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-charcoal-100 flex items-center justify-center text-charcoal-500 hover:bg-charcoal-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-forest-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-forest-600" />
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-2">
              You&apos;re on the list!
            </h3>
            <p className="text-charcoal-500 text-sm leading-relaxed">
              We&apos;ll notify you at{" "}
              <span className="text-forest-700 font-medium">{email}</span> the
              moment TheTravelr launches on Google Play.
            </p>
            <button
              onClick={onClose}
              className="mt-6 text-sm text-charcoal-400 hover:text-charcoal-600 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="w-12 h-12 bg-forest-600 rounded-2xl flex items-center justify-center mb-5">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
              Get Early Access
            </h3>
            <p className="text-charcoal-500 text-sm leading-relaxed mb-6">
              TheTravelr is launching soon on Google Play. Drop your email and
              we&apos;ll notify you the moment it&apos;s live — plus early-access
              perks for the first members.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-sage-200 text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent text-sm transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-forest-600 hover:bg-forest-700 disabled:opacity-70 text-white font-semibold py-3 rounded-xl transition-all duration-200 text-sm active:scale-[0.98]"
              >
                {loading ? "Saving your spot…" : "Notify Me at Launch"}
              </button>
            </form>
            <p className="text-charcoal-400 text-xs text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function WaitlistButton({
  variant = "dark",
  size = "md",
  label = "Get Early Access",
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);

  const sizeClass = {
    sm: "text-sm px-5 py-2.5 rounded-full",
    md: "text-sm px-6 py-3.5 rounded-2xl",
    lg: "text-base px-8 py-5 rounded-2xl",
  }[size];

  const variantClass = {
    dark: "bg-charcoal-900 hover:bg-charcoal-800 text-white hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5",
    green: "bg-forest-600 hover:bg-forest-700 text-white shadow-sm hover:shadow-md hover:shadow-forest-600/30",
    white: "bg-white text-forest-800 hover:bg-forest-50 hover:shadow-lg",
    gradient: "bg-gradient-to-r from-forest-300 to-forest-600 hover:from-forest-200 hover:to-forest-500 text-white shadow-lg shadow-forest-500/40 hover:shadow-xl hover:shadow-forest-400/50 hover:-translate-y-0.5",
  }[variant];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2.5 font-semibold transition-all duration-200 active:scale-[0.97] ${sizeClass} ${variantClass} ${className}`}
      >
        <Bell className="w-4 h-4 flex-shrink-0" />
        {label}
      </button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
}
