import React, { useState } from "react";
import "../style/ExercisePage.css";

export default function ExercisePage() {
  const [date, setDate] = useState("");
  const [cardioList, setCardioList] = useState([]);
  const [strengthList, setStrengthList] = useState([]);
  const [cardio, setCardio] = useState({ type: "", minutes: "", calories: "", note: "" });
  const [strength, setStrength] = useState({ name: "", sets: "", reps: "", note: "" });

  const addCardio = () => {
    if (cardio.type && cardio.minutes && cardio.calories && date) {
      setCardioList([...cardioList, { ...cardio, date }]);
      setCardio({ type: "", minutes: "", calories: "", note: "" });
    }
  };

  const addStrength = () => {
    if (strength.name && strength.sets && strength.reps && date) {
      setStrengthList([...strengthList, { ...strength, date }]);
      setStrength({ name: "", sets: "", reps: "", note: "" });
    }
  };

  const deleteCardio = (index) => {
    const newList = cardioList.filter((_, idx) => idx !== index);
    setCardioList(newList);
  };

  const deleteStrength = (index) => {
    const newList = strengthList.filter((_, idx) => idx !== index);
    setStrengthList(newList);
  };

  const totalCardioMinutes = cardioList
    .filter((item) => item.date === date)
    .reduce((sum, item) => sum + Number(item.minutes), 0);

  const totalCardioCalories = cardioList
    .filter((item) => item.date === date)
    .reduce((sum, item) => sum + Number(item.calories), 0);

  const totalStrengthSets = strengthList
    .filter((item) => item.date === date)
    .reduce((sum, item) => sum + Number(item.sets), 0);

  const totalStrengthReps = strengthList
    .filter((item) => item.date === date)
    .reduce((sum, item) => sum + Number(item.reps), 0);

  const weeklySummary = (list, field) => {
    const now = new Date(date);
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(now.getDate() - 6);
    return list
      .filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= oneWeekAgo && itemDate <= now;
      })
      .reduce((sum, item) => sum + Number(item[field]), 0);
  };

  const exportToCSV = () => {
    const allEntries = [...cardioList, ...strengthList];
    const headers = "Date,Type,Minutes,Calories,Exercise Name,Sets,Reps,Note\n";
    const rows = allEntries.map(item => (
      `${item.date || ""},${item.type || ""},${item.minutes || ""},${item.calories || ""},${item.name || ""},${item.sets || ""},${item.reps || ""},${item.note || ""}`
    )).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "exercise_data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* ✅ Navbar */}
      
    <div className="exercise-page">
      <h1>Your Exercise Diary</h1>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <div className="export-buttons">
        <button onClick={exportToCSV}>Export to CSV</button>
        <button onClick={() => window.print()}>Print</button>
      </div>

      <div className="section">
        <h2>Cardiovascular Training</h2>
        <input
          type="text"
          placeholder="Type of Cardio"
          value={cardio.type}
          onChange={(e) => setCardio({ ...cardio, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Minutes Trained"
          value={cardio.minutes}
          onChange={(e) => setCardio({ ...cardio, minutes: e.target.value })}
        />
        <input
          type="number"
          placeholder="Calories Burnt"
          value={cardio.calories}
          onChange={(e) => setCardio({ ...cardio, calories: e.target.value })}
        />
        <input
          type="text"
          placeholder="Notes"
          value={cardio.note}
          onChange={(e) => setCardio({ ...cardio, note: e.target.value })}
        />
        <button onClick={addCardio}>Add Exercise</button>

        <div className="totals">
          <p><strong>Total Minutes:</strong> {totalCardioMinutes}</p>
          <p><strong>Total Calories:</strong> {totalCardioCalories}</p>
          <p><strong>Weekly Calories:</strong> {weeklySummary(cardioList, "calories")}</p>
        </div>

        <div className="exercise-list-horizontal">
          {cardioList.map((item, idx) => (
            <div key={idx} className="exercise-item">
              <p>{item.date} - {item.type} - {item.minutes} min - {item.calories} kcal</p>
              {item.note && <p><strong>Note:</strong> {item.note}</p>}
              <button onClick={() => deleteCardio(idx)}>Delete</button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Strength Training</h2>
        <input
          type="text"
          placeholder="Exercise Name"
          value={strength.name}
          onChange={(e) => setStrength({ ...strength, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Sets"
          value={strength.sets}
          onChange={(e) => setStrength({ ...strength, sets: e.target.value })}
        />
        <input
          type="number"
          placeholder="Reps"
          value={strength.reps}
          onChange={(e) => setStrength({ ...strength, reps: e.target.value })}
        />
        <input
          type="text"
          placeholder="Notes"
          value={strength.note}
          onChange={(e) => setStrength({ ...strength, note: e.target.value })}
        />
        <button onClick={addStrength}>Add Exercise</button>

        <div className="totals">
          <p><strong>Total Sets:</strong> {totalStrengthSets}</p>
          <p><strong>Total Reps:</strong> {totalStrengthReps}</p>
          <p><strong>Weekly Reps:</strong> {weeklySummary(strengthList, "reps")}</p>
        </div>

        <div className="exercise-list-horizontal">
          {strengthList.map((item, idx) => (
            <div key={idx} className="exercise-item">
              <p>{item.date} - {item.name} - {item.sets} sets x {item.reps} reps</p>
              {item.note && <p><strong>Note:</strong> {item.note}</p>}
              <button onClick={() => deleteStrength(idx)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}