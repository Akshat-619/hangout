import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: null,
  });

  const [avatarPreview, setAvatarPreview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar" && files[0]) {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        avatar: file,
      }));
      setAvatarPreview(URL.createObjectURL(file));
      setError("");
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill all required fields");
      return;
    }

    if (form.username.includes(" ")) {
      setError("Username should not contain spaces");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("signupUser", JSON.stringify({
        fullName: form.fullName,
        username: form.username,
        email: form.email,
      }));

      alert("Account created successfully");
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-md py-md bg-bg-primary dark:bg-darkbg-primary"
    >
      <div
        className="grid w-full max-w-[1080px] overflow-hidden rounded-card shadow-elevation4 bg-bg-surface dark:bg-darkbg-surface lg:grid-cols-2"
      >
        {/* LEFT PANEL */}
        <div
          className="hidden lg:flex flex-col justify-center px-3xl py-3xl bg-gradient-to-br from-primary to-primary-hover dark:from-darkprimary dark:to-darkprimary-hover text-white"
        >
          <div className="text-h2 font-bold">HangOut</div>

          <h1 className="mt-xl max-w-[340px] text-h1">
            Create your social identity.
          </h1>

          <p className="mt-md max-w-[380px] text-body text-white/80">
            Set up your account, choose how people find you, and start building
            meaningful connections around shared interests.
          </p>

          <div className="mt-2xl rounded-card bg-white/10 p-lg">
            <p className="text-small text-white/70">What happens next</p>
            <h3 className="mt-xs text-h3">Profile Setup & Interests</h3>
            <p className="mt-sm text-small text-white/80">
              After signup, you can add your bio, pick your interests, and make
              your profile feel like you.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex items-center justify-center px-xl py-3xl">
          <div className="w-full max-w-[420px]">
            <p className="text-small font-medium text-primary dark:text-darkprimary">
              Create your account
            </p>

            <h2 className="mt-sm text-h1 text-text-primary dark:text-darktext-primary">
              Join HangOut
            </h2>

            <p className="mt-sm text-body text-text-secondary dark:text-darktext-secondary">
              Start with your basic details and create your profile.
            </p>

            <form onSubmit={handleSubmit} className="mt-xl space-y-md">
              {/* Avatar */}
              <div className="flex items-center gap-md">
                <div className="h-16 w-16 overflow-hidden rounded-full border border-border bg-bg-muted dark:border-darkborder dark:bg-darkbg-muted">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-small text-text-muted dark:text-darktext-muted">
                      Photo
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <label className="mb-xs block text-small font-medium text-text-primary dark:text-darktext-primary">
                    Upload Avatar
                  </label>
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleChange}
                    className="block w-full text-small text-text-secondary dark:text-darktext-secondary file:mr-sm file:rounded-md file:border-0 file:bg-primary file:px-md file:py-xs file:text-white hover:file:bg-primary-hover dark:file:bg-darkprimary dark:hover:file:bg-darkprimary-hover"
                  />
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="mb-xs block text-small font-medium text-text-primary dark:text-darktext-primary">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-md border border-border bg-bg-surface px-md py-sm text-body text-text-primary outline-none focus:border-primary dark:border-darkborder dark:bg-darkbg-surface dark:text-darktext-primary dark:focus:border-darkprimary"
                />
              </div>

              {/* Username */}
              <div>
                <label className="mb-xs block text-small font-medium text-text-primary dark:text-darktext-primary">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="@yourusername"
                  className="w-full rounded-md border border-border bg-bg-surface px-md py-sm text-body text-text-primary outline-none focus:border-primary dark:border-darkborder dark:bg-darkbg-surface dark:text-darktext-primary dark:focus:border-darkprimary"
                />
              </div>

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
                  className="w-full rounded-md border border-border bg-bg-surface px-md py-sm text-body text-text-primary outline-none focus:border-primary dark:border-darkborder dark:bg-darkbg-surface dark:text-darktext-primary dark:focus:border-darkprimary"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-xs block text-small font-medium text-text-primary dark:text-darktext-primary">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  className="w-full rounded-md border border-border bg-bg-surface px-md py-sm text-body text-text-primary outline-none focus:border-primary dark:border-darkborder dark:bg-darkbg-surface dark:text-darktext-primary dark:focus:border-darkprimary"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-xs block text-small font-medium text-text-primary dark:text-darktext-primary">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full rounded-md border border-border bg-bg-surface px-md py-sm text-body text-text-primary outline-none focus:border-primary dark:border-darkborder dark:bg-darkbg-surface dark:text-darktext-primary dark:focus:border-darkprimary"
                />
              </div>

              {error && (
                <p className="text-small text-red-500">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer rounded-md bg-primary px-md py-sm text-body font-medium text-white transition hover:bg-primary-hover disabled:opacity-60 dark:bg-darkprimary dark:hover:bg-darkprimary-hover"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="my-lg flex items-center gap-sm">
              <div className="h-px flex-1 bg-border dark:bg-darkborder"></div>
              <span className="text-caption text-text-muted dark:text-darktext-muted">
                OR
              </span>
              <div className="h-px flex-1 bg-border dark:bg-darkborder"></div>
            </div>

            <button
              type="button"
              className="w-full cursor-pointer rounded-md border border-border bg-bg-surface px-md py-sm text-body font-medium text-text-primary transition hover:bg-bg-muted dark:border-darkborder dark:bg-darkbg-surface dark:text-darktext-primary dark:hover:bg-darkbg-muted"
            >
              Continue with Google
            </button>
<p className="mt-lg text-center text-small text-text-secondary dark:text-darktext-secondary">
  Already have an account?{" "}
  <Link
    to="/"
    className="cursor-pointer text-primary hover:text-primary-hover dark:text-darkprimary dark:hover:text-darkprimary-hover"
  >
    Login
  </Link>
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;