<?php

if(isset($_POST['email'])) {

  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "michael@mpleconsulting.com";
  $email_subject = "NEW Registration: Miss South Asia Europe Contest";

  
  // start of code.
  function died($error) {
    // error messages & code.
    echo "We are very sorry, but there were error(s) found with the form you submitted.<br />";
    echo "These errors appear below and reference the * REQUIRED fields.<br /><br /><br>";
    echo $error."<br /><br />";
    echo "Please go back and fix these errors.<br /><br />";
    die();
  }

  // validation expected data exists
  if(!isset($_POST['first_name']) ||
     !isset($_POST['last_name']) ||
     !isset($_POST['email']) ||
     !isset($_POST['telephone']) ||
     !isset($_POST['comments'])) {
    died('We are sorry, but there appears to be a problem with the form you submitted.');      
  }

  // required variables
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $residency_status = $_POST['residency_status'];
  $street_address = $_POST['street_address'];
  $postal_code = $_POST['postal_code'];
  $telephone = $_POST['telephone'];
  $mobile = $_POST['mobile'];
  $email_from = $_POST['email'];
  $date_of_birth = $_POST['date_of_birth'];
  $place_of_birth = $_POST['place_of_birth'];

  // optional variables.
  $status_value = $_POST['status_value'];
  $comments = $_POST['comments'];
  $languages_spoken = $_POST['languages_spoken'];
  $occupation = $_POST['occupation'];
  $education = $_POST['education'];
  $file = $_POST['file'];
  $diet_value = $_POST['diet_value'];
  $food_allergies = $_POST['food_allergies'];
  $dietary_needs = $_POST['dietary_needs'];
  $medications = $_POST['medications'];

  $error_message = "";

  // first name validation
  $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= '>>> Please enter a First Name.<br />';
  }

  // last name validation.
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= '>>> Please enter a Last Name.<br />';
  }
  
  // residency status validation.
  if(strlen($residency_status) < 1) {
    $error_message .= '>>> Please enter a Residency Status.<br />';
  }
  
  // street address validation.
  if(strlen($street_address) < 1) {
    $error_message .= '>>> Please enter a Street Address.<br />';
  }
  
  // postal code validation.
  if(strlen($postal_code) < 1) {
    $error_message .= '>>> Please enter a Postal Code.<br />';
  }
  
  // telephone validation.
  if(strlen($telephone) < 1) {
    $error_message .= '>>> Please enter a Contact Number.<br />';
  }

  // email validation.
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= '>>> Please enter a valid Email Address.<br />';
  }
  
  // date of birth validation.
  if(strlen($date_of_birth) < 1) {
    $error_message .= '>>> Please enter a Date of Birth.<br />';
  }

  // place of birth validation.
  if(strlen($place_of_birth) < 1) {
    $error_message .= '>>> Please enter a Place of Birth.<br />';
  }
  
  // fires off error message.
  if(strlen($error_message) > 0) {
    died($error_message);
  }

  // start of email code.
  $email_message = "NEW Registration details below...\n\n";
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
  
  // image upload
  if(isset($_POST['upload'])) {
    $image_name = $_FILES['image']['name'];
    $image_type = $_FILES['image']['type'];
    $image_size = $_FILES['image']['size'];
    $image_tmp_name = $_FILES['image']['tmp_name'];

    if($image_name != '') {
      move_uploaded_file($image_tmp_name,"applicantPhotos/$image_name");
      echo "Photo uploaded successfully.<br><br>";
      $email_message .= "Uploaded Photo: Yes\n";
    } else {
      $email_message .= "Uploaded Photo: No\n";
    }
  }
  
  // detailed output to email.
  $email_message .= "First Name: ".clean_string($first_name)."\n";
  $email_message .= "Last Name: ".clean_string($last_name)."\n";
  $email_message .= "Residency Status: ".clean_string($residency_status)."\n";
  $email_message .= "Street Address: ".clean_string($street_address)."\n"; 
  $email_message .= "Postal Code: ".clean_string($postal_code)."\n";
  $email_message .= "Contact Number: ".clean_string($telephone)."\n";
  $email_message .= "Email: ".clean_string($email_from)."\n";
  $email_message .= "Date of Birth: ".clean_string($date_of_birth)."\n";
  $email_message .= "Place of Birth: ".clean_string($place_of_birth)."\n";
  $email_message .= "Citizen|Permanent-Resident|Other: ".clean_string($status_value)."\n";
  $email_message .= "If Other, explanation: ".clean_string($comments)."\n";
  $email_message .= "Languages Spoken: ".clean_string($languages_spoken)."\n";
  $email_message .= "Occupation: ".clean_string($occupation)."\n";
  $email_message .= "Education: ".clean_string($education)."\n";
  $email_message .= "Vegetarian|Non-Vegetarian: ".clean_string($diet_value)."\n";
  $email_message .= "Food Allergies: ".clean_string($food_allergies)."\n";
  $email_message .= "Any special dietary needs: ".clean_string($dietary_needs)."\n";
  $email_message .= "Any medications you are taking: ".clean_string($medications)."\n";

  // create email headers
  $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers); 

?>

<!--Success message-->
Thank you for registering! We will be in touch with you very soon.


<?php

}

?>