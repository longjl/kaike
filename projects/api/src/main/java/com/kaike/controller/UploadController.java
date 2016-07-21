package com.kaike.controller;

import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.upload.UploadFile;
import com.kaike.common.Message;
import org.apache.commons.httpclient.HttpStatus;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by longjianlin on 7/20/16.
 */
public class UploadController extends Controller {

    //上传老师头像
    @Before(POST.class)
    public void teacher_avatar() {
        int maxFile = 2 * 1024 * 1024; //最大限制2M
        //上传路径 uploadPath = /data/upload/teacher 服务器存储
        String uploadPath = "/teacher"; //实际路径 /upload/teacher
        UploadFile uploadFile = getFile("file", uploadPath, maxFile, "utf-8");
        File file = uploadFile.getFile();
        String sufName = uploadFile.getFileName().substring(uploadFile.getFileName().lastIndexOf("."), uploadFile.getFileName().length());
        String imgPath = uploadFile.getUploadPath() + File.separator + System.currentTimeMillis() + sufName;

        File dest = new File(imgPath);
        file.renameTo(dest);//重命名

        Map<String, Object> data = new HashMap<>();
        data.put("avatar",  dest.getName());
        Message message = new Message(HttpStatus.SC_OK, "success", data);
       renderJson(message);
    }


    //上传微信二维码
    @Before(POST.class)
    public void weixin() {
        int maxFile = 2 * 1024 * 1024; //最大限制2M
        //上传路径 uploadPath = /data/upload/teacher 服务器存储
        String uploadPath = "/weixin"; //实际路径 /upload/teacher
        UploadFile uploadFile = getFile("file", uploadPath, maxFile, "utf-8");
        File file = uploadFile.getFile();
        String sufName = uploadFile.getFileName().substring(uploadFile.getFileName().lastIndexOf("."), uploadFile.getFileName().length());
        String imgPath = uploadFile.getUploadPath() + File.separator + System.currentTimeMillis() + sufName;

        File dest = new File(imgPath);
        file.renameTo(dest);//重命名

        Map<String, Object> data = new HashMap<>();
        data.put("weixin",  dest.getName());
        Message message = new Message(HttpStatus.SC_OK, "success", data);
        renderJson(message);
    }

    //上传课程封面
    @Before(POST.class)
    public void course() {
        int maxFile = 5 * 1024 * 1024; //最大限制2M
        //上传路径
        String uploadPath = "/course"; //实际路径 /upload/teacher
        UploadFile uploadFile = getFile("file", uploadPath, maxFile, "utf-8");
        File file = uploadFile.getFile();
        String sufName = uploadFile.getFileName().substring(uploadFile.getFileName().lastIndexOf("."), uploadFile.getFileName().length());
        String imgPath = uploadFile.getUploadPath() + File.separator + System.currentTimeMillis() + sufName;

        File dest = new File(imgPath);
        file.renameTo(dest);//重命名

        Map<String, Object> data = new HashMap<>();
        data.put("cover",  dest.getName());
        Message message = new Message(HttpStatus.SC_OK, "success", data);
        renderJson(message);
    }

}
