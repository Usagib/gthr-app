import React from 'react';
import { Carousel } from 'react-bootstrap';

class FrontEnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: null
    };
  }

  render(){
    return (
      <div className="mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-strain fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              <img src="gthrlogowhite.png" className="logoimg" alt="logo" />
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <i className="navbar-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#download">Add to Catalog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#features">Filter</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#features">Reset</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="https://github.com/Usagib/gthr-app">Docs</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="masthead" style={{
            background: `url("header-bg.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
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
                      <div className="button">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="bg-strain text-center" id="searchFront">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto my-2">
                <form>
                  <form>
                    <div class="row">
                      <div class="col-md-4">
                        <input type="text" className="form-control my-1" placeholder="Card name" />
                      </div>
                      <div class="col-md-4">
                        <input type="text" className="form-control my-1" placeholder="Card text" />
                      </div>
                      <div className="col-md-4">
                        <button type="submit" class="btn btn-light">Add</button>
                        <button type="submit" class="btn btn-light">Reset</button>
                      </div>

                    </div>
                  </form>

                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-strain text-center" id="filterFront">
          <div className="container">
            <div className="row mt-1">
              <div className="col-md-10 mx-auto my-2">
                <form>
                    <div class="row">
                      <div class="col-md-4">
                        <input type="text" className="form-control my-1" placeholder="Card name" />
                      </div>
                      <div class="col-md-4">
                        <input type="text" className="form-control my-1" placeholder="Card text" />
                      </div>
                      <div className="col-md-4">
                        <button type="submit" class="btn btn-light">Filter</button>
                      </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-strain">
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/468x600"
                alt="First slide"
              />
            <div className="container mt-3">
              <h1 className="text-white">information</h1>
            </div>
            </Carousel.Item>
          </Carousel>
        </div>
    </div>
    );
  }
}

export default FrontEnd;
