###
 # @Descripttion:
 # @version: 1.0.0
 # @Author: zyj
 # @Date: 2020-08-12 13:09:17
 # @LastEditors: zyj
 # @LastEditTime: 2020-08-13 00:56:32
 # @Description: egg service description
###
#!/bin/zsh
SHELL_FOLDER=$(cd "$(dirname "$0")";pwd)
cd $SHELL_FOLDER/../public/map
map_name=$2
export ROS_IP=$1
export ROS_MASTER_URI=http://${ROS_IP}:11311
source /opt/ros/kinetic/setup.zsh
source $HOME/ugv_ws/devel/setup.zsh
rosnode kill /map_saver
rosrun map_server map_saver -f $map_name _name:=map_saver
python $HOME/ugv_ws/scripts/rectify_your_map.py ${map_name}.pgm
exit
