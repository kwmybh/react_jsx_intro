const App = () => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name="Kwame" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
