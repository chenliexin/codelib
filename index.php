<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui">
<title>codelib @ chenliexin</title>
<style>
    .list{
        font-size: 14px;
        line-height: 2;
    }
</style>
</head>

<body>
<ul class="list">
<?php
$forbid = '.htaccess,app.conf,index.php,bae_app_conf.lua';
foreach(glob('*') as $val){
    if(strstr($forbid, $val)){
        continue;
    };
    echo '<li><a href="'.$val.'">'.preg_replace('/\.[a-z]+$/', '', $val).'</a></li>';
};
?>
</ul>
</body>
</html>