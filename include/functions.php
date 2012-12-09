<?php
  function getAllPost(){
      $sql="select * from posts order by created_at desc limit 5";
      $result=mysql_query($sql) or die(mysql_error());
      $data=array();
      while($row=mysql_fetch_assoc($result)){
          $data[]=$row;
      }
  
      return $data;
  }
  
  function getPostById($id){
      $sql="select * from posts where id=".$id;
      $result=mysql_query($sql) or die(mysql_error());
      $data=array();
      
  
      return mysql_fetch_assoc($result);
  }
  function prepareJsonOutput($success,$data){
      return json_encode(array('success'=>$success,'data'=>$data));
  }
?>
