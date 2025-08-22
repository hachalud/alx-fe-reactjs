const Login = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={onLogin}
        style={{
          background: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
