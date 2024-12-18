document.getElementById('fetchButton').addEventListener('click', function() {
  const url = document.getElementById('urlInput').value;
  if (!url) {
    alert('Please provide a URL!');
    return;
  }

  // Fetch the code from the provided URL
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(code => {
      // Clear the previous output
      document.getElementById('output').textContent = 'Running code...';

      try {
        // Execute the code in the browser's JavaScript environment
        const result = eval(code); // Caution: eval can be risky if the code is not trusted.
        document.getElementById('output').textContent = `Result: ${result}`;
      } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`;
      }
    })
    .catch(error => {
      document.getElementById('output').textContent = `Error: ${error.message}`;
    });
});
