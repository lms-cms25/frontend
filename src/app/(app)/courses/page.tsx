import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    { id: "1", title: "React Course", duration: "12h" },
    { id: "2", title: "ASP.NET Course", duration: "16h" },
  ];

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.duration}</p>

          <Link href={`/courses/${course.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}