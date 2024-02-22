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
                enableOrDisableApplyButton(count);
                enableOrDisableNextButton();
            }
            else {
                count--;
                currSeatLeft += 1;
                setTextById('seat-left', currSeatLeft);
                setTextById('seats-count', count);

                romoveUnselectedSeatFromContianer(`${selected.innerText}`);
                setTotalPrice(count);
                enableOrDisableApplyButton(count);
                enableOrDisableNextButton();
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
    setTextById('total-price', price);
    setTextById('grand-total-price', price);
    const couponContainer = document.getElementById('coupon-container');
    couponContainer.classList.remove('hidden');
}

function enableOrDisableApplyButton(count) {
    const applyBtn = getElementById('coupon-btn');
    if (count === 4) {
        applyBtn.classList.remove("btn-disabled");
    }
    else {
        applyBtn.classList.add("btn-disabled");
        setTotalPrice(count);
        setTextById('discount-amount', 0)
    }
}

function applyDiscount() {
    let price = 550 * 4;
    let discount = 0;

    const couponField = getElementById('coupon-field');
    const couponText = couponField.value;
    if (couponText === 'NEW15') {
        discount = (price * 15) / 100;
        let grandTotal = price - discount;
        setGrandTotalAndDiscount(discount, grandTotal);
        const couponContainer = document.getElementById('coupon-container');
        couponContainer.classList.add('hidden');
        couponField.value = '';
    }
    else if (couponText === 'Couple20') {
        discount = (price * 20) / 100;
        let grandTotal = price - discount;
        setGrandTotalAndDiscount(discount, grandTotal);
        const couponContainer = document.getElementById('coupon-container');
        couponContainer.classList.add('hidden');
        couponField.value = '';
    }
    else {
        alert('Please enter a valid coupon');
        couponField.value = '';
    }
}

function setGrandTotalAndDiscount(discount, grandTotal) {

    setTextById('discount-amount', discount)
    setTextById('grand-total-price', grandTotal);
}

document.getElementById('phone').addEventListener('keyup', enableOrDisableNextButton);

function enableOrDisableNextButton() {
    const nextBtn = getElementById('next-btn');
    const phoneField = getElementById('phone');
    const phoneValue = phoneField.value;
    console.log(phoneValue);
    if (count && phoneValue !== "") {
        nextBtn.classList.remove('btn-disabled');
    }
    else {
        nextBtn.classList.add('btn-disabled')
    }
}