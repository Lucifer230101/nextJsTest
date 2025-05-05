"use client";
import Image from "next/image";
import styles from "../styles/HomeCard.module.css";

export default function HomeCard() {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        {/* <Image src="/images/avatar-female.png" width={200} height={250} alt="Avatar" /> */}
        <div className={styles.imageContainer}>
          <div className={styles.gradientBox}>
            <div className={styles.gloss}></div>
            <Image
              src="/images/avatar-female.png"
              width={200}
              height={250}
              alt="Avatar"
              className={styles.image}
            />
          </div>
        </div>
        <p>Welcome back!<br />Ready for your next quest?</p>
      </div>
      <div className={styles.xpSection}>
        <p>XP 15</p>
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
        <p className={styles.xpText}>1,450 XP</p>
      </div>
      <div className={styles.courses}>
        <p>Microcourses</p>
        <button className={styles.course}>💡 Creative Writing</button>
        <button className={styles.courseOrange}>📢 Public Speaking</button>
        <button className={styles.courseBlue}>♟ Leadership Development</button>
      </div>
    </section>
  );
}
