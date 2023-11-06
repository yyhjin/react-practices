package com.poscodx.emaillist.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.NoHandlerFoundException;

import com.poscodx.emaillist.dto.JsonResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {
//	@@Slf4j 사용하면 해당 코드 필요 없고 logger대신 log로 사용하면 됨
//	private static final Log logger = LogFactory.getLog(GlobalExceptionHandler.class);
	
	@ResponseBody
	@ExceptionHandler(Exception.class)
	public JsonResult handlerException(Exception e) {

		// 로깅(Logging)
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
		log.error(errors.toString());
		
		// 응답
		// 404 Error 처리
		JsonResult jsonResult = (e instanceof NoHandlerFoundException) ?
								JsonResult.fail("Unknown request") :
								JsonResult.fail(errors.toString());
		
		return jsonResult;
	}
}
