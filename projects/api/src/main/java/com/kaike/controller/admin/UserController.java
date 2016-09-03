package com.kaike.controller.admin;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.kit.StrKit;
import com.jfinal.plugin.activerecord.Page;
import com.kaike.common.AppConstants;
import com.kaike.common.Message;
import com.kaike.model.User;
import com.kaike.util.MD5;
import org.apache.commons.httpclient.HttpStatus;

import java.util.Date;

/**
 * Created by longjianlin on 7/23/16.
 */
public class UserController extends Controller {

    /**
     * 首页
     */
    @Before(GET.class)
    public void index() {
        int pageNumber = 1;//当前页码
        if (StrKit.notNull(getPara())) {
            pageNumber = Integer.parseInt(getPara());
        }

        Page<User> userPage = User.dao.paginate(pageNumber,
                AppConstants.PAGE_SIZE, "select *", "from user");
        setAttr("userPage", userPage);
        render("/admin/user/user.html");
    }

    //跳转
    @Before(GET.class)
    public void add() {
        render("/admin/user/add.html");
    }

    /**
     * 添加用户
     */
    @Before(POST.class)
    public void addUser() {
        String name = getPara("name");
        String mobile = getPara("mobile");
        String avatar = getPara("avatar");

        //初始化将用户的手机号作为密码
        String password = MD5.GetMD5Code(mobile);

        new User().set("name", name).set("mobile", mobile)
                .set("avatar", avatar).set("password", password)
                .set("create_at", new Date()).save();


        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }


    //跳转
    @Before(GET.class)
    public void edit() {
        String id = getPara();
        User user = User.dao.findById(id);
        setAttr("user", user);
        render("/admin/user/edit.html");
    }
}
