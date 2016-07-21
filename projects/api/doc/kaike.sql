/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50617
 Source Host           : localhost
 Source Database       : tianziyihao

 Target Server Type    : MySQL
 Target Server Version : 50617
 File Encoding         : utf-8

 Date: 07/20/2016 12:54:53 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `course`
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '课程标题',
  `desc` text COMMENT '课程描述',
  `type` varchar(10) NOT NULL DEFAULT 'free' COMMENT '课程类型 free:免费 vip:收费',
  `cover` varchar(255) NOT NULL DEFAULT '' COMMENT '课程封面',
  `teacher_id` int(11) NOT NULL DEFAULT 0 COMMENT '老师id',
  `subject_id` int(11) NOT NULL DEFAULT 0 COMMENT '科目id',
  `grade_id` int(11) NOT NULL DEFAULT 0 COMMENT '年级id',
  `lesson_number` varchar(10) NOT NULL DEFAULT 0 COMMENT '课节数',
  `sort` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `status` varchar(10) NOT NULL DEFAULT 'true' COMMENT '状态,true:上架 , false:下架',
  `create_at` timestamp NULL DEFAULT NULL,
  `update_up` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_at` timestamp NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='课程信息表';


-- ----------------------------
--  Table structure for `teacher`
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '老师名字',
  `qualifications` varchar(100) NOT NULL DEFAULT '' COMMENT '老师资历',
  `desc` text COMMENT '老师介绍',
  `avatar` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  `sort` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `weixin` varchar(255) NOT NULL DEFAULT '' COMMENT '微信二维码',
  `weibo` varchar(255) NOT NULL DEFAULT '' COMMENT '微博',
  `create_at` timestamp NULL DEFAULT NULL,
  `update_up` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_at` timestamp NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='老师信息表';


DROP TABLE IF EXISTS `subject`;
CREATE TABLE `subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '科目名称(语文,数学 ...)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='科目信息表';

DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '年级名称(高一,高二 ...)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='年级信息表';

-- ----------------------------
--  Table structure for `lesson`
-- ----------------------------
DROP TABLE IF EXISTS `lesson`;
CREATE TABLE `lesson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '课节标题',
  `desc` text COMMENT '课节简介',
  `duration` varchar(50) NOT NULL DEFAULT '00:00' COMMENT '课程时长',
  `video_url` varchar(255) NOT NULL DEFAULT '' COMMENT '视频URL',
  `sort` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `create_at` timestamp NULL DEFAULT NULL,
  `update_up` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_at` timestamp NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='课节信息表';

-- ----------------------------
--  Table structure for `course_lesson`
-- ----------------------------
DROP TABLE IF EXISTS `course_lesson`;
CREATE TABLE `course_lesson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL DEFAULT 0 COMMENT '课程id',
  `lesson_id` int(11) NOT NULL DEFAULT 0 COMMENT '课节id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='课程课节关联表';


-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '会员名字',
  `avatar` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  `mobile` varchar(20) NOT NULL DEFAULT '' COMMENT '手机号',
  `password` varchar(50) NOT NULL COMMENT '用户密码',
  `create_at` timestamp NULL DEFAULT NULL,
  `update_up` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_at` timestamp NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '会员名字',
  `avatar` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  `email` varchar(100) NOT NULL DEFAULT '' COMMENT 'email',
  `password` varchar(50) NOT NULL COMMENT '用户密码',
  `create_at` timestamp NULL DEFAULT NULL,
  `update_up` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `delete_at` timestamp NULL DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息表';

DROP TABLE IF EXISTS `vip_type`;
CREATE TABLE `vip_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT 'VIP类型名称(月,半年,年)',
  `original_price` int(11) NOT NULL DEFAULT 0 COMMENT '原价',
  `current_price` int(11) NOT NULL DEFAULT 0 COMMENT '现价',
  `concessionary_rate` int(11) NOT NULL DEFAULT 0 COMMENT '优惠价',
  `month` int(11) NOT NULL DEFAULT 0 COMMENT '月数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='VIP类型信息表';

DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT 0 COMMENT '用户id',
  `expiry_date` timestamp NULL DEFAULT NULL COMMENT 'VIP有效期',
  `create_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='VIP信息表';

-- ----------------------------
--  Table structure for `user_course`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_no` varchar(100) NOT NULL DEFAULT '' COMMENT '订单号',
  `user_id` int(11) NOT NULL DEFAULT 0 COMMENT '用户id',
  `vip_type_id` int(11) NOT NULL DEFAULT 0 COMMENT 'VIP类型id',
  `create_at` timestamp NULL DEFAULT NULL COMMENT '订单生成时间',
  `payment_at` timestamp NULL DEFAULT NULL COMMENT '支付时间',
  `status` varchar(10) NOT NULL DEFAULT 'not_paid' COMMENT 'not_paid:未支付 , already_paid:已支付',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单信息表';

SET FOREIGN_KEY_CHECKS = 1;
