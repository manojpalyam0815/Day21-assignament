const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      if (randomNum < 5) {
        reject(new Error('The random number is less than 5'));
      } else {
        resolve(randomNum);
      }
    }, 1000);
  });
  
  myPromise.then((num) => {
    console.log(`The random number is ${num}`);
  }).catch((err) => {
    console.error(err.message);
  });
  