<?php
    $vorname = secure($_POST["vorname"]);
    $nachname = secure($_POST["nachname"]);
    $email = secure($_POST["email"]);
    $telefon = secure($_POST["telefon"]);

    $leistungen = array();
    if(isset($_POST["logo"])) {
        array_push($leistungen, secure($_POST["logo"]));
    }
    if(isset($_POST["farbpalette"])) {
        array_push($leistungen, secure($_POST["farbpalette"]));
    }
    if(isset($_POST["schriftart"])) {
        array_push($leistungen, secure($_POST["schriftart"]));
    }
    if(isset($_POST["unterlagen"])) {
        array_push($leistungen, secure($_POST["unterlagen"]));

        if(isset($_POST["visitenkarte"])) {
            array_push($leistungen, secure($_POST["visitenkarte"]));
        }
        if(isset($_POST["briefpapier"])) {
            array_push($leistungen, secure($_POST["briefpapier"]));
        }
        if(isset($_POST["flyer"])) {
            array_push($leistungen, secure($_POST["flyer"]));
        }
        if(isset($_POST["anderes"])) {
            array_push($leistungen, secure($_POST["anderes"]));
        }
    }
    if(isset($_POST["website"])) {
        array_push($leistungen, secure($_POST["website"]));
    }

    $bemerkungen = secure($_POST["bemerkungen"]);

    $datenschutz = "";
    if(!isset($_POST["privacy"])) {
        global $datenschutz;
        $datenschutz = "Datenschutz akzeptiert.";
    } else {    
        global $datenschutz;
        $datenschutz = "Nicht in Datenschutz eingewilligt!";
    }


    $filename = date("Y-m-d_H:i:s") . ".txt";
    $file = fopen($filename, "w");

    fwrite($file,
        "Vor- und Nachname: " . $vorname . " " . $nachname . "\n" .
        "E-Mail: " . $email . "\n" .
        "Telefon: " . $telefon . "\n" .
        "\n" .
        "Gewünschte Leistungen: " . "\n" .
        $leistungen . "\n" .
        "\n" .
        "Bemerkungen: " . "\n" .
        $bemerkungen . "\n" .
        "\n" .
        $datenschutz
    );
    fclose($file);
    
    header("Location: /");

    function secure($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>