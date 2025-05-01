"use client";
import Image from "next/image";
import styles from "../styles/MicrocourseCard.module.css";

export default function MicrocourseCard() {
  return (
    <section className={styles.card}>
      <Image src="/images/avatar-male.png" width={250} height={300} alt="Character" className={styles.image} />
      <h2 className={styles.title}>Innovative Strategy</h2>
      <p className={styles.subtitle}>PRL-1</p>
      <p className={styles.description}>
        Master creative problem-solving through thrilling challenges!
      </p>
      <button className={styles.button}>Get Started</button>
    </section>
  );
}
