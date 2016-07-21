package com.kaike.controller.admin;

import com.jfinal.core.Controller;

/**
 * Created by longjianlin on 7/20/16.
 */
public class AdminController extends Controller {
    //将后台的默认访问作为登录入口
    public void index() {
        //TODO 需要判断是否已经登录

        render("/admin/login.html");
    }



    //后台登录入口
    public void login(){
        //TODO 处理登录操作 后续完善

       redirect("/admin/course");
    }
}
