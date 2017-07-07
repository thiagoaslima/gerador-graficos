import jQuery from 'jquery';

export function setFormHandler() {
    jQuery('form').submit(function (evt) {
        evt.preventDefault();
        const form: HTMLFormElement = document.getElementsByTagName('form')[0];

        jQuery.post('http://127.0.0.1:3001/csv', jQuery(this).serialize())
            .then(res => console.log(res));


        jQuery.ajax({
            type: 'POST',
            url: "http://127.0.0.1:3001/csv",
            data: new FormData(form),
            processData: false,
            contentType: false,
            success: function (returnval) {
                console.log(returnval);
            }
        });

    });
}
