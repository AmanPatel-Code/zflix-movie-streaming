import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>ZFLIX</h1>

        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Sign In
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;