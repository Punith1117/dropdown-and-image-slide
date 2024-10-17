import "./reset.css";
import "./style.css";

let dropdownName = document.querySelector('.dropdown-name');
let dropDownOptions = document.querySelectorAll('.option');

dropdownName.addEventListener('click', () => {
    let dropdownContent = document.querySelector('.dropdown-content');
    if(dropdownContent.classList.contains('displaying')) {
        dropdownName.textContent = 'Dropdown \u2191';
        dropdownContent.classList.remove('displaying');
    } else {
        dropdownName.textContent = 'Dropdown \u2193';
        displayDropdownContent();
    }
})

dropDownOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
        let dropdownSection = document.querySelector('.dropdown-section');
        let bgColor = getColor(index);
        dropdownSection.style.backgroundColor = bgColor; 
    })
})

function displayDropdownContent() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.add('displaying');
}

function getColor(index) {
    switch(index) {
        case 0:
            return 'lightblue';
        case 1:
            return '#ff6f6f';
        case 2:
            return 'lightgreen';
        case 3:
            return 'grey';
    }
}
