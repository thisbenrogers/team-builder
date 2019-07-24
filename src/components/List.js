import React from 'react';

import Form from './Form';

const List = (props) => {

  const { teamList, setTeamList } = props;

  return (
    <>
      <h2>Team List</h2>
      {teamList.map((member, index) => {
        return <p key={index}>{member.name}</p>
      })}
    </>
  )
}

export default List;