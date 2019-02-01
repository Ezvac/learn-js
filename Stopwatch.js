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
    LogElapsed(){
        console.log(this.stoppedAt-this.startedAt)
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

let stopwatch1 = new stopwatch()
stopwatch1.Start()
sum = (a,b) => a + b
a=4
b=5
blockCpuFor(100)
stopwatch1.Stop()
stopwatch1.LogElapsed()