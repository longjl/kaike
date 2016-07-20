package com.kaike.model;

import com.jfinal.plugin.activerecord.Model;

/**
 * 年级 如高一,高二 ,初一 ...
 * <p>
 * Created by longjianlin on 7/20/16.
 */
public class Grade extends Model<Grade> {
    public static final Grade dao = new Grade();
}
