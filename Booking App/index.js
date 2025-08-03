
$(document).ready(function() {
    $('#confirm-btn').on('click', function(e) {
        e.preventDefault();
        // Get form values
        var name = $('#form-entites input').eq(0).val().trim();
        var phone = $('#form-entites input').eq(1).val().trim();
        var email = $('#form-entites input').eq(2).val().trim();
        var service = $('#form-entites input').eq(3).val().trim();
        var gender = $('#form-entites input').eq(4).val().trim();
        var date = $('#text-date').val();
        var time = $('#text-time').val();

        // Simple validation
        if (!name || !phone || !email || !service || !gender || !date || !time) {
            alert('Please fill in all fields.');
            return;
        }

        // Add appointment to table
        var newRow = `<tr>
            <td>${name}</td>
            <td>${service}</td>
            <td>${date} / ${time}</td>
            <td>Confirmed</td>
        </tr>`;
        $('#appointments-table tbody').append(newRow);

        // Clear form fields
        $('#form-entites input').val('');
        $('#text-date').val('');
        $('#text-time').val('');
    });
});


