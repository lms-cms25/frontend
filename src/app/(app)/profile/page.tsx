import FormGroup from "@/components/forms/FormGroup";


export default function Page() {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      {/* LEFT SIDE */}
      <div style={{ width: "35%" }}>
        <h2 style={{ fontSize: "25px" }}>Profile</h2>
        <div style={{ background: "#fff", marginTop: 100, padding: "5px",height: "700px", borderRadius: "12px" }}>
          
          {/* Cover + Avatar */}
          <div style={{ height: "120px", background: "#ddd", borderRadius: "12px" }} />
          <div style={{ marginTop: "-30px", textAlign: "center" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#aaa",
                margin: "0 auto",
              }}
            />
          </div>
          <h3 style={{ fontSize: "18px", textAlign: "center", marginTop: 5}}>
            Profile Name
          </h3>
          {/* Bio */}
          <p style={{ fontSize: "12px", color: "#666" }}>
            Short bio text goes here...
          </p>
        </div>
      </div>
              
      {/* RIGHT SIDE */}
      <div style={{ width: "65%", background: "#fff", padding: "16px", borderRadius: "12px", marginTop: "125px"}}>

        <form style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "120px" }}>
          
          <input type="file" />

          <FormGroup
            label="First name"
            id="firstName"
            type="text"
            placeholder="Enter first name"
          />

          <FormGroup
            label="Last name"
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

          <label>Description</label>
          <textarea rows={5} placeholder="Write something..." />

          {/* Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button className="primary-btn btn-small" type="button">Cancel</button>
            <button className="primary-btn btn-small"  type="submit">Save</button>

          </div>
        </form>
      </div>
    </div>
  );
}