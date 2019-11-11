const pwd = require('./pwd.js');
const ls = require('./ls.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  const commands = {
  	pwd: pwd.pwd,
  	ls: ls.ls
  };

  if(commands[cmd] === undefined){
  	process.stdout.write('\nNo command found.');
  	process.stdout.write('\nprompt > ');
  }
  else {
  	process.stdout.write(commands[cmd]());
  	setTimeout(function() {process.stdout.write('\nprompt > ')},0)
  	//process.stdout.write(`\n${commands[cmd]()}`);
  }

  // process.stdout.write('\nprompt > ');
});
