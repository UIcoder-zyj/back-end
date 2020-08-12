###
 # @Descripttion:
 # @version: 1.0.0
 # @Author: zyj
 # @Date: 2020-08-12 13:09:17
 # @LastEditors: zyj
 # @LastEditTime: 2020-08-13 00:55:09
 # @Description: egg service description
###
#!/bin/zsh
export ROS_IP=$1
export ROS_MASTER_URI=http://$ROS_IP:11311
source /opt/ros/kinetic/setup.zsh
source $HOME/ugv_ws/devel/setup.zsh
echo $ROS_MASTER_URI
rosnode kill /slam_karto
rosnode kill /map_saver
exit
