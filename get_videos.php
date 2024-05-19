<?php
    require_once 'config.php';

	$c = 6;
    $o = 0;
	if (isset($_GET['count'])) $c = intval($_GET['count']);
	if ($c > 6) $c = 6;
    if (isset($_GET['offset'])) $o = intval($_GET['offset']);


    $sql = sprintf('SELECT `ID`, `TITLE`, `DESCRIPTION`, `PRODUCER`, `YEAR`, `POSTER` FROM `videos` LIMIT %d OFFSET %d', $c, $o);

    $videos = $conn->query($sql);
        $result = '{"videos": [';
    
    foreach ($videos as $row) {
        $id = $row['ID'];
        $title = $row['TITLE'];
        $des = $row['DESCRIPTION'];
        $producer = $row['PRODUCER'];
        $y = $row['YEAR'];
        $p = $row['POSTER'];

        $result .= sprintf('{"id": %d, "title":"%s", "des":"%s", "producer":"%s", "year": %d, "poster": "%s"},', $id, $title, $des, $producer, $y, $p);

    }

    echo $result;
?>