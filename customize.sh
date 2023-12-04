#!/system/bin/sh
# Author: Yu Yu
# -Begin-
# Variable
home="/data/adb/modules_update"
modules="/vi-VN_xiaomi"
_system="$home$modules/system"
_system_vendor="$home$modules/system/vendor"
_system_vendor_overlay="$home$modules/system/vendor/overlay"

# Set permission
chmod 0755 $_system
chmod 0644 $_system_vendor
chmod 0755 $_system_vendor_overlay
chmod 0644 $_system_vendor_overlay/*
# --End--
