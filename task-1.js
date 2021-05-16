const delay = ms => {
  const time=ms;
    return new Promise (resolve => {
      setTimeout (() => {
        resolve (time);
      }, ms )
    })
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  delay(2000).then(logger);
  delay(1000).then(logger);
  delay(1500).then(logger);