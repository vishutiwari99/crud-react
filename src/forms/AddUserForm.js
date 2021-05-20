import React, { useState } from 'react'
import './AddUserForm.css'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', phone: '', gender: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.phone || !user.gender) return
				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<input type="text" name="name" placeholder="Enter your name" value={user.name} onChange={handleInputChange} />
			<input id="phone" type="Number" name="phone" placeholder="Enter your number" value={user.phone} onChange={handleInputChange} />
			<input type="text" name="gender" placeholder="Enter your gender" value={user.gender} onChange={handleInputChange} />
			<button class="add_new">Add new user</button>
		</form>
	)
}

export default AddUserForm
