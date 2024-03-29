import React from 'react';

const THEMES = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

export default function Header() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleThemeChange = (e) => {
    const val = e.target.getAttribute('data-set-theme');
    setTheme(val)
  }

  return (
    <header className='bg-base-100 py-2 sticky top-0 z-50'>
      <div className='container'>
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-circle btn-primary lg:hidden mr-1">
                <i className='bi bi-list text-2xl'></i>
              </label>
              <ul tabIndex={0} className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
                <li><a href="#!">Home</a></li>
                <li><a href="#!">Services</a></li>
                <li><a href="#!">About</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-2xl">Blogify</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-medium">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">Services</a></li>
              <li><a href="#!">About</a></li>
              <li><a href="#!">Work</a></li>
              <li><a href="#!">Case Study</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}