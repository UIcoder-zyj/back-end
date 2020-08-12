###
 # @Descripttion:
 # @version: 1.0.0
 # @Author: zyj
 # @Date: 2020-08-12 13:09:17
 # @LastEditors: zyj
 # @LastEditTime: 2020-08-13 00:55:45
 # @Description: egg service description
###
#!/bin/zsh
export ROS_IP=$1
export ROS_MASTER_URI=http://$1:11311
source /opt/ros/kinetic/setup.zsh
source $HOME/ugv_ws/devel/setup.zsh

rosnode kill /slam_karto
nohup roslaunch $HOME/ugv_ws/launch/move_base.launch &

