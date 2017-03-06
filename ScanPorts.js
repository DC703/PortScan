#Port Scanning
const val = require('./src/validate')
const pkg = require('./package.json')
const http = require('http')
const pro = require('commander')

//get pro options and cmds
pro

#Here we have different options of doing ports,host,host file, methods, and traceroute
  

  #Type of options to scan Ports  
    .version(pkg.version)
    #Host to get scanned
  .option('-h, --host <h>', 'Select Host(s)')
  .option('-H, --host-file <file>', 'Select an Host file')
  #Can Scan TCP,UDP, or ICMP
  .option('-M, --method <method>', 'Select Protocol <tcp|udp|icmp>')
  .option('-p, --port <p>', 'Select Port(s)')
  #Traceroute port
  .option('-t, --traceroute', 'Perform a traceroute ')

#Shows an example of how it should be
    .on('--help', function() {
    console.log('  Example:')
    console.log('    $ -h 121.1.1.0 -p 22 -M tcp')
    console.log()
  })

  .parse(process.argv)

var options = val.idate(pro)

#If they choose traceroute then perform the traceroute function
if(pro.traceroute){
  require('./src/tr')(pro.host)
}else{
  require('./src/scan')(options)
}

#If the user picks none of the options then we show how it should look like.
if(!options.valid){
  if(options.msg){
    console.log(options.msg)
  }else{
    pro.help()
  }
  return
}

