package com.test.todo.TodoController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.todo.DTO.ResponseDTO;
import com.test.todo.TodoService.TodoService;

@RestController // 이클래스가 웹요청을 처리하는곳이고 결과를 바로 응답할거야라고 알려주는 역할
@RequestMapping("todo") //특정 url에대한 요청을 처리하는 방법을 지정하는데 사용됨
public class TodoController {
	
	@Autowired
	private TodoService service;
	
	@GetMapping("/test")
	public ResponseEntity<?> testTodo(){
		String str = service.testService(); //문자열 형식의 str변수에 testService 메서드 사용
		List<String> list = new ArrayList<>();
		list.add(str);   //list에 str변수 추가
		ResponseDTO<String>response = ResponseDTO.<String>builder().data(list).build();
		return ResponseEntity.ok().body(response);
	}
	
	
}
