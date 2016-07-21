package com.kaike.controller.admin;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.GET;
import com.jfinal.ext.interceptor.POST;
import com.kaike.common.Message;
import com.kaike.model.VipType;
import org.apache.commons.httpclient.HttpStatus;

import java.util.List;

/**
 * vip 类型
 * <p>
 * Created by longjianlin on 7/21/16.
 */
public class VipTypeController extends Controller {

    @Before(GET.class)
    public void index() {
        List<VipType> vipTypes = VipType.dao.find("select * from vip_type");
        setAttr("vipTypes", vipTypes);
        render("/admin/viptype/viptype.html");
    }

    @Before(GET.class)
    public void add() {
        render("/admin/viptype/add.html");
    }

    @Before(GET.class)
    public void edit() {
        int id = getParaToInt();
        VipType vipType = VipType.dao.findById(id);
        setAttr("viptype",vipType);
        render("/admin/viptype/edit.html");
    }

    //添加VIP类型
    @Before(POST.class)
    public void addVipType() {
        String name = getPara("name");//vip类型名称
        int original_price = getParaToInt("original_price");//原价
        int current_price = getParaToInt("current_price");//现价
        int concessionary_rate = getParaToInt("concessionary_rate");//优惠价
        int month = getParaToInt("month");//月数

        new VipType().set("name", name)
                .set("original_price", original_price)
                .set("current_price", current_price)
                .set("concessionary_rate", concessionary_rate)
                .set("month", month).save();

        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    //编辑VIP类型
    @Before(POST.class)
    public void editVipType() {
        int id = getParaToInt("id");
        String name = getPara("name");//vip类型名称
        int original_price = getParaToInt("original_price");//原价
        int current_price = getParaToInt("current_price");//现价
        int concessionary_rate = getParaToInt("concessionary_rate");//优惠价
        int month = getParaToInt("month");//月数

        VipType vipType = VipType.dao.findById(id);
        if (vipType != null) {
            vipType.set("id", id).set("name", name)
                    .set("original_price", original_price)
                    .set("current_price", current_price)
                    .set("concessionary_rate", concessionary_rate)
                    .set("month", month).update();
        }
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

    //删除vip类型
    @Before(GET.class)
    public void delete() {
        int id = getParaToInt("id");
        VipType vipType = VipType.dao.findById(id);
        if (vipType != null) {
            vipType.delete();
        }
        Message message = new Message(HttpStatus.SC_OK, "success", null);
        renderJson(message);
    }

}
