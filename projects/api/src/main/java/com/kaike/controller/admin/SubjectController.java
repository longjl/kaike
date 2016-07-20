package com.kaike.controller.admin;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.ext.interceptor.POST;
import com.kaike.common.Message;
import com.kaike.model.Subject;
import org.apache.commons.httpclient.HttpStatus;

import java.util.List;

/**
 * 科目
 * <p>
 * Created by longjianlin on 7/20/16.
 */
public class SubjectController extends Controller {
    //科目列表
    @Before(GET.class)
    public void index() {
        List<Subject> subjects = Subject.dao.find("select id,name from subject");
        setAttr("subjects", subjects);
        render("/admin/subject/subject.html");
    }

    //添加科目
    @Before(POST.class)
    public void add() {
        String name = getPara("name");
        new Subject().set("name", name).save();
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    //编辑科目
    @Before(POST.class)
    public void edit(){
        int id = getParaToInt("id");
        String name = getPara("name");
        new Subject().set("id",id).set("name",name).update();
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    //删除科目
    @Before(GET.class)
    public void delete(){
        int id = getParaToInt("id");
        new Subject().deleteById(id);
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }
}
