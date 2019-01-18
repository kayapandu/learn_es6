// sesi ini adalah mengulas tentang promise

var d = new Promise((resolve, reject) => {
    if(true){
        resolve('hello world');
    } else {
        reject('no bueno');
    }
});

d.then((data) => console.log('success : ', data));
d.catch((error) => console.error('error : ', error));

var c = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(false){
            resolve('hello world');
        } else {
            reject('no bueno');
        }
    }, 2000);
});

c.then((data) => console.log('success : ', data));
c.catch((error) => console.error('error : ', error));

d.then ((data) => console.log('success : ', data), (error) => {
    console.error('new error msg: ', error);
});

d.then((data) => {
    console.log('success : ', data);
    return 'foo bar';
  }).
  then((data) => console.log('success 2 : ', data)).
  catch((error) => console.error('error : ', error));

  var n = new Promise((resolve, reject) => {
    throw new Error('error thrown!');
    setTimeout(() => {
      if (true) {
        resolve('hello world');
      } else {
        reject('no bueno');
      }
    }, 2000);
  });