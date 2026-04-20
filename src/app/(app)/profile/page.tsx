import FormGroup from "@/components/forms/FormGroup";

const page = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <h1>Profile</h1>
      <form>
        <FormGroup
          label="First Name"
          id="name"
          type="text"
          placeholder="Enter your first name"
          errorMessage="Name is required"
        />
        <FormGroup
          label="Last Name"
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          errorMessage="Last name is required"
        />
        <button type="submit" className="primary-btn btn-small">
          Save
        </button>
      </form>
    </div>
  );
};

export default page;
