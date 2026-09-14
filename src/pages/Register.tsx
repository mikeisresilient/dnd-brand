import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Video,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/useAuth";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050b16] px-4 py-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />

      <div className="relative w-full max-w-md">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
        >
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <div className="rounded-3xl border border-white/10 bg-[#091423]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 shadow-lg shadow-blue-500/20">
            <Video size={20} />
          </div>

          <h1 className="mt-7 text-2xl font-semibold tracking-tight text-white">
            Create your account
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Start meeting, collaborating, and getting more done with DND
            BRAND.
          </p>

          {error && (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-red-400/20 bg-red-500/[0.08] px-4 py-3 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          <form
            onSubmit={async (event) => {
              event.preventDefault();

              setError("");

              if (!name.trim()) {
                setError("Please enter your full name.");
                return;
              }

              if (!email.trim()) {
                setError("Please enter your email address.");
                return;
              }

              if (!email.includes("@")) {
                setError("Please enter a valid email address.");
                return;
              }

              if (!password) {
                setError("Please create a password.");
                return;
              }

              if (password.length < 6) {
                setError("Password must be at least 6 characters.");
                return;
              }

              setLoading(true);

              try {
                await register(
                  name.trim(),
                  email.trim(),
                  password,
                );

                navigate("/meeting", { replace: true });
              } catch (err) {
                setError(
                  err instanceof Error
                    ? err.message
                    : "Unable to create your account.",
                );
              } finally {
                setLoading(false);
              }
            }}
            className="mt-7 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your full name"
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-white/[0.05]"
              />
            </div>

            <div>
              <label
                htmlFor="register-email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email address
              </label>

              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-white/[0.05]"
              />
            </div>

            <div>
              <label
                htmlFor="register-password"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-white/[0.05]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((visible) => !visible)
                  }
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>

              <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-600">
                <Check size={11} className="text-blue-400" />
                At least 6 characters
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create account"}

              {!loading && (
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="font-medium text-blue-400 transition hover:text-blue-300"
            >
              Sign in
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-slate-700">
          By creating an account, you agree to our Terms and Privacy
          Policy.
        </p>
      </div>
    </main>
  );
}

export default Register;