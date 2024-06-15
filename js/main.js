(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);


$(document).ready(function() {
    // Function to calculate BMI
    function calculateBMI(weight, height) {
        // Calculate BMI
        var BMI = weight / (height * height); // BMI formula: weight (kg) / (height (m) * height (m))
        return BMI.toFixed(2); // Round BMI to 2 decimal places
    }

    // Function to classify BMI and determine status
    function classifyBMI(BMI) {
        if (BMI < 18.5) {
            return {
                category: "Underweight",
                status: "You are underweight. You may need to gain some weight."
            };
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            return {
                category: "Healthy weight",
                status: "You are within a healthy weight range. Keep it up!"
            };
        } else if (BMI >= 25 && BMI <= 29.9) {
            return {
                category: "Overweight",
                status: "You are overweight. Consider losing some weight."
            };
        } else {
            return {
                category: "Obese",
                status: "You are obese. It's recommended to consult a healthcare provider."
            };
        }
    }

    // Handle form submission
    $('#bmiForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        var weight = parseFloat($('#weight').val());
        var height = parseFloat($('#height').val());

        // Validate inputs
        if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
            alert('Please enter valid weight and height.');
            return;
        }

        // Calculate BMI
        var BMI = calculateBMI(weight, height);

        // Classify BMI and get status
        var classification = classifyBMI(BMI);

        // Display result on the webpage
        $('#bmiValue').text("Your BMI: " + BMI);
        $('#bmiCategory').text("Category: " + classification.category);
        $('#bmiResult').show(); // Show the result container
    });
});