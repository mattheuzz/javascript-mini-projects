const txtbox = document.getElementById('box-txt');
const box = document.getElementById('box-sugestion');
const countSugestion = document.getElementById('count-sugestion');


txtbox.addEventListener('keypress', (e) => {
	if(e.key === 'Enter') {
		addSugestion(e.target.value.trim());
		setTimeout(() => {
			txtbox.value = '';
		}, 10);
	}
});

function addSugestion(sugestionText) {
	const newSugestion = document.createElement('div');
	newSugestion.classList.add('sugestion');
	newSugestion.innerHTML = `
		<div class="block">
			<button class="btn">
				<i></i>
			</button>
			<p>
				<span class="vote">0</span>
				votes
			</p>
		</div>
		<div class="right">
			<strong>${sugestionText}</strong>
		</div>
	`;
	box.appendChild(newSugestion);
	countSugestion.innerText = +countSugestion.innerText + 1;
}
box.addEventListener('click', (e) => {
	const btn = e.path.find(el => el.classList && el.classList.contains('btn'));
	
	if(btn) {
		const sugestionE = e.path.find(el => el.classList && el.classList.contains('sugestion'));
		
		if(btn.classList.contains('voted')) {
			btn.classList.remove('voted');
			unvoting(sugestionE);
	
		} else {
			btn.classList.add('voted');
			voting(sugestionE);
		}
	}
});

function voting(el) {
	const vote1 = el.querySelector('span.votes');
	vote1.innerText = +vote1.innerText + 1;
}
function unvoting(el) {
	const unvote = el.querySelector('span.votes');
	unvote.innerText = +unvote.innerText - 1;
}
