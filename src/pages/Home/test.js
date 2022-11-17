fetch('https://api.github.com/users/mathfrei/repos')
.then(response => response.json())
.then(data => {
   console.log(data[0].name)
  })
