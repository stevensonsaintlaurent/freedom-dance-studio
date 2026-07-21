import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useOnSudmit from "../hooks/useOnSudmit";

const MembershipForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  console.log(location);
  const { title, price, description } = location.state;
  const { onSubmit } = useOnSudmit();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-base-200 flex justify-center items-center p-6">
        <div className="card bg-base-100 shadow-2xl max-w-2xl w-full">
          <div className="card-body text-center">
            <div className="text-6xl">🎉</div>

            <h2 className="text-3xl font-bold text-primary">
              Membership Request Submitted!
            </h2>

            <p className="text-lg mt-4">
              Thank you for choosing <strong>Freedom Dance Studio</strong>.
            </p>

            <div className="alert alert-info mt-6">
              <span>
                💳 Your membership is <strong>NOT paid online.</strong>
                <br />
                Please visit the studio to complete your payment before your
                first class.
              </span>
            </div>

            <p className="mt-4">
              A team member will review your information and welcome you to our
              dance family!
            </p>

            <button
              className="btn btn-primary mt-6"
              onClick={() => setSubmitted(false)}
            >
              Register Another Member
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-base-200 py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-primary">
            Freedom Dance Studio Membership
          </h1>

          <p className="py-4 max-w-3xl mx-auto">
            Become a member and enjoy weekly classes, workshops, social events,
            and exclusive member benefits.
          </p>

          <div className="alert alert-warning max-w-3xl mx-auto">
            <span>
              ⚠️ Membership payments are completed <strong>in person</strong> at
              Freedom Dance Studio. Filling out this form only reserves your
              membership.
            </span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card bg-base-100 shadow-xl p-8">
          {/* Personal Information */}

          <h2 className="text-2xl font-bold mb-5">Personal Information</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>

              <input
                required
                type="text"
                placeholder="John"
                className="input input-bordered"
                name="name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>

              <input
                required
                type="text"
                placeholder="Doe"
                className="input input-bordered"
                name="last name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                required
                type="email"
                placeholder="john@email.com"
                className="input input-bordered"
                name="email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>

              <input
                required
                type="tel"
                placeholder="(702) 555-5555"
                className="input input-bordered"
                name="number"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date of Birth</span>
              </label>

              <input required type="date" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>

              <select className="select select-bordered" name="gender">
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>

          {/* Membership */}

          <div className="divider"></div>

          <h2 className="text-2xl font-bold mb-5">Membership Types</h2>
          <input
            readOnly
            type="tel"
            placeholder="$30"
            className="input input-bordered"
            value={title ? "" : "bachata"}
            name="title"
          />

          <h2 className="text-2xl font-bold mb-5">Membership Prices</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              readOnly
              type="tel"
              placeholder={title ? title : ""}
              className="input input-bordered"
              value={price}
              name="price"
            />

            <input
              required
              type="text"
              placeholder="bachata"
              className="input input-bordered"
              value={description}
              name="description"
            />
          </div>

          {/* Experience */}

          <div className="divider"></div>

          <h2 className="text-2xl font-bold mb-5">Dance Experience</h2>

          <textarea
            className="textarea textarea-bordered h-32"
            placeholder="Tell us about your dance experience..."
            name="message"
          ></textarea>

          {/* Terms */}

          <div className="divider"></div>

          <label className="label cursor-pointer justify-start gap-4">
            <input
              required
              type="checkbox"
              className="checkbox checkbox-primary"
            />

            <span>
              I understand that this
              <br />
              form is a membership
              <br />
              request only
              <br />
              and payment will be
              <br />
              made in person at
              <br />
              Freedom Dance Studio.
            </span>
          </label>

          <button
            className="btn btn-primary btn-lg mt-8"
            type="submit"
            onClick={handleSubmit}
          >
            Submit Membership Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default MembershipForm;
