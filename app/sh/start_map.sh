#!/bin/zsh
export ROS_IP=192.168.10.188
export ROS_MASTER_URI=http://192.168.10.188:11311
source /opt/ros/kinetic/setup.zsh
source /home/junior2/ugv_ws/devel/setup.zsh

rosnode kill /map_server
rosnode kill /amcl
rosnode kill /slam_karto
nohup roslaunch slam_karto karto_slam.launch
exit

