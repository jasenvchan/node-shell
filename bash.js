process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  const commands = {
  	pwd: process.cwd(),

  };

  if(commands[cmd] === undefined){
  	process.stdout.write('\nNo command found.');
  }
  else process.stdout.write(`\n${commands[cmd]}`);
  
  process.stdout.write('\nprompt > ');
});
