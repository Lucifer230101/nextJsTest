"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>NEXAURA</div>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
       onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
        <li><Link href="/" className={styles.link} onClick={toggleMenu}>Home</Link></li>
        <li><Link href="/dashboard" className={styles.link} onClick={toggleMenu}>Dashboard</Link></li>
        <li><Link href="/" className={styles.link} onClick={toggleMenu}>Courses</Link></li>
        <li><Link href="/leaderboard" className={styles.link} onClick={toggleMenu}>Leaderboard</Link></li>
        <li><Link href="/management" className={styles.link} onClick={toggleMenu}>Management</Link></li>
        <li><Link href="/contact" className={styles.link} onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}