import React, { useState } from 'react';

const Form = props => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    role: '',
    id: Date.now().toString()
  })

  const handleChange = e => setInput({
    ...input,
    [e.target.name]: e.target.value
  })

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.submit(input)
      setInput({
        name: '', email: '', role: '', id: Date.now().toString()
      })
    }} className='form'>
      <h3>Add Member</h3>
      <div className="inputs">
        <label htmlFor="name">
          Name:<input type="text" onChange={handleChange} value={input.name} name='name' />
        </label>
        <label htmlFor="email">
          Email:<input type="text" onChange={handleChange} value={input.email} name='email' />
        </label>
        <label htmlFor="role">
          Role:<input type="text" onChange={handleChange} value={input.role} name='role' />
        </label>
      </div>
      <button>Add Member</button>
    </form>
  )
}

export default Form;