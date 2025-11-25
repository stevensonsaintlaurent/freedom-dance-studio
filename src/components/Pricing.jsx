// import "./pricing.css";

export const Pricing = () => {
  return (
    <section id="pricing" className="pricing my-6">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <h5>
              <span className="badge bg-primary rounded-0 text-uppercase">
                Pricing
              </span>
            </h5>
            <h2 className="fw-bold">Flexible Pricing Options</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <!-- Pricing Col 1 --> */}
          <div className="col-md-3">
            <div className="card bg-secondary text-center rounded-0">
              <div className="card-body">
                <div className="xl-text fw-bold">$49</div>
                <h4 className="card-title text-primary text-uppercase fw-bold mb-5">
                  Standard
                </h4>
                <p>
                  Our standard pricing plan offers a comprehensive set of
                  features for your software needs
                </p>
                <ul className="list-unstyled lh-lg mt-5">
                  <li className="text-uppercase fs-5 fw-bold">
                    Subscribers List
                  </li>
                  <li className="text-uppercase fs-5 fw-bold">
                    User Admin Control
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="btn btn-primary text-white mt-6 fw-bold"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Pricing Col 2 --> */}
          <div className="col-md-3">
            <div className="card bg-secondary text-center rounded-0">
              <div className="card-body">
                <div className="xl-text fw-bold">$69</div>
                <h4 className="card-title text-primary text-uppercase fw-bold mb-5">
                  Advanced
                </h4>
                <p>
                  {" "}
                  Unlock additional enhanced capabilities. Take your software
                  solutions to the next level
                </p>
                <ul className="list-unstyled lh-lg mt-5">
                  <li className="text-uppercase fs-5 fw-bold">
                    Limited Storage Space
                  </li>
                  <li className="text-uppercase fs-5 fw-bold">
                    Free Cloud Storage
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="btn btn-primary text-white mt-6 fw-bold"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>

          {/* < Pricing Col 3 */}
          <div className="col-md-3">
            <div className="card bg-secondary text-center rounded-0">
              <div className="card-body">
                <div className="xl-text fw-bold">$120</div>
                <h4 className="card-title text-primary text-uppercase fw-bold mb-5">
                  Complete
                </h4>
                <p>
                  Our complete pricing plan offers an all-inclusive package with
                  advanced features
                </p>
                <ul className="list-unstyled lh-lg mt-5">
                  <li className="text-uppercase fs-5 fw-bold">
                    Deployment Protocol
                  </li>
                  <li className="text-uppercase fs-5 fw-bold">
                    Premium Support Pack
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="btn btn-primary text-white mt-6 fw-bold"
                >
                  Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
