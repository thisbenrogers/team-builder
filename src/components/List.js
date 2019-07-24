import React from 'react';
// import styled from 'styled-components';

const List = (props) => {

  // const StyledWrapper = styled.div`

  // `

  const teamList = props.teamList;

  return (
    <div>
      <h2>Team List</h2>
      {teamList.map((member, index) => {
        return (
          <div key={index} className={`member ${index}`}>
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        )
      })}
    </div>
  )
}

export default List;