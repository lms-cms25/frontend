type Props = {
  params: { id: string };
};

export default function CourseDetailsPage({ params }: Props) {
  const courses = [
    {
      id: "1",
      title: "Frontend Development",
      description: "Learn frontend step by step",
      instructor: "Anna Berg",
    },
    {
      id: "2",
      title: "Backend Development",
      description: "Learn backend with .NET",
      instructor: "Johan Nilsson",
    },
  ];

  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      <button>Enroll</button>
    </div>
  );
}