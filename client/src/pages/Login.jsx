import { Link } from "react-router-dom";
function Login(){
    const [showPassword, setShowPassword] = useState(false);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="p-4 rounded" style={{ width: '50%', minWidth: '300px', maxWidth: '500px', fontFamily: 'Barlow, SemiBold', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h2 className="text-white mb-3" style={{ marginTop: '-80px', fontFamily: 'Barlow, SemiBold' }}>WELCOME BACK!</h2>
        <p className="text-white mb-5" style={{ fontFamily: 'Barlow, Light' }}>
          Don't have an account, <Link to="/signin" className="text-white" style={{ fontFamily: 'Barlow, SemiBold' }}>Sign Up</Link>
          </p>
        <form>
          <div className="mb-4">
            <label htmlFor="login" className="text-white mb-2" style={{ fontFamily: 'Barlow, SemiBold' }}>
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
              name="email"
              className="form-control rounded-pill"
              style={{ height: '50px', width: '100%', marginBottom: '15px', borderRadius: '25px' }}
            />
          </div>
          <div className="mb-4" style={{ position: 'relative' }}>
            <label htmlFor="password" className="text-white mb-2" style={{ fontFamily: 'Barlow, SemiBold' }}>
              <strong>Password</strong>
            </label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-pill"
                style={{ height: '50px', width: '100%', marginBottom: '15px', borderRadius: '25px' }}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="form-check d-flex align-items-center">
              <input className="form-check-input rounded-circle" type="checkbox" value="" id="rememberMe" />
              <label className="form-check-label text-white" htmlFor="rememberMe" style={{ fontFamily: 'Barlow, SemiBold', marginLeft: '5px', marginRight: '230px' }}>
                Remember Me
              </label>
              <Link to="/forgot-password" className="text-white" style={{ fontFamily: 'Barlow, SemiBold', marginLeft: '5px', marginRight: '10px' }}>
                Forgot Password?
              </Link>
            </div>
          </div>
          <button type="submit" className="btn btn-success rounded-pill mb-3" style={{ height: '50px', width: '100%', borderRadius: '25px', backgroundColor: '#02363d', marginTop: '40px', fontFamily: 'Barlow, SemiBold', color: '#fff' }}>
            Sign Up
          </button>
            <div className="d-flex align-items-center mt-3" style={{ textAlign: 'center', marginTop: '20px' }}>
              <p className="text-white mb-0 mx-2" style={{ fontFamily: 'Barlow, SemiBold' }}>or continue with</p>
            </div>
        </form>
      </div>
    </main>
  );
}
export default Login;