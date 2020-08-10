import React from 'react';

const Header = () => (
  <div
    className="masthead"
    style={{
      background: `url('header-bg.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="container h-auto">
      <div className="row h-auto">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5 mt-4 text-white">Create your MTG card Catalog and browse through it directly from Magic The Gathering Official API</h1>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  <img src="gthrlogowhite.png" className="img-fluid mt-1" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
