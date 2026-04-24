import FormGroup from "@/components/forms/FormGroup";
import styles from "./profile.module.css";

function Page() {
  return (
    <div className={styles.page}>

      <div className={styles.left}>
        <h2 className={styles.title}>Profile</h2>

        <div className={styles.cardLarge}>
          <img
            className={styles.cover}
            src="/assets/images/cover.svg"
            alt="cover"
          />

          <div className={styles.avatarWrapper}>
            <img
              className={styles.avatar}
              src="/assets/images/avatar.svg"
              alt="avatar"
            />
            <h3 className={styles.profileName}>Profile Name</h3>
            <div>
              <span className="label label-orange-on-orange label-small">Student</span>
            </div>
          </div>
          <div className={styles.bioWrapper}>
            <h2 className={styles.bioH}>Bio</h2>
            <div className={styles.cardMedium}>
              <p className={styles.bioP}>
                Short bio text goes here...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <form className={styles.form}>

          <div className={styles.uploadRow}>
            <div className={styles.imagePlaceholder}>
              <span>No image</span>
            </div>

            <label className={styles.uploadBtn}>
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

          <div className={styles.buttonRow}>
            <button className="primary-btn btn-normal" type="button">
              Cancel
            </button>
            <button className="primary-btn btn-normal" type="submit">
              Save
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default Page;