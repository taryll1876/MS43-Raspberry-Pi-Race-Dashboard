setInterval(() => {
  const now = new Date();
  document.getElementById('timestamp').innerText = now.toLocaleString();
}, 1000);
