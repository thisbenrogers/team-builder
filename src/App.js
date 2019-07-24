import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [teamList, setTeamList] = useState([{},]);

  const handleChanges = e => {
    e.preventDefault();
    const updatedTeamMember = { ...teamMember, [e.target.name]: e.target.value };
    setTeamMember(updatedTeamMember);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const updatedTeamList = [...teamList];
    const updatedMember = teamMember;
    updatedTeamList.push(updatedMember);
    setTeamList(updatedTeamList);
    console.log("teamList: ", teamList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add a Team Member</legend>
            <div>
              <label htmlFor="name">
                Team Member Name
                <div>
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                    value={teamMember.name}
                    onChange={handleChanges}
                  />
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Team Member Email
                <div>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    value={teamMember.email}
                    onChange={handleChanges}
                  />
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="role">
                Team Member Role
                <div>
                  <input
                    type="text"
                    className="form-input"
                    name="role"
                    id="role"
                    placeholder="Enter Role"
                    value={teamMember.role}
                    onChange={handleChanges}
                  />
                </div>
              </label>
            </div>
            <button>Submit</button>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default App;
