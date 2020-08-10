#!/bin/zsh
SHELL_FOLDER=$(cd "$(dirname "$0")";pwd)
map_name=$SHELL_FOLDER/../assets/map/$1.yaml
export ROS_IP=192.168.10.188
export ROS_MASTER_URI=http://$ROS_IP:11311
source /opt/ros/kinetic/setup.zsh
source $HOME/ugv_ws/devel/setup.zsh
echo $ROS_MASTER_URI
rosnode kill /map_server
rosnode kill /slam_karto
nohup rosrun map_server map_server  $map_name  __name:=map_server &
exit

