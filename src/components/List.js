import React from 'react';

const List = (props) => {

  const teamList = props.teamList;

  return (
    <>
      <h2>Team List</h2>
      {teamList.map((member, index) => {
        return (
          <>
            <h2 className={`member ${index}`}>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </>
        )
      })}
    </>
  )
}

export default List;