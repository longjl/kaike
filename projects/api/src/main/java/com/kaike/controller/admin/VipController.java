package com.kaike.controller.admin;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.kit.StrKit;
import com.jfinal.plugin.activerecord.Page;
import com.kaike.common.AppConstants;
import com.kaike.model.User;
import com.kaike.model.Vip;

import java.util.List;

/**
 * vip
 * Created by longjianlin on 8/4/16.
 */
public class VipController extends Controller {
    @Before(GET.class)
    public void index() {
        int pageNumber = 1;//当前页码
        if (StrKit.notNull(getPara())) {
            pageNumber = Integer.parseInt(getPara());
        }

        Page<Vip> vipPage = Vip.dao.paginate(pageNumber,
                AppConstants.PAGE_SIZE, "SELECT v.id,v.user_id,v.expiry_date,v.create_at,u.`name`", "from vip v left join user u on v.user_id = u.id order by v.create_at desc");

        setAttr("vipPage", vipPage);
        render("/admin/vip/vip.html");
    }

    //添加VIP用户
    @Before(GET.class)
    public void add(){
        List<User> users = User.dao.find("SELECT id,`name` from `user`");
        setAttr("users",users);
        render("/admin/vip/add.html");
    }

}
