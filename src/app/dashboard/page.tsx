"use client";
import styles from "../dashboard/styles/page.module.css";
import React from "react";
import HomeCard from "./components/HomeCard";
import AIAssistant from "./components/AIAssistant";
import TherapyZone from "./components/TherapyZone";
import MicroCourses from "./components/MicrocourseCard";

export default function DashboardPage() {
  return (
    <main>
      <div className={styles["dashboard-container"]} style={{ padding: "1rem" }}>
        <HomeCard />
        <MicroCourses />
        <AIAssistant />
        <TherapyZone />
      </div>
    </main>
  );
}
