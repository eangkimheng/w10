import React, { useState } from "react";

// Generate a random value in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Game() {
  // States for player and monster health
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [logs, setLogs] = useState([]);

  // Attack the monster
  function handleAttack() {
    const playerDamage = getRandomValue(5, 12);
    const monsterDamage = getRandomValue(8, 15);

    setMonsterHealth((prev) => Math.max(prev - playerDamage, 0));
    setPlayerHealth((prev) => Math.max(prev - monsterDamage, 0));
    addLog(`Player attacks monster for ${playerDamage} damage.`);
    addLog(`Monster attacks player for ${monsterDamage} damage.`);
  }

  // Special attack
  function handleSpecialAttack() {
    const playerDamage = getRandomValue(10, 20);
    const monsterDamage = getRandomValue(8, 15);

    setMonsterHealth((prev) => Math.max(prev - playerDamage, 0));
    setPlayerHealth((prev) => Math.max(prev - monsterDamage, 0));
    addLog(`Player uses a special attack and deals ${playerDamage} damage!`);
    addLog(`Monster attacks player for ${monsterDamage} damage.`);
  }

  // Heal the player
  function handleHeal() {
    const healValue = getRandomValue(10, 20);
    setPlayerHealth((prev) => Math.min(prev + healValue, 100));
    addLog(`Player heals for ${healValue} points.`);
  }

  // Reset the game
  function handleReset() {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setLogs([]);
  }

  // Add logs
  function addLog(message) {
    setLogs((prevLogs) => [{ text: message }, ...prevLogs]);
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Monster Battle</h1>
      <div className="my-4">
        <p>Player Health: {playerHealth}</p>
        <p>Monster Health: {monsterHealth}</p>
      </div>
      <div className="space-x-2">
        <button className="p-2 bg-blue-500 text-white" onClick={handleAttack}>Attack</button>
        <button className="p-2 bg-red-500 text-white" onClick={handleSpecialAttack}>Special Attack</button>
        <button className="p-2 bg-green-500 text-white" onClick={handleHeal}>Heal</button>
        <button className="p-2 bg-gray-500 text-white" onClick={handleReset}>Reset</button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">Battle Log</h2>
        <ul className="text-left">
          {logs.map((log, index) => (
            <li key={index}>{log.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Game;
