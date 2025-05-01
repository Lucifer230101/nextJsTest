"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/TherapyZone.module.css";

export default function TherapyZone() {
  const [mood, setMood] = useState<number>(3);

  return (
    <section className={styles.card}>
      <div>How are you feeling?</div>
      <div className={styles.moodSection}>
        {[1, 2, 3].map((n) => (
          <Image
            key={n}
            src={`/images/mood/${n}.png`}
            width={40}
            height={40}
            alt={`mood-${n}`}
            className={mood === n ? styles.selected : styles.moodImage}
            onClick={() => setMood(n)}
          />
        ))}
      </div>
      <div className={styles.journey}>
        <p>Today’s Journey</p>
        <p>Practiced a presentation and really aced it! Felt great to see how much I’ve improved.</p>
        <button className={styles.editButton}>Edit</button>
      </div>
    </section>
  );
}
