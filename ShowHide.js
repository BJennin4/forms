$(document).ready(() => {

    var button1 = $('#buildOption1');
    var button2 = $('#buildOption2');
    var noEmail = $('#invalidEmail');
    var noStore = $('#invalidStore');
    var email = $("#emailInput");
    var store = $("#storeName");
    var first = $('#step1');
    var second = $('#step2a');
    var third = $('#step2b');
    var back = $('#back-button');
    regexE = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    button1.on('click', function(e) {        
        if (!regexE.test(email.val()) && store.val() === '') {
            email.addClass('invalid')
            noEmail.show()
            store.addClass('invalid')
            noStore.show();
        } else if (!regexE.test(email.val()) && store.val() != '') {
            email.addClass('invalid')
            noEmail.show()
            store.removeClass('invalid')
            noStore.hide();
        } else if (store.val() === '' && email.val() != '') {
            email.removeClass('invalid')
            noEmail.hide()
            store.addClass('invalid')
            noStore.show();
        } else {
            email.removeClass('invalid')
            noEmail.hide()
            store.removeClass('invalid')
            noStore.hide()            
            first.hide()
            second.show()
            back.show();
        };
    });

    button2.on('click', function(e) {
        if (!regexE.test(email.val()) && store.val() === '') {
            email.addClass('invalid')
            noEmail.show()
            store.addClass('invalid')
            noStore.show();
        } else if (!regexE.test(email.val()) && store.val() != '') {
            email.addClass('invalid')
            noEmail.show()
            store.removeClass('invalid')
            noStore.hide();
        } else if (store.val() === '' && email.val() != '') {
            email.removeClass('invalid')
            noEmail.hide()
            store.addClass('invalid')
            noStore.show();
        } else {
            email.removeClass('invalid')
            noEmail.hide()
            store.removeClass('invalid')
            noStore.hide()            
            first.hide()
            third.show()
            back.show();
        };
    });  

    back.on('click', function(e) {
        second.hide()
        third.hide()
        back.hide()
        first.show();
    })  
});