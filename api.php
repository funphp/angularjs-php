<?php
  include_once('include/config.php');
  include_once('include/functions.php');
  
  if($_GET['action']=='home'){
     $data=getAllPost();
   
     echo prepareJsonOutput(1,$data);
  }elseif($_GET['action']=='blog_details'){
      $data=getPostById($_GET['blogId']);
       echo prepareJsonOutput(1,$data);   
  }
  
  
?>
