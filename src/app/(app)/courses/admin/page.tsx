"use client";

import styles from "./adminCourses.module.css"; // ← СЮДА
import { useState } from "react";               // ← СЮДА
import { courses } from "../data";              // ← СЮДА

type Course = {
  id: number;
  title: string;
  instructor: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  rating: number;
  students: number;
};

export default function AdminPage() {
  const [courseList, setCourseList] = useState<Course[]>(courses);

  const [form, setForm] = useState({
    title: "",
    instructor: "",
    category: "",
    description: "",
    duration: "",
    level: "",
  });

  const [editId, setEditId] = useState<number | null>(null);

  // input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // create + edit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editId) {
      setCourseList(
        courseList.map((c) =>
          c.id === editId ? { ...c, ...form } : c
        )
      );
      setEditId(null);
    } else {
      const newCourse: Course = {
        id: Date.now(),
        ...form,
        image: "/images/course1.jpg",
        rating: 5,
        students: 0,
      };
      setCourseList([...courseList, newCourse]);
    }

    setForm({
      title: "",
      instructor: "",
      category: "",
      description: "",
      duration: "",
      level: "",
    });
  };

  // delete
  const handleDelete = (id: number) => {
    setCourseList(courseList.filter((c) => c.id !== id));
  };

  // edit
  const handleEdit = (course: Course) => {
    setEditId(course.id);
    setForm({
      title: course.title,
      instructor: course.instructor,
      category: course.category,
      description: course.description,
      duration: course.duration,
      level: course.level,
    });
  };

  // ⬇️ ВОТ СЮДА ВСТАВЛЯЕТСЯ ТВОЙ return
  return (
    <section className={styles.adminSection}>
      <h1 className={styles.adminTitle}>Admin Courses</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="instructor" placeholder="Instructor" value={form.instructor} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="duration" placeholder="Duration" value={form.duration} onChange={handleChange} />
        <input name="level" placeholder="Level" value={form.level} onChange={handleChange} />

        <button type="submit" className={styles.submitButton}>
          {editId ? "Update course" : "Create course"}
        </button>
      </form>

      <div className={styles.courseList}>
        {courseList.map((c) => (
          <div key={c.id} className={styles.courseItem}>
            <div>
              <strong>{c.title}</strong>
              <p>{c.instructor}</p>
            </div>

            <div className={styles.actions}>
              <button onClick={() => handleEdit(c)} className={styles.editButton}>
                Edit
              </button>

              <button onClick={() => handleDelete(c.id)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}