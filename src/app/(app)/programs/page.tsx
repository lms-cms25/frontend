"use client";

import { useEffect, useState } from "react";
import FormGroup from "@/components/forms/FormGroup";
import { createProgram, getPrograms, Program } from "@/lib/api";

const ProgramsPage = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getPrograms()
      .then((data) => setPrograms(data))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    const created = await createProgram(name, description);
    setPrograms([...programs, created]);
    setName("");
    setDescription("");
  };

  return (
    <div>
      <h1>Programs</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem", maxWidth: "500px" }}>
        <FormGroup
          label="Name"
          id="program-name"
          type="text"
          placeholder=".NET Web Development"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormGroup
          label="Description"
          id="program-description"
          type="text"
          placeholder="ASP.NET Core fundamentals"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn-normal">
          Add program
        </button>
      </form>

      <h2 style={{ marginTop: "2rem" }}>All programs</h2>

      {loading && <p>Loading...</p>}

      {!loading && programs.length === 0 && (
        <p>No programs yet. Add one above.</p>
      )}

      <ul style={{ marginTop: "1rem" }}>
        {programs.map((program) => (
          <li key={program.id} style={{ marginBottom: "0.5rem" }}>
            <strong>{program.name}</strong> - {program.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramsPage;
