import React, { useState, useEffect } from 'react';

import List from './components/List';
import AddForm from './components/AddForm';

import './App.css';

const App = () => {

  const [memberToEdit, setMemberToEdit] = useState({});
  const [teamList, setTeamList] = useState([
    {
      name: 'Ben',
      email: 'ben@ben.ben',
      role: 'The Ben'
    },
    {
      name: 'Benjamimah',
      email: 'some@thing.good',
      role: 'BossJamimah'
    },
    {
      name: 'Bendrian',
      email: 'good@ness.gracious',
      role: 'Sneeze excuser'
    },
    {
      name: 'Benelope',
      email: 'sakes@a.live',
      role: 'Cheif Engineer'
    }
  ]);
  const [teamMember, setTeamMember] = useState(
    {
      name: '',
      email: '',
      role: ''
    }
  );

  useEffect(() => {
    // console.log("memberToEdit: ", memberToEdit);
  }, [memberToEdit]);

  const editMember = (member, e) => {
    e.preventDefault();
    console.log("e:", e);
    console.log("member from editMember: ", member);
  }

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Team Builder</h1>
      </header>
      <section>
        <List setMemberToEdit={setMemberToEdit} teamList={teamList} />
        <AddForm editMember={editMember} memberToEdit={memberToEdit} teamMember={teamMember} setTeamMember={setTeamMember} teamList={teamList} setTeamList={setTeamList} />
      </section>
    </div >
  );
}

export default App;
