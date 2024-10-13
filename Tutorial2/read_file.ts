const data = await Deno.readTextFile("example.txt");
console.log(data);
// This code reads the contents of example.txt and logs it to the console
// deno run --allow-read read_file.ts