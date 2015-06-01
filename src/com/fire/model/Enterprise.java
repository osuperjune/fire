package com.fire.model;

import com.jfinal.plugin.activerecord.Model;

public class Enterprise extends Model<Enterprise> {
	/**
	 * 序列化ID
	 */
	private static final long serialVersionUID = 59628358309527475L;
	public static final Enterprise dao = new Enterprise();
}