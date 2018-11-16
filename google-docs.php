<?

if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){

$response = array(); 

$field2 = isset($_POST['phone']) ? $_POST['phone'] : false;


$field5 = isset($_POST['count']) ? $_POST['count'] : false;
$field6 = isset($_POST['price']) ? $_POST['price'] : false;

$field7 = isset($_POST['utm_source']) ? $_POST['utm_source'] : false;
$field8 = isset($_POST['utm_campaign']) ? $_POST['utm_campaign'] : false;
$field9 = isset($_POST['utm_medium']) ? $_POST['utm_medium'] : false;
$field10 = isset($_POST['utm_term']) ? $_POST['utm_term'] : false;
$field11 = isset($_POST['utm_content']) ? $_POST['utm_content'] : false;

if ((isset($_POST['new_price'])) && ($_POST['new_price']!='')) {
$field6=$_POST['new_price'];
}

if ((isset($_POST['new_count'])) && ($_POST['new_count']!='')) {
$field5=$_POST['new_count'];
}


$url = 'https://docs.google.com/forms/d/1T2HQBbU30IhB4pKCHolpbxIjIxxptT0YzX2lxeUIE0k/formResponse'; // куда слать, это атрибут action у гугл формы 
$data = array(); 

$data['entry.1166974658'] = $field2;

$data['entry.464480916'] = $field5;
$data['entry.2082986917'] = $field6;

$data['entry.174567743'] = $field7;
$data['entry.1220235461'] = $field8;
$data['entry.137115594'] = $field9;
$data['entry.1417404436'] = $field10;
$data['entry.1479995608'] = $field11;


$data = http_build_query($data); 

$options = array( 
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => $data,
    ),
);
$context  = stream_context_create($options); 
$result = file_get_contents($url, false, $context);

if (!$result) { 
    $response['ok'] = 0; 
    $response['message'] = '<p class="error">Что-то пошло не так, попробуйте отправить позже.</p>'; 
    die(json_encode($response)); 
}

$response['ok'] = 1; 
$response['message'] = '<p class="">Все ок, отправилось.</p>'; 
die(json_encode($response)); 

}

?>