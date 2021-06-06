const App = () => {
	return (
		<div>
			<Person
				name="Kwame"
				age={32}
				hobbies={['gaming', 'working out', 'anime']}
			/>
			<Person name="Kofi" age={12} hobbies={['soccer', 'fishing', 'drawing']} />
			<Person
				name="Kwaku"
				age={52}
				hobbies={['gardening', 'smoking', 'drinking']}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
