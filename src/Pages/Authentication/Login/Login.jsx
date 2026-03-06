import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (
        form.email === "demo@hangout.com" &&
        form.password === "123456"
      ) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("userEmail", form.email);
        alert("Login Successful");
      } else {
        setError("Invalid credentials");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary px-md py-md dark:bg-darkbg-primary">
      <div className="grid w-full max-w-[1080px] overflow-hidden rounded-card bg-bg-surface shadow-elevation4 dark:bg-darkbg-surface lg:grid-cols-2">
        {/* LEFT PANEL */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-primary to-primary-hover px-3xl py-3xl text-white dark:from-darkprimary dark:to-darkprimary-hover">
          <div className="text-h2 font-bold">HangOut</div>

          <h1 className="mt-xl max-w-[340px] text-h1">
            Welcome back to your community.
          </h1>

          <p className="mt-md max-w-[380px] text-body text-white/80">
            Reconnect with your groups, messages, and conversations built around
            the things you care about.
          </p>

          <div className="mt-2xl rounded-card bg-white/10 p-lg">
            <p className="text-small text-white/70">What you can do</p>
            <h3 className="mt-xs text-h3">Chat, Discover, Connect</h3>
            <p className="mt-sm text-small text-white/80">
              Join active communities, continue your conversations, and explore
              people with shared interests.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex items-center justify-center px-xl py-3xl">
          <div className="w-full max-w-[420px]">
            <p className="text-small font-medium text-primary dark:text-darkprimary">
              Welcome back
            </p>

            <h2 className="mt-sm text-h1 text-text-primary dark:text-darktext-primary">
              Login to HangOut
            </h2>

            <p className="mt-sm text-body text-text-secondary dark:text-darktext-secondary">
              Access your profile, communities, and ongoing conversations.
            </p>

            <form onSubmit={handleSubmit} className="mt-xl space-y-md">
              {/* Email */}
              <div>
                <label className="mb-xs block text-small font-medium text-text-primary dark:text-darktext-primary">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-border bg-bg-surface px-md py-sm text-body text-text-primary outline-none transition focus:border-primary dark:border-darkborder dark:bg-darkbg-surface dark:text-darktext-primary dark:focus:border-darkprimary"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-xs flex items-center justify-between">
                  <label className="text-small font-medium text-text-primary dark:text-darktext-primary">
                    Password
                  </label>

                  <button
                    type="button"
                    className="cursor-pointer text-small text-primary hover:text-primary-hover dark:text-darkprimary dark:hover:text-darkprimary-hover"
                  >
                    Forgot Password?
                  </button>
                </div>

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-border bg-bg-surface px-md py-sm text-body text-text-primary outline-none transition focus:border-primary dark:border-darkborder dark:bg-darkbg-surface dark:text-darktext-primary dark:focus:border-darkprimary"
                />
              </div>

              {/* Remember Me */}
              <label className="flex items-center gap-sm text-small text-text-secondary dark:text-darktext-secondary">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="h-4 w-4 cursor-pointer accent-primary dark:accent-darkprimary"
                />
                Remember me
              </label>

              {/* Error */}
              {error && <p className="text-small text-red-500">{error}</p>}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer rounded-md bg-primary px-md py-sm text-body font-medium text-white transition hover:bg-primary-hover disabled:opacity-60 dark:bg-darkprimary dark:hover:bg-darkprimary-hover"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

          

            {/* Divider */}
            <div className="my-lg flex items-center gap-sm">
              <div className="h-px flex-1 bg-border dark:bg-darkborder"></div>
              <span className="text-caption text-text-muted dark:text-darktext-muted">
                OR
              </span>
              <div className="h-px flex-1 bg-border dark:bg-darkborder"></div>
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full cursor-pointer rounded-md border border-border bg-bg-surface px-md py-sm text-body font-medium text-text-primary transition hover:bg-bg-muted dark:border-darkborder dark:bg-darkbg-surface dark:text-darktext-primary dark:hover:bg-darkbg-muted"
            >
              Continue with Google
            </button>

            <p className="mt-lg text-center text-small text-text-secondary dark:text-darktext-secondary">
  New to HangOut?{" "}
  <Link
    to="/signup"
    className="cursor-pointer text-primary hover:text-primary-hover dark:text-darkprimary dark:hover:text-darkprimary-hover"
  >
    Sign Up
  </Link>
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;