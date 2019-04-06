class ConsoleLogger{
    log(text){
        console.log('> ' + text);
    }
}

class Filelogger{
    log(text){
        var fs = require('fs');
        fs.appendFileSync('filelogger.txt', text + '\r\n');
    }
}

class EmptyLogger{
    log(text){
    }
}

class MultiLogger{
    constructor(logg) {
        this.loggers = logg;
    }

    log(text){
        for (let i = 0; i < this.loggers.length; i++){
            this.loggers[i].log(text);
        }
    }
}
class stopwatch{
    constructor (){
        this.startedAt = null
        this.stoppedAt = null
    }
    Start(){
        this.startedAt = new Date()
    }
    Stop(){
        this.stoppedAt = new Date()
    }
    LogElapsed(logg){
        this.loggers = logg;
        (this.stoppedAt-this.startedAt)
    }
}

function blockCpuFor(ms) {
	var now = new Date().getTime();
	var result = 0
	while(true) {
		result += Math.random() * Math.random();
		if (new Date().getTime() > now +ms)
			return;
	}	
}




let myLoggers = [new ConsoleLogger()]

let c = new MultiLogger(myLoggers)

let stopwatch1 = new stopwatch()
stopwatch1.Start()
blockCpuFor(100)
stopwatch1.Stop()
stopwatch1.LogElapsed(c)