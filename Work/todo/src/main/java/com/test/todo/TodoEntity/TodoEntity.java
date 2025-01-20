package com.test.todo.TodoEntity;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder // 객체생성을 편안하게 만들어주는어노테이션
@NoArgsConstructor // 매개변수가없는 생성자
@AllArgsConstructor // 클래스의 모든 멤버를 매개변수로 받는 생성자를 구현해준다.
@Data // get,set를 만들어줌
@Entity // 데이터베이스의 테이블에 해당하고 클래스의 각 인스턴스는 한 행을 의미한다.

@Table(name="Todo")
public class TodoEntity {
	@Id // 기본키 설정 테이블내에서 유일해야하며 중복된 값을 가질 수 없다.
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy="uuid")
	private String id; //이 객체의 id
	private String userId;//이 객체를 생성한 유저의 아이디
	private String title;//Todo 타이틀 예)운동 하기
	private boolean done;//true - todo를 완료한 경우(checked)

}
