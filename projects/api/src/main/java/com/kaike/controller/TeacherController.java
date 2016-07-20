package com.kaike.controller;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.ext.interceptor.POST;
import com.kaike.model.Teacher;
import com.kaike.common.Message;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.log4j.Logger;

import java.util.Date;

/**
 * Created by longjianlin on 16/7/11.
 */
public class TeacherController extends Controller {
    @SuppressWarnings("unused")
    private static Logger logger = Logger.getLogger(TeacherController.class);

    /**
     * 添加老师
     */
    @Before(POST.class)
    public void add() {
        String name = getPara("name");
        String desc = getPara("desc");
        String avatar = getPara("avatar");
        int sort = getParaToInt("sort");

        Teacher teacher = new Teacher();
        teacher.set("name", name)
                .set("desc", desc)
                .set("avatar", avatar)
                .set("sort", sort)
                .set("create_at", new Date()).save();
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    /**
     * 编辑老师
     */
    @Before(POST.class)
    public void edit(){
        int id = getParaToInt("id");
        String name = getPara("name");
        String desc = getPara("desc");
        String avatar = getPara("avatar");
        int sort = getParaToInt("sort");

        Teacher teacher = Teacher.dao.findById(id);
        if (null != teacher){
            teacher.set("name", name)
                    .set("desc", desc)
                    .set("avatar", avatar)
                    .set("sort", sort)
                    .set("create_at", new Date()).update();
        }
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    /**
     * 删除老师
     */
    @Before(GET.class)
    public void delete(){
        int id = getParaToInt("id");
        Teacher teacher = Teacher.dao.findById(id);
        if (null != teacher){
            teacher.delete();
        }
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }
}
