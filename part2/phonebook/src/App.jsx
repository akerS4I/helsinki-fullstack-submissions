import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Arto Hellas",
    },
  ]);
  const [newName, setNewName] = useState("");

  const handleNameInput = (e) => setNewName(e.target.value);

  const handleNewPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      id: persons.length + 1,
      name: newName,
    };
    setPersons((prev) => [...prev, newPerson]);
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
