package com.test.todo.TodoService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.todo.TodoEntity.TodoEntity;
import com.test.todo.persistence.TodoRepository;

import lombok.extern.slf4j.Slf4j;



@Slf4j
@Service //비즈닉스 로직을 담고있는 클래스이다.
// Service가붙으면 다른 클래스에서 의존성 주입이 가능하다.
public class TodoService {
		

	@Autowired
	private TodoRepository repository;
	
	//테스트
	public String testService() {
		//엔티티 생성
		TodoEntity entity = TodoEntity.builder().title("나의 첫 아이템").build();
		//TodoEntity 저장
		repository.save(entity);
		TodoEntity savedEntity = repository.findById(entity.getId()).get();
		return savedEntity.getTitle();
	}
	
	public List<TodoEntity> create(TodoEntity entity){
		//매개변수로 넘어온 Entity가 유효한지 검사한다.
		validate(entity);
		
		//Spring Data JPA의 리포지토리 메서드로, 전달된 entity를 데이터베이스에 저장한다.
		//이 메서드는 JPA에서 제공하는 CRUD 기능 중 하나로, 기본적으로 엔티티가 데이터베이스에 존재하지 않으면 INSERT, 존재하면 UPDATE 쿼리를 실행한다.
		repository.save(entity);
		
		//여기서 SLF4J의 플레이스홀더 {}가 사용되어, 로그 메시지에 엔티티의 ID가 삽입한다.
		//log info는 정보수준의 로그를 남기는거고 {}는 entity.getId()의 id값이 들어가게된다.
		log.info("Entity Id : {} is saved",entity.getId());
		
		//특정 사용자 ID에 속한 모든 TodoEntity 목록을 반환한다.
		return repository.findByUserId(entity.getUserId());
	}
	
	
	private void validate(TodoEntity entity) {
		//전달된 TodoEntity가 null인지 확인합니다. 만약 null이면 RuntimeException을 발생시키고, 경고 로그를 기록한다.
		if(entity == null) {
			log.warn("Entity cannot be null.");
			throw new RuntimeException("Entity cannot be null");
		}
		
		//TodoEntity 객체가 userId를 가지고 있는지 확인한다.
		if(entity.getUserId() == null) {
			log.warn("Unknown user");
			throw new RuntimeException("Unknown user");
		}
	}	
	
}
