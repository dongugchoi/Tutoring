package com.test.todo.persistence;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.todo.TodoEntity.TodoEntity;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String>{
	
	//userId로 TodoEntity를 찾는 메서드
	List<TodoEntity> findByUserId(String userId);
}

