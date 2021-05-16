<?php

echo 'Processing...';

if(isset($_GET(['name']))){
  echo 'GET: Your Name is', $_GET['Name'];
}