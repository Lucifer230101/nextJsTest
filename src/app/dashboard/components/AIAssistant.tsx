"use client";
import Image from "next/image";
import styles from "../styles/AIAssistant.module.css";

export default function AIAssistant() {
  return (
    <section className={styles.card}>
      <div className={styles.container}>
        <Image
          src="/images/avatar-ai.png"
          width={250}
          height={200}
          alt="AI Assistant"
          className={styles.aiImg}
        />
        <div className={styles.messageBox}>
          <p className={styles.message}>
            Let’s tackle public speaking: <br/><br/>Build confidence by practicing small
            talks in different places.
          </p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className={styles.input}
      />
    </section>
  );
}
