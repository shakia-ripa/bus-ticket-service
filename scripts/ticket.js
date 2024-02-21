console.log('connected');

const seats = document.querySelectorAll('#all-seats .seat');
let count = 0;
for (const seat of seats) {
    seat.addEventListener('click', function (event) {
        const selected = event.target;
        const id = selected.getAttribute('id');
        const value = setBGById(id, count);
        if (count <= 4 && value !== 'error') {
            const seatLeftText = getTextById('seat-left');
            const seatLeft = parseInt(seatLeftText);
            let currSeatLeft = seatLeft;
            if (selected.classList.contains('bg-[#1DD100]', 'text-white')) {
                count++;
                currSeatLeft--;
                setTextById('seat-left', currSeatLeft);
                setTextById('seats-count', count);
                addSelectedSeatToContainer(`${selected.innerText}`)
                setTotalPrice(count);
                setGrandTotalPrice(count);
            }
            else {
                count--;
                currSeatLeft += 1;
                setTextById('seat-left', currSeatLeft);
                setTextById('seats-count', count);

                romoveUnselectedSeatFromContianer(`${selected.innerText}`);
                setTotalPrice(count);
            }
        }
        else {
            alert("You Can't Select More Than 4 Seats!");
        }
    });

}

function addSelectedSeatToContainer(className) {
    const selectedSeatContainer = getElementById('selected-seat');
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'mb-3', `${className}`)
    div.innerHTML = `
                    <p>${className} </p>
                    <p>Economy</p>
                    <p>550</p>
                `;
    selectedSeatContainer.appendChild(div);
}



function romoveUnselectedSeatFromContianer(className) {
    const selectedSeatContainer = document.getElementById('selected-seat');
    const elementToRemove = selectedSeatContainer.querySelector(`.${className}`);
    selectedSeatContainer.removeChild(elementToRemove);
}

function setTotalPrice(count) {
    let price = count * 550;
    setTextById('total-price', price)
}

function setGrandTotalPrice(count) {
    if (count == 4) {
        let price = count * 550;
    }
}