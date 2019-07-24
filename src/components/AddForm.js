import React from 'react';

import Form from './Form';

const AddForm = (props) => {
  const { editMember, memberToEdit, teamMember, setTeamMember, teamList, setTeamList } = props;

  // console.log("memberToEdit:", memberToEdit);

  const isEmpty = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  const handleSubmit = e => {
    e.preventDefault();

    const updatedTeamList = [...teamList, teamMember];
    setTeamList(updatedTeamList);
  }



  return (
    <form onSubmit={isEmpty(memberToEdit) ? handleSubmit : (e) => editMember(teamMember, e)}>
      <fieldset>
        <legend>New Team Member</legend>
        <Form memberToEdit={memberToEdit} setTeamMember={setTeamMember} teamMember={teamMember} />
        <button>Add Member</button>
      </fieldset>
    </form>
  )
}

export default AddForm;