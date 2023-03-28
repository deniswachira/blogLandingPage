import React from 'react';

export default function Hero() {
  return (
    <section>
      <div className='container'>
        <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{ backgroundImage: `url("https://placeimg.com/1000/800/tech")` }}>
          <div className="hero-overlay bg-opacity-60 bg-secondary"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                Let's make your blogging a success with blogify
              </h1>
              <button className="btn btn-warning sm:btn-wide"><a href="https://wonderful-field-0b8414a0f.2.azurestaticapps.net/">Get started</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}