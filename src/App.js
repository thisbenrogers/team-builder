import React, { useState } from 'react';

import Member from './components/Member';
import Form from './components/Form';

import './App.css';

const members = [
  {
    name: 'Ben',
    email: 'ben@example.com',
    role: 'Big Brother',
    id: '1'
  },
  {
    name: 'Mandy',
    email: 'mandy@example.com',
    role: 'Sister',
    id: '2'
  },
  {
    name: 'Josh',
    email: 'josh@example.com',
    role: 'Middle',
    id: '3'
  },
  {
    name: 'Drew',
    email: 'drew@example.com',
    role: 'Wild Card',
    id: '4'
  },
  {
    name: 'Gabe',
    email: 'gabe@example.com',
    role: 'Baby',
    id: '5'
  }
]

const App = props => {

  const [memberList, setMemberList] = useState(members);
  const submit = member => setMemberList([...memberList, member]);
  const update = single => setMemberList([...memberList.map(member => single.id === member.id ? single : member)]);
  const del = single => setMemberList([...memberList.filter(member => member.id !== single.id)]);

  return (
    <div className="App">
      <p>Team Members</p>
      <div className="list">
        {memberList.map((member, index) => (
          <Member key={index}
            update={update}
            del={del}
            member={member}
          />
        ))}
      </div>
      <Form submit={submit} />
    </div>
  );
}

export default App;
