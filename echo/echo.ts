
function leer(){
	const stdin = process.openStdin();
	stdin.addListener("data", (data) => {
		console.log(data.toString());
		process.exit()
	})
}

leer()