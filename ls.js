const fs = require('fs');

function run(){

	fs.readdir('./', 'utf8', (err, files) => {
		if(err) {
			//console.log("There was an error");
			throw err;
		}
		else{
			process.stdout.write(files.join('\n'));
		}
	});

	return "";
}

module.exports.ls = run;