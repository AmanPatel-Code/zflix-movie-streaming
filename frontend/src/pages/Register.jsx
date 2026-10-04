import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>ZFLIX</h1>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button>
          Create Account
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">
            Sign In
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;