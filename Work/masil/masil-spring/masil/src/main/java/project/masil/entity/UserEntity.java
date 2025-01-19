package project.masil.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "users")
@Entity
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer idx; // 회원 식별자

	private String userId; // 회원아이디

	private String password; // 비밀번호

	private String userName; // 이름

	private String userNickName;

	private String email; // 이메일

	private String profilePhotoPath; // 프로필사진 경로

	private String location; // 위치설정

	private String authProvider; // 소셜로그인공급자

}
