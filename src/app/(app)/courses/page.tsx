"use client";

import Link from "next/link";
import styles from "./courses.module.css";
import { useEffect, useState } from "react";

type Course = {
  id: number;
  title: string;
  instructor: string;
  category: string;
  duration: string;
  level: string;
  image: string;
  rating: number;
};

type CoursesResponse = {
  items: Course[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const pageSize = 3;

  // Hämtar kurser från backend API
  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch(
        `https://localhost:7102/api/courses?page=${page}&pageSize=${pageSize}`
      );

      const data: CoursesResponse = await response.json();

      setCourses(data.items);
      setTotalPages(data.totalPages);
    }

    fetchCourses();
  }, [page]);

  // Filtrerar kurser på aktuell sida
  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory = category ? course.category === category : true;

    return matchSearch && matchCategory;
  });

  return (
    <section className={styles.coursesSection}>
      <div className={styles.topBlock}>
        <h1 className={styles.blockTitle}>Courses</h1>

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />

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
          <div onClick={() => setCategory("Design")} className={styles.tag}>
            Design
          </div>
        </div>
      </div>

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
                <span className={styles.instructor}>{course.instructor}</span>
                <span className={styles.metaSeparator}>·</span>
                <span className={styles.rating}>⭐ {course.rating}</span>
              </div>

              <Link href={`/courses/${course.id}`} className={styles.enrollButton}>
                Enroll Now
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={styles.enrollButton}
        >
          Previous
        </button>

        <span>
          Page {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className={styles.enrollButton}
        >
          Next
        </button>
      </div>
    </section>
  );
}