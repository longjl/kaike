package com.kaike.model;

import com.jfinal.plugin.activerecord.Model;

/**
 * VIP类型 如:月会员 半年会员 年会员
 * <p>
 * Created by longjianlin on 7/21/16.
 */
public class VipType extends Model<VipType> {
    public static final VipType dao = new VipType();
}
