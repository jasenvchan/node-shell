const pwd = require('./pwd.js')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  const commands = {
  	pwd: pwd.pwd,
  };

  if(commands[cmd] === undefined){
  	process.stdout.write('\nNo command found.');
  }
  else process.stdout.write(`\n${commands[cmd]}`);

  process.stdout.write('\nprompt > ');
});
