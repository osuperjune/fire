package com.fire.model;

import com.jfinal.plugin.activerecord.Model;

public class Project extends Model<Project>{
    /**
     * 序列化ID
     */
    private static final long serialVersionUID = -8529729851229756528L;
    public static final Project dao = new Project();
}
