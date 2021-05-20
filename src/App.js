import React, { useState } from 'react'
import AddUserForm from './forms/AddUserForm'
import SearchBar from './forms/SearchBar'
import UserTable from './tables/UserTable'


const usersData = [
	{ id: 1, name: 'Tania', phone: '7880984656', gender: 'female' },
	{ id: 2, name: 'Vishu', phone: '7880984656', gender: 'male' },
	{ id: 3, name: 'Ankita', phone: '7880984656', gender: 'female' },
]
const App = () => {
	const [users, setUsers] = useState(usersData)
	const [search, setSearch] = useState('');

	const addUser = user => {
		user.id = users.length + 1
		setUsers([...users, user])
	}

	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id))
	}

	const filter = name => {
		setSearch(name)
	}

	return (
		<div className="container">

			<div className="flex-row">

				<div className="flex-large">
					<>
						<h1>Our Total user count is :{users.length}</h1>
						<p>Add more to increase the number</p>
						<h2>Hello There!!</h2>
						<AddUserForm addUser={addUser} />
					</>
				</div>
				<div className="flex-large">
					<SearchBar search={search} filter={filter} users={users} />
					<UserTable search={search} users={users} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
