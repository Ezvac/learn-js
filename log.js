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
    constructor() {
        this.loggers = [new ConsoleLogger(), new Filelogger(), new EmptyLogger()];
    }

    log(text){
        for (let i = 0; i < this.loggers.length; i++){
            this.loggers[i].log(text);
        }
    }
}

let c = new MultiLogger()
c.log('hello')
c.log('hello1')
c.log('hello2')
c.log('hello3')
