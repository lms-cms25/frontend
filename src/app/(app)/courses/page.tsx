"use client"; // важно!

import Link from "next/link";
import styles from "./courses.module.css";
import { courses } from "./data";
import { useState } from "react";

// Huvudkomponent för courses-sidan
export default function CoursesPage() {
  // State för sök
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Filtrerar kurser
  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category
      ? course.category === category
      : true;

    return matchSearch && matchCategory;
  });

  return (
    <section className={styles.coursesSection}>
      {/* Sökfält */}
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />

      {/* Kategorier */}
      <div className={styles.tagsRow}>
        <div onClick={() => setCategory("")} className={styles.tag}>
          All
        </div>
        <div onClick={() => setCategory("Graphic Design")} className={styles.tag}>
          Graphic Design
        </div>
        <div onClick={() => setCategory("UI/UX Design")} className={styles.tag}>
          UI/UX Design
        </div>
        <div onClick={() => setCategory("Development")} className={styles.tag}>
          Development
        </div>
      </div>

      {/* Grid */}
      <div className={styles.coursesGrid}>
        {filteredCourses.map((course) => (
          <article key={course.id} className={styles.courseCard}>
            <img
              src={course.image}
              alt={course.title}
              className={styles.courseImage}
            />

            <div className={styles.cardContent}>
              <h3 className={styles.courseTitle}>{course.title}</h3>

              <div className={styles.courseMeta}>
                <span>{course.instructor}</span>
                <span>· ⭐ {course.rating}</span>
              </div>

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