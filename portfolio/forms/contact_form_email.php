<?php

if(isset($_POST['email'])) {

  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "michael@mpleconsulting.com";
  $email_subject = "NEW Contact Us: Miss South Asia Europe Contest";

  
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
  if(!isset($_POST['contact_name']) ||
     !isset($_POST['email']) ||
     !isset($_POST['telephone']) ||
     !isset($_POST['comments'])) {
    died('We are sorry, but there appears to be a problem with the form you submitted.');      
  }

  // required variables.
  $contact_name = $_POST['contact_name'];
  $email_from = $_POST['email'];
  
  // optional variables.
  $telephone = $_POST['telephone'];
  $comments = $_POST['comments'];

  $error_message = "";

  // contact name validation
  $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$contact_name)) {
    $error_message .= '>>> Please enter a First Name.<br />';
  }
  
  // email validation.
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= '>>> Please enter a valid Email Address.<br />';
  }
  
  // fires off error message.
  if(strlen($error_message) > 0) {
    died($error_message);
  }

  // start of email code.
  $email_message = "NEW Contact Us details below...\n\n";
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
  
  // detailed output to email.
  $email_message .= "Contact Name: ".clean_string($contact_name)."\n";
  $email_message .= "Email: ".clean_string($email_from)."\n";
  $email_message .= "Contact Number: ".clean_string($telephone)."\n";
  $email_message .= "Comments: ".clean_string($comments)."\n";
 
  // create email headers
  $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers); 

?>

<!--Success message-->
Thank you for contacting us! We will be in touch with you very soon.


<?php

}

?>