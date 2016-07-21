package com.kaike.controller.admin;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.kit.StrKit;
import com.jfinal.plugin.activerecord.Page;
import com.kaike.common.AppConstants;
import com.kaike.common.Message;
import com.kaike.model.Course;
import com.kaike.model.Grade;
import com.kaike.model.Subject;
import com.kaike.model.Teacher;
import org.apache.commons.httpclient.HttpStatus;

import java.util.Date;
import java.util.List;

/**
 * Created by longjianlin on 7/20/16.
 */
public class CourseController extends Controller {

    @Before(GET.class)
    public void index(){
        int pageNumber = 1;//当前页码
        if (StrKit.notNull(getPara())) {
            pageNumber = Integer.parseInt(getPara());
        }
        Page<Course> coursePage = Course.dao.paginate(pageNumber,AppConstants.PAGE_SIZE,
                "select c.*,t.name as 'teacherName' ,s.`name` as 'subjectName',g.`name` as 'gradeName'"
                ,"from course c left join teacher t on c.teacher_id = t.id left join `subject` s on c.subject_id = s.id left join grade g on c.grade_id = g.id order by c.create_at desc");
        setAttr("coursePage",coursePage);
        render("/admin/course/course.html");
    }

    @Before(GET.class)
    public void add(){
        List<Teacher> teachers = Teacher.dao.find("select id,name from teacher");
        setAttr("teachers",teachers);

        List<Subject> subjects = Subject.dao.find("select id,name from subject");
        setAttr("subjects",subjects);

        List<Grade> grades = Grade.dao.find("select id,name from grade");
        setAttr("grades",grades);
        render("/admin/course/add.html");
    }

    //添加课程
    @Before(POST.class)
    public void addCourse(){
        String title = getPara("title");
        String type = getPara("type");
        String desc = getPara("desc");
        String cover = getPara("cover");
        int teacher_id = getParaToInt("teacher_id");
        int subject_id = getParaToInt("subject_id");
        int grade_id = getParaToInt("grade_id");
        int lesson_number = getParaToInt("lesson_number");
        int sort = getParaToInt("sort");
        String status = getPara("status");

        new Course().set("title",title)
                .set("type",type)
                .set("desc",desc).set("cover",cover)
                .set("teacher_id",teacher_id)
                .set("subject_id",subject_id)
                .set("grade_id",grade_id)
                .set("lesson_number",lesson_number)
                .set("sort",sort)
                .set("status",status)
                .set("create_at",new Date()).save();

        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }


}
