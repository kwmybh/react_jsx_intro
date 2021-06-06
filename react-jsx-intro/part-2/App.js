const App = () => {
	return (
		<div>
			<Tweet
				name="Kwame"
				username="@kwame"
				date={new Date().toDateString()}
				message="my first tweet!"
			/>
			<Tweet
				name="Joe"
				username="@joejoe"
				date={new Date().toDateString()}
				message="just joe!"
			/>
			<Tweet
				name="Kitty"
				username="@coolcat"
				date={new Date().toDateString()}
				message="meow"
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
