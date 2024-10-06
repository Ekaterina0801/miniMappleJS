document.addEventListener('DOMContentLoaded',setup)
import { MiniMaple} from "./miniMaple.js";

function setup() {

	document.getElementById('submit').onclick = submitIt;
}


function submitIt(){
	const exp = document.getElementById('exp').value
	const varx = document.getElementById('varx').value
	let mm = new MiniMaple(exp, varx)
	const answer = mm.calc()
    document.getElementById('ans').innerHTML = `Ответ: ${answer}` 

}