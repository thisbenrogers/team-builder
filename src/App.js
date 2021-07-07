import React, { useState, useEffect } from 'react';

import List from './components/List';
import AddForm from './components/AddForm';

import './App.css';

const App = () => {

  const [memberToEdit, setMemberToEdit] = useState({});
  const [editIndex, setEditIndex] = useState('');
  const [teamList, setTeamList] = useState([
    {
      name: 'Ben',
      email: 'ben@ben.ben',
      role: 'The Ben',
      index: '0'
    },
    {
      name: 'Benjamimah',
      email: 'some@thing.good',
      role: 'BossJamimah',
      index: '1'
    },
    {
      name: 'Bendrian',
      email: 'good@ness.gracious',
      role: 'Sneeze excuser',
      index: '2'
    },
    {
      name: 'Benelope',
      email: 'sakes@a.live',
      role: 'Cheif Engineer',
      index: '3'
    }
  ]);
  const [teamMember, setTeamMember] = useState(
    {
      name: '',
      email: '',
      role: '',
      index: ''
    }
  );

  const editMember = (member, e) => {
    e.preventDefault();
    teamList.map(x => {

    });
    console.log("editIndex:", editIndex);
    console.log("member from editMember: ", member);
  }

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Team Builder</h1>
      </header>
      <section>
        <List setEditIndex={setEditIndex} setMemberToEdit={setMemberToEdit} teamList={teamList} />
        <AddForm editMember={editMember} memberToEdit={memberToEdit} teamMember={teamMember} setTeamMember={setTeamMember} teamList={teamList} setTeamList={setTeamList} />
      </section>
    </div >
  );
}

export default App;
