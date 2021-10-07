<?php

$entry = [
    'comment' => $_POST['comment'],
    'url' => $_POST['url'],
    'ref' => $_SERVER['HTTP_REFERER'],
    'ip' => $_SERVER['REMOTE_ADDR'],
];

echo '<pre>'; var_dump($entry);
