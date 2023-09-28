<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require "vendor/autoload.php";
    
    $auth = parse_ini_file("/etc/apache2/auth.ini");

    $vorname = secure($_POST["vorname"]);
    $nachname = secure($_POST["nachname"]);
    $email = secure($_POST["email"]);
    $telefon = secure($_POST["telefon"]);
    $honeypot = secure($_POST["firma"]);

    $leistungen = array();
    if(isset($_POST["logo"])) {
        array_push($leistungen, "Logo");
    }
    if(isset($_POST["farbpalette"])) {
        array_push($leistungen, "Farbpalette");
    }
    if(isset($_POST["schriftart"])) {
        array_push($leistungen, "Schriftart");
    }
    if(isset($_POST["unterlagen"])) {
        array_push($leistungen, "Unterlagen");

        if(isset($_POST["visitenkarte"])) {
            array_push($leistungen, "Visitenkarte");
        }
        if(isset($_POST["briefpapier"])) {
            array_push($leistungen, "Briefpapier");
        }
        if(isset($_POST["flyer"])) {
            array_push($leistungen, "Flyer");
        }
        if(isset($_POST["anderes"])) {
            array_push($leistungen, "Anderes");
        }
    }
    if(isset($_POST["website"])) {
        array_push($leistungen, "Website");
    }

    $leistungenText = "";
    foreach ($leistungen as $value) {
        global $leistungenText;
        $leistungenText = $leistungenText . $value . ", ";
    }

    $bemerkungen = secure($_POST["bemerkungen"]);

    $datenschutz = "";
    if(isset($_POST["privacy"])) {
        global $datenschutz;
        $datenschutz = "Datenschutz akzeptiert.";
    } else {    
        global $datenschutz;
        $datenschutz = "Nicht in Datenschutz eingewilligt!";
    }

    $message = "Vor- und Nachname: " . $vorname . " " . $nachname . "\n" .
                "E-Mail: " . $email . "\n" .
                "Telefon: " . $telefon . "\n" .
                "\n" .
                "Gewuenschte Leistungen: " . "\n" .
                $leistungenText . "\n" .
                "\n" .
                "Bemerkungen: " . "\n" .
                $bemerkungen . "\n" .
                "\n" .
                $datenschutz;

    try {
        if ($honeypot == "") {
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->SMTPAuth = true;
            $mail->Host = "smtp.ionos.de";
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = "587";
            $mail->Username = $auth["username"];
            $mail->Password = $auth["password"];
            $mail->setFrom($email, $vorname . " " . $nachname);
            $mail->addAddress("info@lennarthesse.com");
            $mail->Subject = "Kontaktanfrage";
            $mail->Body = $message;
            $mail->send();
        }
        header("Location: ../kontakt/?success");
    } catch (Exception $e) {
        header("Location: ../kontakt/?failure");
    }

    function secure($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>