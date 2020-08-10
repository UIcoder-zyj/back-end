#!/bin/zsh
SHELL_FOLDER=$(cd "$(dirname "$0")";pwd)
cd $SHELL_FOLDER/../public/map
#map_name=$SHELL_FOLDER/../public/map/$1
map_name=$1
export ROS_IP=192.168.10.188
export ROS_MASTER_URI=http://192.168.10.188:11311
source /opt/ros/kinetic/setup.zsh
source /home/tjark/ugv_ws/devel/setup.zsh
rosnode kill /map_saver
rosrun map_server map_saver -f $map_name _name:=map_saver
python /home/tjark/ugv_ws/scripts/rectify_your_map.py ${map_name}.pgm
exit
