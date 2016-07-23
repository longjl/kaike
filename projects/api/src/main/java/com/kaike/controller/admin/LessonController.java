package com.kaike.controller.admin;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.kit.StrKit;
import com.jfinal.plugin.activerecord.Page;
import com.kaike.common.AppConstants;
import com.kaike.common.Message;
import com.kaike.model.Lesson;
import com.kaike.model.Teacher;
import org.apache.commons.httpclient.HttpStatus;

import java.util.Date;

/**
 * 课节
 * <p>
 * Created by longjianlin on 7/23/16.
 */
public class LessonController extends Controller {
    @Before(GET.class)
    public void index() {
        int pageNumber = 1;//当前页码
        if (StrKit.notNull(getPara())) {
            pageNumber = Integer.parseInt(getPara());
        }

        Page<Lesson> lessonPage = Lesson.dao.paginate(pageNumber,
                AppConstants.PAGE_SIZE, "select *", "from lesson order by sort");

        setAttr("lessonPage", lessonPage);
        render("/admin/lesson/lesson.html");
    }

    //跳转
    @Before(GET.class)
    public void add() {
        render("/admin/lesson/add.html");
    }

    //添加课节
    @Before(POST.class)
    public void addLesson() {
        String title = getPara("title");
        String duration = getPara("duration");
        String desc = getPara("desc");
        String video_url = getPara("video_url");
        String sort = getPara("sort");

        new Lesson().set("title", title)
                .set("duration", duration)
                .set("desc", desc)
                .set("video_url", video_url)
                .set("sort", sort)
                .set("create_at", new Date())
                .save();

        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    //跳转
    @Before(GET.class)
    public void edit() {
        String id = getPara();
        Lesson lesson = Lesson.dao.findById(id);
        setAttr("lesson", lesson);
        render("/admin/lesson/edit.html");
    }

    //编辑课节
    @Before(POST.class)
    public void editLesson() {
        int id = getParaToInt("id");
        String title = getPara("title");
        String duration = getPara("duration");
        String desc = getPara("desc");
        String video_url = getPara("video_url");
        String sort = getPara("sort");

        Lesson lesson = Lesson.dao.findById(id);
        if (lesson != null) {
            lesson.set("id", id).set("title", title)
                    .set("duration", duration)
                    .set("desc", desc)
                    .set("video_url", video_url)
                    .set("sort", sort)
                    .update();
        }
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    //删除课节
    @Before(GET.class)
    public void deleteLesson() {
        String id = getPara("id");
        Lesson lesson = Lesson.dao.findById(id);
        if (lesson != null){
            lesson.delete();
        }
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }
}
