'use client';
import styles from '../../styles/Leaderboard.module.css';

const dummyData = [
  { name: 'Alice', skills: ['React', 'Node.js'], xp: 1450 },
  { name: 'Bob', skills: ['Spring Boot', 'Java'], xp: 1300 },
  { name: 'Charlie', skills: ['Python', 'Django'], xp: 1250 },
];

export default function LeaderboardPage() {
  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>
      <ul className={styles.list}>
        {dummyData.map((user, index) => (
          <li key={index} className={styles.card}>
            <strong>{user.name}</strong>
            <p>XP: {user.xp}</p>
            <p>Skills: {user.skills.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
