var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');

btnSuccess.addEventListener('click', function() {
    createToast('success');
})
    
btnWarning.addEventListener('click', function() {
    createToast('warning');
})
    
btnError.addEventListener('click', function() {
    createToast('error');
})
function createToast(status, timeout) {
    let templateInner = `
        <i class="fa-solid fa-circle-check"></i>
        <span class="message">This is a success message</span>
    `
    switch(status) 
    {
        case 'success':
            templateInner = `
                <i class="fa-solid fa-circle-check"></i>
                <span class="message">This is a success message</span>
            `
            break;
        case 'warning':
            templateInner = `
                <i class="fa-solid fa-circle-exclamation"></i>
                <span class="message">This is a warning message</span>
            `
            break;
        case 'error':
            templateInner = `
                <i class="fa-solid fa-circle-x"></i>
                <span class="message">This is an error message</span>
            `
            break;
    }

    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status);
    toast.innerHTML = `${templateInner}
            <span class="countdown"></span>
    `
    var toastList = document.getElementById('toasts');
    toastList.appendChild(toast);
    timeout = timeout || 4000;
    setTimeout(function() {
        toast.style.animation = 'slideOut 2s ease forwards';
    }, timeout);
    setTimeout(function() {
        toast.remove();
    }, timeout + 2000);
}
