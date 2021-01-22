fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(data) {
    return data.json();
  }).then(function(result) {
    // console.log(result);
  })


  fetch('http://localhost:5000/04-exemplo/foto.webp')
    .then(function(data) {
      return data.blob();
    }).then(function(result) {
      const imgURL = URL.createObjectURL(result);
      const img = `<img src="${imgURL}" />`;

      document.querySelector('#app').innerHTML = img;
    })