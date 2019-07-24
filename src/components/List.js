import React from 'react';
// import styled from 'styled-components';

const List = (props) => {

  const setEditIndex = props.setEditIndex;
  const setMemberToEdit = props.setMemberToEdit;
  const teamList = props.teamList;

  const handleSubmit = (member, index, e) => {
    e.preventDefault();
    setMemberToEdit(member);
    setEditIndex(index);
  }

  return (
    <div>
      <h2>Team List</h2>
      {teamList.map((member, index) => {
        member.index = index;
        return (
          <div key={index} className={`member ${index}`}>
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.role}</p>
            <button onClick={(e) => handleSubmit(member, index, e)}>edit member</button>
          </div>
        )
      })}
    </div>
  )
}

export default List;