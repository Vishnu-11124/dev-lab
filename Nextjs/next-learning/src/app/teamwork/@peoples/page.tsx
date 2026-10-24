"use client";

import { useState } from "react";
import Salary from "@/components/Salary";

const People = () => {
  const [showSalary, setShowSalary] = useState(false);

  return (
    <div>
      {showSalary ? (
        <>
          <button onClick={() => setShowSalary(false)}>Back to People</button>
          <Salary />
        </>
      ) : (
        <>
          <h1>People List</h1>
          <button onClick={() => setShowSalary(true)}>
            View People's Salary
          </button>
        </>
      )}
    </div>
  );
};

export default People;
