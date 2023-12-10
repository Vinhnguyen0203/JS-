const ul = document.querySelector("#result");
ul.classList = "my-list";
const content = `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
`;
ul.innerHTML = content;