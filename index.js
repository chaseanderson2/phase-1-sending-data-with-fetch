function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const body = JSON.stringify({ name, email });
  
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
      .then(response => response.json())
      .then(data => {
        // Find the new id and append it to the DOM
        const id = data.id;
        document.body.innerHTML += `<p>New user id: ${id}</p>`;
      })
      .catch(error => {
        // Append the error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }