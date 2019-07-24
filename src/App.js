import React, { useState, useEffect } from 'react';

import List from './components/List';
import AddForm from './components/AddForm';

import './App.css';

const App = () => {

  const [teamList, setTeamList] = useState([
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
    },
    {
      name: 'Ben',
      email: 'ben@ben.ben',
      role: 'The Ben'
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
    console.log("Team List in useEffect: ", teamList);
  }, [teamList]);

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Team Builder</h1>
      </header>
      <section>
        <List teamMember={teamMember} setTeamMember={setTeamMember} teamList={teamList} setTeamList={setTeamList} />
        <AddForm teamMember={teamMember} setTeamMember={setTeamMember} teamList={teamList} setTeamList={setTeamList} />
      </section>
    </div >
  );
}

export default App;
