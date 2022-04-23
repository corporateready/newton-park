import React from "react";
import Header from "../header";

export default function index({ children }) {
  return (
    <div className={styles.lauout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
