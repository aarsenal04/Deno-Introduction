const response = await fetch("https://api.github.com/");
const data = await response.json();
console.log(data);
// This code fetches the contents of the GitHub API and logs it to the console
// deno run --allow-net API_example.ts