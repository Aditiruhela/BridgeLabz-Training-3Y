let productName="wireless headphone Pro";
let cleanedTitle=productName
   .trim()
   .toLowerCase()
   .split(" ")
   .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
   .join(" ")
   .replace("Pro","Pro Edition");
console.log("Cleaned Title:", cleanedTitle);
console.log("Length:", cleanedTitle.length);