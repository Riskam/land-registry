import React from "react";

class Home extends React.Component {
  render() {
    return (
     
      <div>
        {/* Spinner Start */}
        {/* eslint-disable-next-line */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-grow text-primary m-1" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-dark m-1" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary m-1" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/* Spinner End */}
        <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <small className="py-2">
                  <i className="far fa-clock text-primary me-2"></i>Opening
                  Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed{" "}
                </small>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                <div className="me-3 pe-3 border-end py-2">
                  <p className="m-0">
                    <i className="fa fa-envelope-open me-2"></i>info@example.com
                  </p>
                </div>
                <div className="py-2">
                  <p className="m-0">
                    <i className="fa fa-phone-alt me-2"></i>+012 345 6789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */} {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
          <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0 text-primary">
              <i className="fa fa-tooth me-2"></i>DentCare
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Service
              </a>
              <div className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="price.html" className="dropdown-item">
                    Pricing Plan
                  </a>
                  <a href="team.html" className="dropdown-item">
                    Our Dentist
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="appointment.html" className="dropdown-item">
                    Appointment
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <button
              type="button"
              className="btn text-dark"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search"></i>
            </button>
            <a
              href="appointment.html"
              className="btn btn-primary py-2 px-4 ms-3"
            >
              Appointment
            </a>
          </div>
        </nav>
        {/* Navbar End */} {/* Full Screen Search Start */}
        <div className="modal fade" id="searchModal" tabindex="-1">
          <div className="modal-dialog modal-fullscreen">
            <div
              className="modal-content"
              style={"background: rgba(9, 30, 62, .7);"}
            >
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn bg-white btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={"max-width: 600px;"}>
                  <input
                    type="text"
                    className="form-control bg-transparent border-primary p-3"
                    placeholder="Type search keyword"
                  />
                  <button className="btn btn-primary px-4">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Full Screen Search End */} {/* Carousel Start */}
        <div className="container-fluid p-0">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={"max-width: 900px;"}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      Keep Your Teeth Healthy
                    </h5>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                      Take The Best Quality Dental Treatment
                    </h1>
                    <a
                      href="appointment.html"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Appointment
                    </a>
                    <a
                      href=""
                      className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={"max-width: 900px;"}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      Keep Your Teeth Healthy
                    </h5>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                      Take The Best Quality Dental Treatment
                    </h1>
                    <a
                      href="appointment.html"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Appointment
                    </a>
                    <a
                      href=""
                      className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Carousel End */} {/* Banner Start */}
        <div className="container-fluid banner mb-5">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                <div
                  className="bg-primary d-flex flex-column p-5"
                  style={"height: 300px;"}
                >
                  <h3 className="text-white mb-3">Opening Hours</h3>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0">Mon - Fri</h6>
                    <p className="mb-0"> 8:00am - 9:00pm</p>
                  </div>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0">Saturday</h6>
                    <p className="mb-0"> 8:00am - 7:00pm</p>
                  </div>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0">Sunday</h6>
                    <p className="mb-0"> 8:00am - 5:00pm</p>
                  </div>
                  <a className="btn btn-light" href="">
                    Appointment
                  </a>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                <div
                  className="bg-dark d-flex flex-column p-5"
                  style={"height: 300px;"}
                >
                  <h3 className="text-white mb-3">Search A Doctor</h3>
                  <div
                    className="date mb-3"
                    id="date"
                    data-target-input="nearest"
                  >
                    <input
                      type="text"
                      className="form-control bg-light border-0 datetimepicker-input"
                      placeholder="Appointment Date"
                      data-target="#date"
                      data-toggle="datetimepicker"
                      style={"height: 40px;"}
                    />
                  </div>
                  <select
                    className="form-select bg-light border-0 mb-3"
                    style={"height: 40px;"}
                  >
                    <option selected>Select A Service</option>
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                  </select>
                  <a className="btn btn-light" href="">
                    Search Doctor
                  </a>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                <div
                  className="bg-secondary d-flex flex-column p-5"
                  style={"height: 300px;"}
                >
                  <h3 className="text-white mb-3">Make Appointment</h3>
                  <p className="text-white">
                    Ipsum erat ipsum dolor clita rebum no rebum dolores labore,
                    ipsum magna at eos et eos amet.
                  </p>
                  <h2 className="text-white mb-0">+012 345 6789</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Start */} {/* About Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title mb-4">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    About Us
                  </h5>
                  <h1 className="display-5 mb-0">
                    The World's Best Dental Clinic That You Can Trust
                  </h1>
                </div>
                <h4 className="text-body fst-italic mb-4">
                  Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no
                  lorem sit clita duo justo magna dolore
                </h4>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo et tempor eirmod magna dolore erat amet
                </p>
                <div className="row g-3">
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      Award Winning
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      Professional Staff
                    </h5>
                  </div>
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      24/7 Opened
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3"></i>
                      Fair Prices
                    </h5>
                  </div>
                </div>
                <a
                  href="appointment.html"
                  className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  Make Appointment
                </a>
              </div>
              <div className="col-lg-5" style={"min-height: 500px;"}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                    data-wow-delay="0.9s"
                    src="img/about.jpg"
                    style={"object-fit: cover;"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */} {/* Appointment Start */}
        <div
          className="container-fluid bg-primary bg-appointment my-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5">
                <div className="py-5">
                  <h1 className="display-5 text-white mb-4">
                    We Are A Certified and Award Winning Dental Clinic You Can
                    Trust
                  </h1>
                  <p className="text-white mb-0">
                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                    kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo
                    ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea
                    et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr
                    ut dolores magna sit. Sea dolore sanctus sed et. Takimata
                    takimata sanctus sed.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <h1 className="text-white mb-4">Make Appointment</h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select bg-light border-0"
                          style={"height: 55px;"}
                        >
                          <option selected>Select A Service</option>
                          <option value="1">Service 1</option>
                          <option value="2">Service 2</option>
                          <option value="3">Service 3</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select bg-light border-0"
                          style={"height: 55px;"}
                        >
                          <option selected>Select Doctor</option>
                          <option value="1">Doctor 1</option>
                          <option value="2">Doctor 2</option>
                          <option value="3">Doctor 3</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          placeholder="Your Name"
                          style={"height: 55px;"}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control bg-light border-0"
                          placeholder="Your Email"
                          style={"height: 55px;"}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="date"
                          id="date1"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control bg-light border-0 datetimepicker-input"
                            placeholder="Appointment Date"
                            data-target="#date1"
                            data-toggle="datetimepicker"
                            style={"height: 55px;"}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="time"
                          id="time1"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control bg-light border-0 datetimepicker-input"
                            placeholder="Appointment Time"
                            data-target="#time1"
                            data-toggle="datetimepicker"
                            style={"height: 55px;"}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-dark w-100 py-3"
                          type="submit"
                        >
                          Make Appointment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Appointment End */} {/* Service Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row g-5 mb-5">
              <div
                className="col-lg-5 wow zoomIn"
                data-wow-delay="0.3s"
                style={"min-height: 400px;"}
              >
                <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/before.jpg"
                    style={"object-fit: cover;"}
                  />
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/after.jpg"
                    style={"object-fit: cover;"}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="section-title mb-5">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Our Services
                  </h5>
                  <h1 className="display-5 mb-0">
                    We Offer The Best Quality Dental Services
                  </h1>
                </div>
                <div className="row g-5">
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.6s"
                  >
                    <div className="rounded-top overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/service-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Cosmetic Dentistry</h5>
                    </div>
                  </div>
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.9s"
                  >
                    <div className="rounded-top overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/service-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Dental Implants</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="col-lg-7">
                <div className="row g-5">
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.3s"
                  >
                    <div className="rounded-top overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/service-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Dental Bridges</h5>
                    </div>
                  </div>
                  <div
                    className="col-md-6 service-item wow zoomIn"
                    data-wow-delay="0.6s"
                  >
                    <div className="rounded-top overflow-hidden">
                      <img
                        className="img-fluid"
                        src="img/service-4.jpg"
                        alt=""
                      />{" "}
                    </div>
                    <div className="position-relative bg-light rounded-bottom text-center p-4">
                      <h5 className="m-0">Teeth Whitening</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 service-item wow zoomIn"
                data-wow-delay="0.9s"
              >
                <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                  <h3 className="text-white mb-3">Make Appointment</h3>
                  <p className="text-white mb-3">
                    Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor
                    est magna stet eirmod
                  </p>
                  <h2 className="text-white mb-0">+012 345 6789</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */} {/* Offer Start */}
        <div
          className="container-fluid bg-offer my-5 py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
                <div className="offer-text text-center rounded p-5">
                  <h1 className="display-5 text-white">
                    Save 30% On Your First Dental Checkup
                  </h1>
                  <p className="text-white mb-4">
                    Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea
                    et dolore et at sea ea at dolor justo ipsum duo rebum sea.
                    Eos vero eos vero ea et dolore eirmod diam duo lorem magna
                    sit dolore sed et.
                  </p>
                  <a
                    href="appointment.html"
                    className="btn btn-dark py-3 px-5 me-3"
                  >
                    Appointment
                  </a>
                  <a href="" className="btn btn-light py-3 px-5">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Offer End */} {/* Pricing Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <div className="section-title mb-4">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Pricing Plan
                  </h5>
                  <h1 className="display-5 mb-0">
                    We Offer Fair Prices for Dental Treatment
                  </h1>
                </div>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo eirmod magna dolore erat amet
                </p>
                <h5
                  className="text-uppercase text-primary wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Call for Appointment
                </h5>
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                  +012 345 6789
                </h1>
              </div>
              <div className="col-lg-7">
                <div
                  className="owl-carousel price-carousel wow zoomIn"
                  data-wow-delay="0.9s"
                >
                  <div className="price-item pb-4">
                    <div className="position-relative">
                      <img
                        className="img-fluid rounded-top"
                        src="img/price-1.jpg"
                        alt=""
                      />{" "}
                      <div
                        className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                        style={"z-index: 2;"}
                      >
                        <h2 className="text-primary m-0">$35</h2>
                      </div>
                    </div>
                    <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                      <h4>Teeth Whitening</h4>
                      <hr className="text-primary w-50 mx-auto mt-0" />
                      <div className="d-flex justify-content-between mb-3">
                        <span>Modern Equipment</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Professional Dentist</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>24/7 Call Support</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                      <a
                        href="appointment.html"
                        className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                      >
                        Appointment
                      </a>
                    </div>
                  </div>
                  <div className="price-item pb-4">
                    <div className="position-relative">
                      <img
                        className="img-fluid rounded-top"
                        src="img/price-2.jpg"
                        alt=""
                      />{" "}
                      <div
                        className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                        style={"z-index: 2;"}
                      >
                        <h2 className="text-primary m-0">$49</h2>
                      </div>
                    </div>
                    <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                      <h4>Dental Implant</h4>
                      <hr className="text-primary w-50 mx-auto mt-0" />
                      <div className="d-flex justify-content-between mb-3">
                        <span>Modern Equipment</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Professional Dentist</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>24/7 Call Support</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                      <a
                        href="appointment.html"
                        className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                      >
                        Appointment
                      </a>
                    </div>
                  </div>
                  <div className="price-item pb-4">
                    <div className="position-relative">
                      <img
                        className="img-fluid rounded-top"
                        src="img/price-3.jpg"
                        alt=""
                      />{" "}
                      <div
                        className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                        style={"z-index: 2;"}
                      >
                        <h2 className="text-primary m-0">$99</h2>
                      </div>
                    </div>
                    <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                      <h4>Root Canal</h4>
                      <hr className="text-primary w-50 mx-auto mt-0" />
                      <div className="d-flex justify-content-between mb-3">
                        <span>Modern Equipment</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Professional Dentist</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>24/7 Call Support</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                      <a
                        href="appointment.html"
                        className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                      >
                        Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing End */} {/* Testimonial Start */}
        <div
          className="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div
                  className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="testimonial-item text-center text-white">
                    <img
                      className="img-fluid mx-auto rounded mb-4"
                      src="img/testimonial-1.jpg"
                      alt=""
                    />{" "}
                    <p className="fs-5">
                      Dolores sed duo clita justo dolor et stet lorem kasd
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                      labore diam erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="mx-auto w-25" />
                    <h4 className="text-white mb-0">Client Name</h4>
                  </div>
                  <div className="testimonial-item text-center text-white">
                    <img
                      className="img-fluid mx-auto rounded mb-4"
                      src="img/testimonial-2.jpg"
                      alt=""
                    />{" "}
                    <p className="fs-5">
                      Dolores sed duo clita justo dolor et stet lorem kasd
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                      labore diam erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="mx-auto w-25" />
                    <h4 className="text-white mb-0">Client Name</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */} {/* Team Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title bg-light rounded h-100 p-5">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Our Dentist
                  </h5>
                  <h1 className="display-6 mb-4">
                    Meet Our Certified & Experienced Dentist
                  </h1>
                  <a
                    href="appointment.html"
                    className="btn btn-primary py-3 px-5"
                  >
                    Appointment
                  </a>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={"z-index: 1;"}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src="img/team-1.jpg"
                      alt=""
                    />{" "}
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-instagram fw-normal"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={"z-index: 1;"}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src="img/team-2.jpg"
                      alt=""
                    />{" "}
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-instagram fw-normal"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={"z-index: 1;"}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src="img/team-3.jpg"
                      alt=""
                    />{" "}
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-instagram fw-normal"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={"z-index: 1;"}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src="img/team-4.jpg"
                      alt=""
                    />{" "}
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-instagram fw-normal"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={"z-index: 1;"}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src="img/team-5.jpg"
                      alt=""
                    />{" "}
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                      <a className="btn btn-primary btn-square m-1" href="/#">
                        <i className="fab fa-instagram fw-normal"></i>
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */} {/* Newsletter Start */}
        <div
          className="container-fluid position-relative pt-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={"z-index: 1;"}
        >
          <div className="container">
            <div className="bg-primary p-5">
              <form className="mx-auto" style={"max-width: 600px;"}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-white p-3"
                    placeholder="Your Email"
                  />
                  <button className="btn btn-dark px-4">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        /* Newsletter End */ /* Footer Start */
        <div
          className="container-fluid bg-dark text-light py-5 wow fadeInUp"
          data-wow-delay="0.3s"
          style={"margin-top: -75px;"}
        >
          <div className="container pt-5">
            <div className="row g-5 pt-4">
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>Home
                  </a>
                  <a className="text-light mb-2" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>About
                    Us
                  </a>
                  <a className="text-light mb-2" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>Our
                    Services
                  </a>
                  <a className="text-light mb-2" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>
                    Latest Blog
                  </a>
                  <a className="text-light" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Popular Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>Home
                  </a>
                  <a className="text-light mb-2" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>About
                    Us
                  </a>
                  <a className="text-light mb-2" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>Our
                    Services
                  </a>
                  <a className="text-light mb-2" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>
                    Latest Blog
                  </a>
                  <a className="text-light" href="/#">
                    <i className="bi bi-arrow-right text-primary me-2"></i>
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Get In Touch</h3>
                <p className="mb-2">
                  <i className="bi bi-geo-alt text-primary me-2"></i>123 Street,
                  New York, USA
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope-open text-primary me-2"></i>
                  info@example.com
                </p>
                <p className="mb-0">
                  <i className="bi bi-telephone text-primary me-2"></i>+012 345
                  67890
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Follow Us</h3>
                <div className="d-flex">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                    href="/#"
                  >
                    <i className="fab fa-twitter fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                    href="/#"
                  >
                    <i className="fab fa-facebook-f fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                    href="/#"
                  >
                    <i className="fab fa-linkedin-in fw-normal"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="/#"
                  >
                    <i className="fab fa-instagram fw-normal"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid text-light py-4"
          style={"background: #051225;"}
        >
          <div className="container">
            <div className="row g-0">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">
                  &copy;{" "}
                  <a className="text-white border-bottom" href="/#">
                    Your Site Name
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">
                  Designed by{" "}
                  <a
                    className="text-white border-bottom"
                    href="https://htmlcodex.com"
                  >
                    HTML Codex
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        /* Footer End */ /* Back to Top */
        <a
          href="/#"
          className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
        /* JavaScript Libraries */
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="Assets/lib/wow/wow.min.js"></script>
        <script src="Assets/lib/easing/easing.min.js"></script>
        <script src="Assets/lib/waypoints/waypoints.min.js"></script>
        <script src="Assets/lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="Assets/lib/tempusdominus/js/moment.min.js"></script>
        <script src="Assets/lib/tempusdominus/js/moment-timezone.min.js"></script>
        <script src="Assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
        <script src="Assets/lib/twentytwenty/jquery.event.move.js"></script>
        <script src="Assets/lib/twentytwenty/jquery.twentytwenty.js"></script>
        /* Template Javascript */
        <script src="Assets/js/main.js"></script>
      </div>
    );
  }
}

export default Home;
