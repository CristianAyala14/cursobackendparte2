console.log("Directorio", process.cwd());
console.log("PID", process.pid);
console.log("ARGV", process.argv()); //nos vendra un array
console.log("ARGV", process.argv.splice(2)); //con el splice le sacamos las primeras dos lineas que vienen por default.
console.log("ENV", process.env)
