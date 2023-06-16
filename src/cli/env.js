const parseEnv = () => {
	const prefix = 'RSS_';
	const env_variables = process.env;
	for(let variable in env_variables){
		if (variable.startsWith(prefix)){
			console.log(`${variable} = ${env_variables[variable]}`)
		}
	}
};

parseEnv();