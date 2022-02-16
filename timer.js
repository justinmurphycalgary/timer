console.clear()

const input = process.argv.slice(2)

for (const time of input){
  setTimeout(()=>{
    console.log('time :>> ', time);
    process.stdout.write('\x07');

  }, (time * 1000))
}

//process.stdout.write('\x07');