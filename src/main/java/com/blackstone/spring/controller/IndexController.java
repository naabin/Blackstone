package com.blackstone.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	@RequestMapping(value = "/{path:[^\\.]*}")
	public String index() {
		return "forward:/";
	}
}
