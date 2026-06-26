import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ value, onChange }) => (
  <>
    <h2>Filter</h2>
    <div>
      filter shown with <input value={value} onChange={onChange} />
    </div>
  </>
);

const Form = ({ name, nameChange, number, numberChange, onSubmit }) => (
  <>
    <h2>Add Person</h2>
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={name} onChange={nameChange} />
      </div>
      <div>
        number: <input value={number} onChange={numberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </>
);

const Persons = ({ loading, filteredPersons }) => (
  <>
    <h2>Numbers</h2>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <ul>
        {filteredPersons.map((p) => (
          <li key={p.id}>
            {p.name}: {p.number}
          </li>
        ))}
      </ul>
    )}
  </>
);

const App = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("useEffect");
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  const handleNameInput = (e) => setNewName(e.target.value);
  const handleNumberInput = (e) => setNewNumber(e.target.value);
  const handleSearch = (e) => setSearch(e.target.value);

  const handleNewPerson = (e) => {
    e.preventDefault();
    if (persons.some((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else if (newNumber.trim() === "") {
      alert("Number field can't be empty");
      return;
    } else if (persons.some((p) => p.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    setPersons((prev) => [...prev, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={search} onChange={handleSearch} />
      <Form
        name={newName}
        nameChange={handleNameInput}
        number={newNumber}
        numberChange={handleNumberInput}
        onSubmit={handleNewPerson}
      />
      <Persons loading={loading} filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
