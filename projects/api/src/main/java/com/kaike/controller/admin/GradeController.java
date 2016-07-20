package com.kaike.controller.admin;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.ext.interceptor.POST;
import com.kaike.common.Message;
import com.kaike.model.Grade;
import org.apache.commons.httpclient.HttpStatus;

import java.util.List;

/**
 * 年级
 * <p>
 * Created by longjianlin on 7/20/16.
 */
public class GradeController extends Controller {
    //年级列表
    @Before(GET.class)
    public void index() {
        List<Grade> grades = Grade.dao.find("select id,name from grade");
        setAttr("grades", grades);
        render("/admin/grade/grade.html");
    }

    //添加年级
    @Before(POST.class)
    public void add() {
        String name = getPara("name");
        new Grade().set("name", name).save();
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    //编辑年级
    @Before(POST.class)
    public void edit(){
        int id = getParaToInt("id");
        String name = getPara("name");
        new Grade().set("id",id).set("name",name).update();
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }
    //删除年级
    @Before(GET.class)
    public void delete(){
        int id = getParaToInt("id");
        new Grade().deleteById(id);
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }
}
