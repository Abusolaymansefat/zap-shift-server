const fs = require('fs'); // Node.js file system module
const key = fs.readFileSync('./firebase-adminsdk.json', 'utf8'); // JSON ফাইলটি পড়ছে (utf8 format)
const base64 = Buffer.from(key).toString('base64'); // JSON string কে base64 encode করছে
console.log(base64); // encoded string প্রিন্ট করছে