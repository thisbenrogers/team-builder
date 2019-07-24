import React from 'react';

const Form = (props) => {

  const { setTeamMember, teamMember } = props;

  const handleChanges = e => {
    e.preventDefault();
    const updatedTeamMember = { ...teamMember, [e.target.name]: e.target.value };
    setTeamMember(updatedTeamMember);
  }

  return (
    <>
      <div>
        <label htmlFor="name">
          Name
            <div>
            <input
              type="text"
              className="form-input"
              name="name"
              id="name"
              placeholder="name"
              value={teamMember.name}
              onChange={handleChanges}
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
            <div>
            <input
              type="email"
              className="form-input"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              value={teamMember.email}
              onChange={handleChanges}
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="role">
          Role
            <div>
            <input
              type="text"
              className="form-input"
              name="role"
              id="role"
              placeholder="or title"
              value={teamMember.role}
              onChange={handleChanges}
            />
          </div>
        </label>
      </div>
    </>
  )
}

export default Form;