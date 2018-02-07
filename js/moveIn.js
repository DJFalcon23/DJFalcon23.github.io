const moveIn = document.getElementById(('resume'||'projects') || ('hobbies'||'following'));
		window.onload = function(){
			if (moveIn.scrollIntoView() = true){
				moveIn.classList.add('inLeft inRight');
			}
		}
