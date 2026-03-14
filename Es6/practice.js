async function fetchHTMLFile() {
  console.log("Fetching HTML file...");

  const response = await fetch("example.html"); // replace with your file path
  const html = await response.text();           // HTML is also plain text

  console.log("HTML content:");
  console.log(html);
}

fetchHTMLFile().catch(error => console.error("Error:", error));