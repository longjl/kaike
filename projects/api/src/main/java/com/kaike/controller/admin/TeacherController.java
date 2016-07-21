package com.kaike.controller.admin;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.kit.StrKit;
import com.jfinal.plugin.activerecord.Page;
import com.kaike.common.AppConstants;
import com.kaike.common.Message;
import com.kaike.model.Teacher;
import org.apache.commons.httpclient.HttpStatus;

import java.util.Date;

/**
 * 老师
 * <p>
 * Created by longjianlin on 7/20/16.
 */
public class TeacherController extends Controller {
    //老师列表
    @Before(GET.class)
    public void index() {
        int pageNumber = 1;//当前页码
        if (StrKit.notNull(getPara())) {
            pageNumber = Integer.parseInt(getPara());
        }
        Page<Teacher> teacherPage = Teacher.dao.paginate(pageNumber, AppConstants.PAGE_SIZE, "select *", "from teacher order by sort desc");
        setAttr("teacherPage", teacherPage);
        render("/admin/teacher/teacher.html");
    }

    //跳转添加老师
    @Before(GET.class)
    public void add() {
        render("/admin/teacher/add.html");
    }

    //添加老师
    @Before(POST.class)
    public void addTeacher() {
        String name = getPara("name");
        String qualifications = getPara("qualifications");
        String desc = getPara("desc");
        String avatar = getPara("avatar");
        String weixin = getPara("weixin");
        String weibo = getPara("weibo");

        new Teacher().set("name", name).set("qualifications", qualifications)
                .set("desc", desc).set("avatar", avatar).set("weixin", weixin)
                .set("weibo", weibo).set("sort", 0)
                .set("create_at", new Date()).save();

        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }
}
