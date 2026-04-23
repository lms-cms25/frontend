import styles from "./courses.module.css";

// Testdata för kurser
const courses = [
  {
    id: 1,
    title: "Machine Learning Basics",
    instructor: "Jennifer Anderson",
    rating: 5,
    image: "images/course1.jpg",
    category: "Graphic Design",
  },
  {
    id: 2,
    title: "Business Analytics & Strategy",
    instructor: "Robert Chen",
    rating: 5,
    image: "images/course2.jpg",
    category: "UI/UX Design",
  },
  {
    id: 3,
    title: "Content Marketing",
    instructor: "Emily Davis",
    rating: 5,
    image: "images/course3.jpg",
    category: "Brand Identity",
  },
  {
    id: 4,
    title: "Product Design for Beginner",
    instructor: "Michael Torres",
    rating: 5,
    image: "images/course4.jpg",
    category: "Web Design",
  },
  {
    id: 5,
    title: "Backend Developer",
    instructor: "Sarah Williams",
    rating: 4,
    image: "images/course5.jpg",
    category: "Development",
  },
  {
    id: 6,
    title: "Adobe XD for Designer",
    instructor: "David Martinez",
    rating: 5,
    image: "images/course6.jpg",
    category: "Design",
  },
];

// Huvudkomponent för courses-sidan
export default function CoursesPage() {
  return (
    <section className={styles.coursesSection}>
      {/* Övre rad med kategorier */}
      <div className={styles.topBlock}>
        <h2 className={styles.blockTitle}>Popular This Week</h2>

        <div className={styles.tagsRow}>
          <div className={styles.tag}>Graphic Design</div>
          <div className={styles.tag}>UI/UX Design</div>
          <div className={styles.tag}>Brand Identity</div>
          <div className={styles.tag}>Web Design</div>
        </div>
      </div>

      {/* Titelrad */}
      <div className={styles.headerRow}>
        <h2 className={styles.blockTitle}>All Courses</h2>
        <span className={styles.seeAll}>See All</span>
      </div>

      {/* Grid med 2 kort per rad */}
      <div className={styles.coursesGrid}>
        {courses.map((course) => (
          <article key={course.id} className={styles.courseCard}>
            {/* Bild */}
            <img
              src={course.image}
              alt={course.title}
              className={styles.courseImage}
            />

            {/* Innehåll */}
            <div className={styles.cardContent}>
              <h3 className={styles.courseTitle}>{course.title}</h3>

              <div className={styles.courseMeta}>
                <span className={styles.metaDot}></span>
                <span className={styles.instructor}>{course.instructor}</span>
                <span className={styles.metaSeparator}>·</span>
                <span className={styles.rating}>⭐ {course.rating}</span>
              </div>

              {/* Knapp */}
              <button className={styles.enrollButton}>Enroll Now</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}