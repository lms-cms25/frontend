import FormGroup from "@/components/forms/FormGroup";
import "./profile.css";

function page() {
  return (
    <div className="page">

      <div className="left">
        <h2 className="title">Profile</h2>

        <div className="card-large">
          <div className="cover" />

          <div className="avatar-wrapper">
            <div className="avatar" />
            <h3 className="profile-name">Profile Name</h3>
          </div>
          <div className="bio-wrapper">
            <h2 className="bio-h">Bio</h2>
            <div className="card-medium">
              <p className="bio-p">Short bio text goes here...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <form className="form">
          <div className="upload-row">
            <div className="image-placeholder">
              <span>No image</span>
            </div>
            <label className="upload-btn">
              Upload file
              <input type="file" hidden />
            </label>
          </div>

          <FormGroup
            label="First Name"
            id="firstName"
            type="text"
            placeholder="Enter first name"
          />
          <FormGroup
            label="Last Name"
            id="lastName"
            type="text"
            placeholder="Enter last name"
          />
          <FormGroup
            label="Phone number"
            id="phone"
            type="tel"
            placeholder="Enter phone number"
          />

          <label className="form-label">Description</label>
          <textarea className="form-textarea"></textarea>

          <div className="button-row">
            <button className="primary-btn btn-small" type="button">Cancel</button>
            <button className="primary-btn btn-small" type="submit">Save</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default page;