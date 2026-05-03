// Importerar länk för navigation
import Link from "next/link";

// Importerar kursdata
import { courses } from "../data";

// Importerar CSS
import styles from "../courses.module.css";

// Typ för params från URL
type CourseDetailsPageProps = {
  params: Promise<{ id: string }>;
};

// Course details sida
export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  // Hämtar id från URL, till exempel /courses/1
  const { id } = await params;

  // Hittar rätt kurs baserat på id
  const course = courses.find((c) => c.id === Number(id));

  // Om kursen inte finns
  if (!course) {
    return <h2 className={styles.detailsNotFound}>Course not found</h2>;
  }

  return (
    <section className={styles.detailsPage}>
      {/* Back */}
      <Link href="/courses" className={styles.backLink}>
        ← Back to courses
      </Link>

      <article className={styles.detailsCard}>
        {/* Bild */}
        <img
          src={course.image}
          alt={course.title}
          className={styles.detailsImage}
        />

        <div className={styles.detailsContent}>
          {/* Category */}
          <span className={styles.detailsCategory}>{course.category}</span>

          {/* Title */}
          <h1 className={styles.detailsTitle}>{course.title}</h1>

          {/* Description */}
          <p className={styles.detailsDescription}>{course.description}</p>

          {/* Info */}
          <div className={styles.detailsInfoGrid}>
            <div className={styles.detailsInfoItem}>
              <span>Instructor</span>
              <strong>{course.instructor}</strong>
            </div>

            <div className={styles.detailsInfoItem}>
              <span>Rating</span>
              <strong>⭐ {course.rating}</strong>
            </div>

            <div className={styles.detailsInfoItem}>
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </div>

            <div className={styles.detailsInfoItem}>
              <span>Level</span>
              <strong>{course.level}</strong>
            </div>

            <div className={styles.detailsInfoItem}>
              <span>Students</span>
              <strong>{course.students}</strong>
            </div>
          </div>

          {/* Learn section */}
          <div className={styles.learnBox}>
            <h2>What you will learn</h2>
            <ul>
              <li>Understand core concepts</li>
              <li>Work with real examples</li>
              <li>Build practical skills</li>
            </ul>
          </div>

          {/* Button */}
          <button className={styles.detailsButton}>Enroll Now</button>
        </div>
      </article>
    </section>
  );
}