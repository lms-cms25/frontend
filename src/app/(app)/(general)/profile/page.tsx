"use client";

import { useEffect, useState } from "react";
import FormGroup from "@/components/forms/FormGroup";
import { getProfile, updateProfile } from "./profileService";
import styles from "./profile.module.css";

function Page() {
  const [formData, setFormData] = useState({
    userId: "test123",
    firstName: "",
    lastName: "",
    phone: "",
    description: "",
  });

  // LOAD PROFILE (GET)
  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProfile("test123");

        if (data) {
          setFormData(data);
        }
      } catch (err) {
        console.error("ERROR loading profile:", err);
      }
    };

    load();
  }, []);

  // HANDLE INPUT
  const handleChange = (e: any) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // SAVE (PUT)
  const handleSubmit = async (e: any) => {
  e.preventDefault();
    try {
      await updateProfile(formData);

      // const updated = await getProfile(formData.userId);

      // setFormData(updated); // sync med DB
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.page}>

      {/* LEFT SIDE */}
      <div className={styles.left}>

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

            <h3 className={styles.profileName}>
              {formData.firstName} {formData.lastName}
            </h3>

            <div className={styles.roleWrapper}>
              <span className="label label-orange-on-orange label-small">
                Student
              </span>
            </div>
          </div>

          <div className={styles.bioWrapper}>
            <h2 className={styles.bioH}>Bio</h2>
            <div className={styles.cardMedium}>
              <p className={styles.bioP}>
                {formData.description || "Short bio text goes here..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <form className={styles.form} onSubmit={handleSubmit}>

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
            onChange={handleChange}
          />

          <FormGroup
            label="Last Name"
            id="lastName"
            type="text"
            placeholder="Enter last name"
            onChange={handleChange}
          />

          <FormGroup
            label="Phone number"
            id="phone"
            type="tel"
            placeholder="Enter phone number"
            onChange={handleChange}
          />

          <label className="form-label">Description</label>
          <textarea
            id="description"
            className="form-textarea"
            onChange={handleChange}
            value={formData.description}
          />

          <div className={styles.buttonRow}>
            <button type="button" className="primary-btn btn-normal">
              Cancel
            </button>

            <button type="submit" className="primary-btn btn-normal">
              Save
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default Page;