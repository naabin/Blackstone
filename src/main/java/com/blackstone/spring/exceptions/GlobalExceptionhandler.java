package com.blackstone.spring.exceptions;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionhandler {
	
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(HTTP400Exception.class)
	public @ResponseBody ApiExceptionInfo handleBadReqest(HTTP400Exception ex, WebRequest request, HttpServletResponse response){
		return new ApiExceptionInfo(ex.getLocalizedMessage(), "The request did not have a correct parameter");
	}
	
	
	@ResponseStatus(code = HttpStatus.NOT_FOUND)
	@ExceptionHandler(HTTP404Exception.class)
	public @ResponseBody ApiExceptionInfo handleResourceNotFound(HTTP404Exception ex, WebRequest request, HttpServletResponse response) {
		return new ApiExceptionInfo(ex.getLocalizedMessage(), "The request resource was not found.");
	}
	
	@ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(Exception.class)
	public @ResponseBody ApiExceptionInfo handleUnhandledExceptions(Exception ex, WebRequest request, HttpServletResponse response) {
		return new ApiExceptionInfo(ex.getLocalizedMessage(),"");
	}
	
	
}
