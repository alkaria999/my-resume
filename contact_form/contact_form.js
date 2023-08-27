$(document).ready(function() {
    $("#danger").hide();
    $("#success").hide();

    $('#someForm').on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var name = $('#form_name').val();
        //get the name field value
        var email = $('#form_email').val();
        //get the comments
        var comments = $('#form_message').val();

        $.ajax({
            url: "https://formspree.io/f/mbjvowwq",
            method: 'POST',
            data: {
                name: name,
                _replyto: email,
                email: email,
                message: comments,
                _subject: 'My Resume',
            },
            dataType: "json",
            beforeSend: function() {
                $("#submit_color").html('<span class="glyphicon glyphicon-print glyphicon-refresh-animate"></span>&nbsp;&nbsp;&nbsp;Sending....');
            },
            success: function() {
                console.log('success');
                $("#submit_color").html('SEND MESSAGE');
                $("#success").show();
                $("#form_name").val("");
                $("#form_email").val("");
                $("#form_message").val("");
            },
            error: function() {
                console.log('error');
                $("#submit_color").html('SEND MESSAGE');
                $("#danger").show();
                $("#form_name").val("");
                $("#form_email").val("");
                $("#form_message").val("");
            }
        });
    });
});