import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: "James Butler",
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Ehm, what?'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Which tools?',
		// What do you want to learn in this workshop? 
		expectations: [
			'What would you expect?'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'What would you do?', 
			'What would anybody do?', 
			'What does 42 mean?'
		]
	}
});
