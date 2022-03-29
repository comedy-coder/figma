
import './App.scss'
import logo from './images/Logo.png'
function App() {
  return (
    <div className='header' >
    <div className='wrapper' >
        <div className='container'>
          <div className='header-container'>
            <img srcSet={`${logo} 2x`}  className='header-logo' alt=''/>
            <ul className='menu'>
              <li className='menu-item'>
                  <a className='menu-link' ahref='#'>About</a>
              </li>
              <li className='menu-item'>
                  <a className='menu-link' ahref='#'>Features</a>
              </li>
              <li className='menu-item'>
                  <a className='menu-link' ahref='#'>Pricing</a>
              </li>
              <li className='menu-item'>
                  <a className='menu-link' ahref='#'>Testimonials</a>
              </li>
              <li className='menu-item'>
                  <a className='menu-link' ahref='#'>Help</a>
              </li>
            </ul>
            <div className='header-auth'>
              <a href='#' className='header-sigin'>Sign In</a>
              <a href='#' className='header-sigup'>Sign Up</a>
            </div>
              
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
