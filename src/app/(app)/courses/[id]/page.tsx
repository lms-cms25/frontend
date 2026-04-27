// Importerar kursdata
import { courses } from "../data";

// Typ för params från URL
type CourseDetailsPageProps = {
  params: Promise<{ id: string }>;
};

// Sida för kursdetaljer
export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  // Hämtar id från URL
  const { id } = await params;

  // Hittar rätt kurs
  const course = courses.find((c) => c.id === Number(id));

  // Om kursen inte finns
  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* Titel */}
      <h1>{course.title}</h1>

      {/* Bild */}
      <img
        src={course.image}
        alt={course.title}
        style={{ width: "400px", height: "auto" }}
      />

      {/* Instruktör */}
      <p>Instructor: {course.instructor}</p>

      {/* Betyg */}
      <p>Rating: ⭐ {course.rating}</p>

      {/* Knapp */}
      <button>Enroll</button>
    </div>
  );
}