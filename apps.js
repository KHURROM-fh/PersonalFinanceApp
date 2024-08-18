const total = document.getElementById("total-box");
const deposit = document.getElementById("deposit-box");
const withdraw = document.getElementById("withdraw-box");

const setInnerText = (element, text) => {
    element.innerText = text;
};

function extractNumber(text) {
    return parseInt(text.replace(/[^\d]/g, ''), 10) || 0;
}

function deposit_money(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const previousDeposit = extractNumber(deposit.innerText);
    const amount = parseInt(document.getElementById("deposit").value, 10) || 0;
    const finalDeposit = previousDeposit + amount;

    setInnerText(deposit, `Deposite: ${finalDeposit}`);
    setInnerText(total, `Total: ${extractNumber(total.innerText) + amount}`);
}

function withdraw_money(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const previousWithdraw = extractNumber(withdraw.innerText);
    const amount = parseInt(document.getElementById("withdraw").value, 10) || 0;
    const finalWithdraw = previousWithdraw + amount;

    setInnerText(withdraw, `Withdraw: ${finalWithdraw}`);
    setInnerText(total, `Total: ${extractNumber(total.innerText) - amount}`);
}
