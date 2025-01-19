package com.test.todo.DTO;

import com.test.todo.TodoEntity.TodoEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TodoDTO {
	private String id; //이 객체의 id
	private String userId;//이 객체를 생성한 유저의 아이디
	private String title;//Todo 타이틀 예)운동 하기
	private boolean done;//true - todo를 완료한 경우(checked)
	
	//엔티티를 dto로 변환
	public TodoDTO(final TodoEntity entity) {
		this.id=entity.getId();
		this.userId=entity.getUserId();
		this.title=entity.getTitle();
		this.done = entity.isDone();
	}
	
	
}
