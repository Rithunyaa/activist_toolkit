const facts = [
"FACT 1 PLACEHOLDER: Add a fact about light pollution.",
"FACT 2 PLACEHOLDER: Add a fact about light pollution.",
"FACT 3 PLACEHOLDER: Add a fact about light pollution.",
"FACT 4 PLACEHOLDER: Add a fact about light pollution."
];

function generateFact() {
const randomIndex = Math.floor(Math.random() * facts.length);
const factElement = document.getElementById("fact");

```
factElement.textContent = facts[randomIndex];
```

}

