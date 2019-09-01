<?
	$cmd = "ps aux | grep 'blockchain.php' | grep -v grep | awk '{ print $2 }' | head -1";
	$out = trim(shell_exec($cmd));

	//echo $out;

	$t = "[".date("d.m.Y H:i:s")."] ";

	if(!$out) {
		$cmd2 = "nohup /usr/bin/php ".dirname(__FILE__)."/blockchain.php generate </dev/null >/dev/null 2>&1 &";
		echo $cmd2."\n";
		file_put_contents(dirname(__FILE__)."/cron.txt", $t."Executing ".$cmd2."\n", FILE_APPEND);
		shell_exec($cmd2);
		}
	else {
		file_put_contents(dirname(__FILE__)."/cron.txt", $t."Running ...\n", FILE_APPEND);
	}
?>