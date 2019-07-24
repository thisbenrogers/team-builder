import React from 'react';
// import styled from 'styled-components';

const List = (props) => {

  const setMemberToEdit = props.setMemberToEdit;
  const teamList = props.teamList;

  const handleSubmit = (member, e) => {
    e.preventDefault();
    setMemberToEdit(member);
  }

  return (
    <div>
      <h2>Team List</h2>
      {teamList.map((member, index) => {
        return (
          <div key={index} className={`member ${index}`}>
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.role}</p>
            <button onClick={(e) => handleSubmit(member, e)}>edit member</button>
          </div>
        )
      })}
    </div>
  )
}

export default List;