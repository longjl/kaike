package com.kaike.controller;

import com.kaike.common.AppConstants;
import com.kaike.common.Message;
import com.kaike.model.Course;
import com.kaike.model.User;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.plugin.activerecord.Page;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.log4j.Logger;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by longjianlin on 16/7/11.
 */
public class CourseController extends Controller {
    @SuppressWarnings("unused")
    private static Logger logger = Logger.getLogger(CourseController.class);

    @Before(GET.class)
    public void page() {
        int pageNumber = getParaToInt("pageNumber");
        Page<Course> page = Course.dao.paginate(pageNumber, AppConstants.PAGESIZE, "select id,title", "from course");
        Map<String, Object> data = new HashMap<>();
        data.put("data", page);
        Message message = new Message(HttpStatus.SC_OK, "success", data);
        renderJson(message);
    }

    /**
     * 添加课程
     */
    @Before(POST.class)
    public void add() {
        String title = getPara("title");
        String desc = getPara("desc");
        String is_pay = getPara("is_pay");
        String cover = getPara("cover");
        String lesson_number = getPara("lesson_number");
        int sort = getParaToInt("sort");
        String status = getPara("status");

        User user = new User();
        user.set("title", title);
        user.set("desc", desc);
        user.set("is_pay", is_pay);
        user.set("cover", cover);
        user.set("lesson_number", lesson_number);
        user.set("sort", sort);
        user.set("status", status);
        user.set("create_at", new Date());

        user.save();
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    /**
     * 编辑课程
     */
    @Before(POST.class)
    public void edit() {
        int id = getParaToInt("id");
        String title = getPara("title");
        String desc = getPara("desc");
        String is_pay = getPara("is_pay");
        String cover = getPara("cover");
        String lesson_number = getPara("lesson_number");
        int sort = getParaToInt("sort");
        String status = getPara("status");

        User user = User.dao.findById(id);
        if (null != user) {
            user.set("title", title);
            user.set("desc", desc);
            user.set("is_pay", is_pay);
            user.set("cover", cover);
            user.set("lesson_number", lesson_number);
            user.set("sort", sort);
            user.set("status", status);
            user.update();
        }

        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    /**
     * 删除课程
     */
    @Before(GET.class)
    public void delete() {
        int id = getParaToInt("id");
        User user = User.dao.findById(id);
        if (null != user) {
            user.delete();
        }
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }
}
