const geocode = (a,b, callback) => {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 2000);
};

geocode(1,9,(sum) => {
  console.log(sum);
});
