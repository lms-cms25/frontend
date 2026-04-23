import Link from "next/link";
import styles from "./courses.module.css";
import { courses } from "./data"; 

// Huvudkomponent för courses-sidan
export default function CoursesPage() {
  return (
    <section className={styles.coursesSection}>
      {/* Övre rad */}
      <div className={styles.topBlock}>
        <h2 className={styles.blockTitle}>Popular This Week</h2>

        <div className={styles.tagsRow}>
          <div className={styles.tag}>Graphic Design</div>
          <div className={styles.tag}>UI/UX Design</div>
          <div className={styles.tag}>Brand Identity</div>
          <div className={styles.tag}>Web Design</div>
        </div>
      </div>

      {/* Titel */}
      <div className={styles.headerRow}>
        <h2 className={styles.blockTitle}>All Courses</h2>
        <span className={styles.seeAll}>See All</span>
      </div>

      {/* Grid */}
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
              <Link
                href={`/courses/${course.id}`}
                className={styles.enrollButton}
              >
                Enroll Now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}