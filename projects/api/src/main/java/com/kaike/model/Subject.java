package com.kaike.model;

import com.jfinal.plugin.activerecord.Model;

/**
 * 科目 如语文 数学 英语 ...
 * <p>
 * Created by longjianlin on 7/20/16.
 */
public class Subject extends Model<Subject> {
    public static final Subject dao = new Subject();
}
