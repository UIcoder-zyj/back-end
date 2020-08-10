#!/bin/zsh
export ROS_IP=192.168.10.188
export ROS_MASTER_URI=http://${ROS_IP}:11311
source /opt/ros/kinetic/setup.zsh
source $HOME/ugv_ws/devel/setup.zsh
rosnode kill /amcl
nohup roslaunch  $HOME/ugv_ws/launch/amcl.launch &
