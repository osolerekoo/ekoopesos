import React, { useState, useEffect } from 'react';
import './App.css';

import Person from './components/Person'

function App() {
	
	const [users, setUsers] = useState([])

	useEffect(function(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => setUsers(data))
	}, [])
	
  	return (
    	<div className="App">
			{ users.map(user=> {
				return (
					<Person
						key={user.id}
						nameUser={user.name}
						email={user.email}
					/>	
				)
			})}
    	</div>
  );
}

export default App;
