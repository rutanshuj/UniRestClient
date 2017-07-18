<?php
include_once('simple_html_dom.php');

$base = "https://vtop.vit.ac.in/student/stud_login.asp";
$html_base = file_get_html($base);
$url = file_get_contents("https://vtop.vit.ac.in/student/stud_login.asp");
if(!empty($html_base)) {
    foreach ($html_base->find("img") as $element) {
        echo $element->src. '<br>';
    }
}else{
    echo "Not getting HTML Info";
}
    ?>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
<script type="text/javascript" src="./js/server.js"></script>
