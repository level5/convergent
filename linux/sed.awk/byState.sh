#!/bin/bash

# $* 将输入当做参数吧
awk -F, '{
  print $4 ", " $0
}' $* |
sort |
awk -F, '
$1 == lastState {
  print "\t" $2
}
$1 != lastState {
  lastState = $1
  print $1
  print "\t" $2
}'
