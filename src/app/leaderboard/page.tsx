'use client';
import styles from '../../styles/Leaderboard.module.css';
import Image from 'next/image';

const dummyData = [
  { name: 'Alice', skills: ['React', 'Node.js'], xp: 1450 },
  { name: 'Bob', skills: ['Spring Boot', 'Java'], xp: 1300 },
  { name: 'Charlie', skills: ['Python', 'Django'], xp: 1250 },
];

export default function LeaderboardPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🏆Top Performers🏆</h1>
      <ul className={styles.list}>
        {dummyData.map((user, index) => (
          <li key={index} className={styles.card}>
            <div className={styles.profile}>
              <Image
                // src={`/images/avatar${index + 1}.png`}
                src={"/images/avatar-male.png"}
                alt={user.name}
                width={60}
                height={60}
                className={styles.avatar}
              />
              <div>
                <strong className={styles.name}>{user.name}</strong>
                <p className={styles.skills}>Skills: {user.skills.join(', ')}</p>
              </div>
            </div>
            <div className={styles.xpBadge}>{user.xp} XP</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
