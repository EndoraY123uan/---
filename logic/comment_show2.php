<?php
include "sql.php";
$sql = "SELECT *
        FROM comment
        WHERE stylename = 2";
$mysqli_result = $db->query($sql);
// 如果返回的不是对象,是false则提示错误信息.
if ($mysqli_result === false) {
    echo "SQL错误";
    exit;
}
$rows = [];
while ($row = $mysqli_result->fetch_array(MYSQL_ASSOC)) {
    $rows[] = $row;
}
?>
<?php
foreach ($rows as $row) {
    ?>
      <div class="user-logo">
          <img src="../images/user.jpg" alt="">
      </div>
      <div class="user-time">
          <?php echo $row['comment-time']; ?>
      </div>
      <div class="user-content">
          <?php echo $row['comment-detail']; ?>
      </div>
      <hr>
    <?php
}
?>