const parseArgs = () => {
	const args = process.argv.slice(2);
	console.log(args);
	const result = {};
	for (let i = 0; i < args.length; i += 2) {
		const propName = args[i].substring(2);
		result[propName] = args[i + 1];
	}

	Object.entries(result).forEach(([name, value]) => {
		console.log(`${name} is ${value}`)
	})
};

parseArgs();