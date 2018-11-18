import { h } from 'hyperapp';

import App from "./app.js";

function render(x){
	document.querySelector("div").innerText = JSON.stringify(x);
}

render(<App/>);