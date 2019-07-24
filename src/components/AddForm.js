import React from 'react';

import Form from './Form';

const AddForm = (props) => {
  const { teamMember, setTeamMember, teamList, setTeamList } = props;

  const handleSubmit = e => {
    e.preventDefault();
    const updatedTeamList = [...teamList, teamMember];
    setTeamList(updatedTeamList);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>New Team Member</legend>
        <Form setTeamMember={setTeamMember} teamMember={teamMember} />
        <button>Add Member</button>
      </fieldset>
    </form>
  )
}

export default AddForm;