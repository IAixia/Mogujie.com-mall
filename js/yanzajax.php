<?php

// 服务器端：接收前端传递过来的用户名，并且判断是否存在
$username = $_GET['username'];

// 2.判断是否存在
// 定义数组，模拟数据仓库，判断接收的用户名是否在数组中，在则证明存在，不在则说明用户名还没有注册
$arr = ['zhangsan','lisi','wangwu','zhaoliu'];

// php页面只能写echo输出
if (in_array($username,$arr)) {
	echo 1;
} else {
	echo 0;
}