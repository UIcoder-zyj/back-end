#!/bin/bash
SHELL_FOLDER=$(cd "$(dirname "$0")";pwd)
map_name=$SHELL_FOLDER/../public/map/$1.yaml
temp_name=$SHELL_FOLDER/../public/map/temp.yaml
echo "image: ${1}.pgm" >>$temp_name
resolution= $(cat ${map_name} | shyaml get-value resolution)
origin= cat ${map_name} | shyaml get-value origin
negate= cat ${map_name} | shyaml get-value negate
occupied_thresh= cat ${map_name} | shyaml get-value occupied_thresh
free_thresh=cat ${map_name} | shyaml get-value free_thresh
echo "resolution: ${resolution}" >>$temp_name
echo "origin: ${origin}"  >>$temp_name
echo "negate: ${negate}" >>$temp_name
echo "occupied_thresh: ${occupied_thresh}" >>$temp_name
echo "free_thresh: ${free_thresh}" >>$temp_name



