package com.kaike.controller.admin;

import com.jfinal.core.Controller;

/**
 * Created by longjianlin on 7/20/16.
 */
public class CourseController extends Controller {

    public void index(){
        render("/admin/course/course.html");
    }
}
