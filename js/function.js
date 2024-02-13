const validate = (time) => {
    if (!time) {
        alert(`Vaqt notogri kiritildi`);
        return false
    }
    if (time <= 0) {
        alert('Vaqt bunday bolishi mumkin emas')
        return false;
    }
    return true;
}
export {validate};