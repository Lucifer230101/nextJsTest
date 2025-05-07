'use client';
import { useState } from 'react';
import styles from '../../styles/Management.module.css';

const initialData = [
  { name: 'Alice', skills: ['React', 'Node.js'] },
  { name: 'Bob', skills: ['Spring Boot', 'Java'] },
  { name: 'Charlie', skills: ['Python', 'Django'] },
];

export default function ManagementPage() {
  const [employees, setEmployees] = useState(initialData);
  const [sortSkill, setSortSkill] = useState('');

  const handleSort = () => {
    const trimmedSkill = sortSkill.trim().toLowerCase();

    if (trimmedSkill === '') {
      // If no input, show all employees
      setEmployees(initialData.sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      const sorted = initialData
        .filter(emp =>
          emp.skills.some(skill =>
            skill.toLowerCase().includes(trimmedSkill)
          )
        )
        .sort((a, b) => a.name.localeCompare(b.name));
      setEmployees(sorted);
    }
  };
  
  return (
    <div className={styles.container}>
      <h1>Employee Management</h1>
      <input
        className={styles.input}
        type="text"
        value={sortSkill}
        onChange={e => setSortSkill(e.target.value)}
        placeholder="Enter skill to filter (e.g., React)"
      />
      <button className={styles.button} onClick={handleSort}>Filter by Skill</button>

      <ul className={styles.list}>
        {employees.map((emp, idx) => (
          <li key={idx} className={styles.card}>
            <strong>{emp.name}</strong>
            <p>Skills: {emp.skills.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
