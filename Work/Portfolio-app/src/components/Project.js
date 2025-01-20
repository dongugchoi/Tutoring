import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import {
  Section,
  Title,
  ProjectCard,
  ProjectVideo,
  ProjectName,
  NavBar,
  NavItem,
  ProjectDescription,
  SectionContentWrapper,
  SectionContent,
  LinkContainer,
  ProjectLink,
  IconGrid,
  IconItem,
  CategoryContent,
  ProjectTitleWrapper,
  ProjectLogo,
  LargeTitle,
  Category,
  FeatureItem,
  FeatureContent,
  TechDescription,
  TitleWrapper,
  Center
} from "../styles/ProjectStyles"; // 스타일 임포트





const Projects = ({ modalOpen, setModalOpen }) => {
  const [visibleSection, setVisibleSection] = useState("overview");
  const [isMobile, setIsMobile] = useState(false);
  const [currentFeature, setCurrentFeature] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalContentRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => {
        const newIndex = prev - 1;

        setCurrentFeature(features[newIndex]); // 새 feature 설정
        if (modalContentRef.current) {
          modalContentRef.current.scrollTo({ top: 0, behavior: "smooth" }); // 스크롤 최상단 이동
        }
        return newIndex;
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < features.length - 1) {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        setCurrentFeature(features[newIndex]); // 새 feature 설정
        if (modalContentRef.current) {
          modalContentRef.current.scrollTo({ top: 0, behavior: "smooth" }); // 스크롤 최상단 이동
        } 
        return newIndex;
      });
    }
  };



  const features = [
    {
      title: "도·소매 유통 가격 검색",
      videoSrc: `${process.env.PUBLIC_URL}/video/wholsaleandRetail.mp4`,
      description: "도·소매 유통 시장의 전체 데이터를 기반으로 농산물의 가격을 검색할 수 있는 기능으로, 시장별로 다양한 품목의 가격을 손쉽게 확인할 수 있는 기능입니다.",
    },
    {
      title: "현대인에게 필요한 농산물 Top5",
      videoSrc: `${process.env.PUBLIC_URL}/video/top5.mp4`,
      description: "OpenAPI 데이터를 활용해 선정된 농산물 Top 5의 어제와 오늘 평균 가격을 직관적으로 비교할 수 있는 기능입니다.",
    },
    {
      title: "지역별 가격 비교",
      videoSrc: `${process.env.PUBLIC_URL}/video/pricecity.mp4`,
      description: "선택한 날짜에 따라 지역별 농산물의 도·소매 가격 변동을 확인하고, 그래프를 통해 시각적으로 쉽게 비교할 수 있는 기능입니다.",
    },
    {
      title: "회원가입 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/signUp.mp4`,
      description: "회원가입 시 정규식을 활용하여 입력 데이터를 검증하고, 보다 정확하고 안전한 사용자 정보를 수집할 수 있는 기능입니다.",
    },
    {
      title: "회원수정 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/userInfo.mp4`,
      description: "회원 수정 페이지에서는 비밀번호 확인 절차를 통해 안전하게 수정 모드로 진입할 수 있으며, 정규식을 활용한 비밀번호, 닉네임, 이메일을  중복없이 변경할 수 있는 기능입니다.",
    },
    {
      title: "회원탈퇴 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/unsubscribe.mp4`,
      description: "회원탈퇴는 회원 수정 페이지에 들어가 회원탈퇴 버튼을 클릭한 뒤, 비밀번호 확인 절차를 완료해야 진행됩니다. 확인이 완료되면 회원탈퇴가 완료되었다는 팝업이 표시되며, 사용자가 작성했던 모든 게시글과 콘텐츠가 영구적으로 삭제됩니다.",
    },
    {
      title: "로그인 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/login.mp4`,
      description: "회원가입 시 정규식을 활용하여 입력 데이터를 검증하고, 이를 기반으로 사용자가 안전하고 정확하게 로그인할 수 있도록 지원하는 기능입니다.",
    },
    {
      title: "QnA ",
      videoSrc: `${process.env.PUBLIC_URL}/video/qna.mp4`,
      description: "Q&A 일반 사용자는 로그인이 필요한 기능으로, 닉네임은 로그인한 사용자 정보를 기반으로 자동으로 입력됩니다. 사용자는 문의 내용을 작성하기 위해 제목과 내용을 입력한 후 보내기 버튼을 누르면 팝업이 표시되는 기능입니다.",
    },
    {
      title: "QnA 관리자 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/qnamaster.mp4`,
      description: "Q&A 관리자는 일반 사용자와 달리 문의하기 기능이 비활성화되며, 대신 문의 리스트가 화면에 표시됩니다. 관리자가 리스트 항목을 클릭하면 모달 창이 열리며, 해당 문의의 제목, 작성자, 내용, 작성일자를 상세히 확인할 수 있습니다.  관리자에게 문의 내용을 효율적으로 관리하고 처리할 수 있는 기능입니다.",
    },
    {
      title: "게시글작성 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/boardwrite.mp4`,
      description: "게시글 작성 페이지에서는 사용자의 닉네임이 자동으로 입력되며, 사용자는 제목과 내용을 작성한 뒤 작성 버튼을 눌러 새로운 게시글을 생성할 수 있습니다.  쉽고 직관적으로 게시글을 작성할 수 있는 기능입니다.",
    },
    {
      title: "게시글수정 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/boardupdate.mp4`,
      description: "게시글 수정 페이지에서는 사용자의 닉네임이 자동으로 입력되며, 기존 게시글의 제목과 내용이 표시됩니다. 사용자는 제목과 내용을 수정한 뒤, 수정 완료 버튼을 눌러 변경된 내용을 저장할 수 있습니다.  쉽고 직관적으로 게시글 수정을 할 수 있는 기능입니다.",
    },
    {
      title: "게시글삭제 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/boarddelete.mp4`,
      description: "게시글 삭제 페이지에서는 사용자의 계정 보안을 위해, 로그인한 사용자와 게시글 작성자가 동일한 경우에만 삭제 버튼이 활성화됩니다. 삭제 버튼 클릭 시, 사용자에게 삭제 여부를 확인하는 팝업이 표시되며, 사용자가 확인을 누르면 게시글이 안전하게 삭제되는 기능입니다.",
    },
    {
      title: "댓글 입력 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/comment.mp4`,
      description: "댓글 작성 기능은 로그인한 사용자만 이용할 수 있도록 제한되어 있습니다. 로그인한 사용자는 댓글 입력란에 원하는 내용을 작성한 뒤, 댓글 작성 버튼을 클릭하여 댓글을 등록할 수 있는 기능입니다.",
    },
    {
      title: "댓글 수정 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/commentupdate.mp4`,
      description: "댓글 수정 기능은 로그인한 사용자 중 해당 댓글의 작성자만 이용할 수 있습니다. 사용자는 댓글 리스트에서 본인이 작성한 댓글의 수정 버튼을 클릭하여 수정 모드로 전환한 뒤, 댓글 내용을 수정하고 수정 완료 버튼을 클릭하면 업데이트가 완료됩니다. 수정이 완료된 댓글에서는 작성 시점과 함께 수정된 시점의 정보도 확인할 수 있습니다. 이 기능은 댓글 작성자의 권한을 보장하며, 댓글 내용의 신뢰성을 유지하기 위해 설계되었습니다."
    },
    {
      title: "댓글 삭제 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/commentdelete.mp4`,
      description: "댓글 삭제 기능은 로그인한 사용자 중 해당 댓글의 작성자만 이용할 수 있습니다. 사용자는 댓글 리스트에서 본인이 작성한 댓글의 삭제 버튼을 클릭하면 삭제 확인 팝업이 표시되고 사용자가 삭제를 확인하면 댓글이 즉시 삭제되며, 삭제된 댓글은 댓글 목록에서 제거됩니다. 이 기능은 댓글 작성자의 권한을 보장하고, 댓글 관리의 신뢰성을 유지하기 위해 설계되었습니다.",
    },
    {
      title: "답글 입력 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/comments.mp4`,
      description: "답글 입력 기능은 기존 댓글에 대한 추가적인 소통을 위해 제공됩니다. 사용자는 댓글 리스트에서 '답글' 버튼을 클릭하면, 해당 댓글 아래에 답글 입력 칸이 활성화됩니다. 답글 내용을 작성한 후 '작성' 버튼을 누르면 답글이 등록되는 기능입니다.",
    },
    {
      title: "답글 삭제 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/commentsdelete.mp4`,
      description: "답글 삭제 기능은 로그인한 사용자 중 해당 답글의 작성자만 이용할 수 있습니다. 사용자는 답글 리스트에서 본인이 작성한 답글의 삭제 버튼을 클릭하면 삭제 확인 팝업이 표시되고 사용자가 삭제를 확인하면 해당 답글이 즉시 삭제되며, 답글은 답글 목록에서 제거되는 기능입니다.",
    },
    {
      title: "좋아요 ",
      videoSrc: `${process.env.PUBLIC_URL}/video/liked.mp4`,
      description: "좋아요 기능은 로그인한 사용자만 이용할 수 있으며, 한 사용자 아이디당 하나의 게시글에 대해 한 번만 좋아요를 누를 수 있습니다. 사용자가 좋아요를 누르면 해당 게시글의 좋아요 상태가 데이터베이스에 저장되며, 누른 좋아요는 색상이 변경되어 시각적으로 표시됩니다. 게시글에 대한 사용자 반응을 직관적으로 확인하고, 중복 좋아요를 방지하는 기능입니다.",
    },
  ];

  useEffect(() => {
    // 모바일 환경 여부 확인
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleFeatureClick = (feature, index) => {
    setCurrentIndex(index); // index 설정
    setCurrentFeature(feature); // 현재 feature 설정
    setModalOpen(true); // 모달 열기
  };

  const handleEvent = (e) => {
    e.preventDefault(); // 기본 동작 방지
    window.open("http://www.nayanong.site", "_blank")
  }

  return (
    <Section id="projects">
      <Title>Project</Title>
      <ProjectCard>

        <ProjectTitleWrapper>
          <ProjectLogo src={`${process.env.PUBLIC_URL}/accests/logo.png`} alt="나야, 농 로고" onClick={handleEvent} />
          <ProjectName>나야, 농</ProjectName>
        </ProjectTitleWrapper>

        {/* 프로젝트 보기, 회의록 및 정리사항, 기술문서 */}
        < LinkContainer >
          <ProjectLink
            href="http://www.nayanong.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            프로젝트 보기
          </ProjectLink>
          <ProjectLink
            href="https://docs.google.com/spreadsheets/d/1cfhPAhxgoSSTt0Mr_6eZa3Z4JSX3FRCs0_GRCnQxJ0w/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            회의록 및 정리사항
          </ProjectLink>
          <ProjectLink
            href="https://docs.google.com/presentation/d/1IGTmLirphoxfW0kP7H2MbRnHDQZ-esnm/edit#slide=id.p1"
            target="_blank"
            rel="noopener noreferrer"
          >
            기술문서
          </ProjectLink>
        </LinkContainer >

        {/* 프로젝트 비디오(영상) */}
        <ProjectVideo autoPlay={!isMobile} loop={!isMobile} muted>
          <source
            src={`${process.env.PUBLIC_URL}/nayanong.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </ProjectVideo>

        <NavBar>
          <NavItem
            onClick={() => setVisibleSection("overview")}
            $isActive={visibleSection === "overview"}
          >
            개요
          </NavItem>
          <NavItem
            onClick={() => setVisibleSection("learning")}
            $isActive={visibleSection === "learning"}
          >
            개인 성장 및 학습
          </NavItem>
          <NavItem
            onClick={() => setVisibleSection("Scope")}
            $isActive={visibleSection === "Scope"}
          >
            개발 영역
          </NavItem>
          <NavItem
            onClick={() => setVisibleSection("features")}
            $isActive={visibleSection === "features"}
          >
            주요 기능
          </NavItem>

          <NavItem
            onClick={() => setVisibleSection("technologies")}
            $isActive={visibleSection === "technologies"}
          >
            사용 기술
          </NavItem>
          <NavItem
            onClick={() => setVisibleSection("login")}
            $isActive={visibleSection === "login"}
          >
            로그인 계정
          </NavItem>
        </NavBar>



        {/* 개요 */}
        <SectionContentWrapper $isVisible={visibleSection === "overview"}>
          <ProjectDescription>
            <SectionContent>
              <Center>
                팀프로젝트<br />
                개발 인원: 4명 (Frontend 2명, Backend 2명)<br />
                본인 역할: Frontend<br />
                개발기간: 2024.11.13 ~ 2024.12.26<br /><br />
              </Center>
              "나야, 농"은 농산물의 도매 및 소매 가격을 손쉽게 조회할 수 있으며, 지역별이나 유통업체별 다양한 가격 정보를 비교할 수 있도록 설계된 직관적인 플랫폼으로, 농산물 소비자와 판매자 간의 정보 격차를 해소하고 효율적인 구매 결정을 돕기 위해 개발되었습니다.<br />

              "KAMIS(Open API)" 데이터를 활용하여 사용자들이 실시간으로 농산물의 가격 정보를 확인할 수 있으며, 간단한 인터페이스를 통해 누구나 쉽게 사용할 수 있으며 또한, 지역별 가격 변동을 빠르게 파악할 수 있어 사용자에게 유용한 정보를 제공합니다.<br />

              "나야, 농"은 가격 비교 기능 외에도 사용자 간 소통을 위한 커뮤니티 기능과 질문과 답변을 주고받을 수 있는 "QnA 서비스"를 통해 농업 종사자와 소비자가 더 나은 의사 결정을 할 수 있도록 지원하는 것을 목표로 합니다.
            </SectionContent>
          </ProjectDescription>
        </SectionContentWrapper>

        {/* 개발 영역 */}
        <SectionContentWrapper $isVisible={visibleSection === "Scope"}>
          <ProjectDescription>
            <SectionContent>
              {/* 큰 제목 1: UI 설계 및 React 컴포넌트 개발 */}
              <Category>
                <LargeTitle>UI 설계 및 React 컴포넌트 개발</LargeTitle>
                <CategoryContent>
                  - 반응형 디자인 구현<br />
                  - 컴포넌트 기반 UI 설계 및 재사용 가능한 구조 구현<br />
                </CategoryContent>
              </Category>

              {/* 큰 제목 2: 상태 관리 및 데이터 흐름 설계 */}
              <Category>
                <LargeTitle>상태 관리 및 데이터 흐름 설계</LargeTitle>
                <CategoryContent>
                  - Recoil을 이용한 상태 관리 및 데이터 흐름 설계<br />
                  - Axios를 활용한 API 연동 및 데이터 처리<br />
                </CategoryContent>
              </Category>

              {/* 큰 제목 3: 주요 컴포넌트 개발 */}
              <Category>
                <LargeTitle>주요 컴포넌트 개발</LargeTitle>
                <CategoryContent>
                  - QnA: 사용자 질문과 답변을 관리하고, 관리자 페이지에서 리스트를 조회할 수 있는 페이지<br />
                  - PostDetail: 게시글의 상세 내용을 표시하고, 댓글 및 대댓글 좋아요, 조회수 등을 볼 수 있는 페이지<br />
                  - FarmInfo: 기간, 분류, 품목, 품종, 지역을 선택해 소매가와 도매가를 검색하며 가격과 그래프를 직관적으로 확인할 수 있는 페이지<br />
                  - Graph: 가격 데이터를 시각적으로 보여주는 그래프 (Recharts 활용)<br />
                  - Signup: 사용자 회원가입 페이지<br />
                  - UserInfo: 사용자 정보 조회 및 수정 페이지 (로컬 스토리지 연동)<br />
                  - Login: 사용자 인증 페이지<br />
                  - Header: 페이지 최상단에 위치하며 메뉴 및 로그인, 회원가입, 회원수정 등 주요 기능을 제공하는 영역<br />
                  - Footer: 페이지 최하단에 위치하며 주요 정보와 링크를 제공하는 영역<br />
                </CategoryContent>
              </Category>

              {/* 큰 제목 4:  기능 개발 */}
              <Category>
                <LargeTitle>기능 개발</LargeTitle>
                <CategoryContent>
                  - 게시판의 공지사항은 "공지"로 표시, 일반 사용자가 작성한 글은 번호(1번부터)로 표시하는 기능 구현<br />
                  - 게시판에서 **페이지네이션** 기능 구현 (다중 페이지 간 데이터 표시 및 전환)<br />
                  - 댓글 및 대댓글 추가, 삭제, 수정, 좋아요, 조회수 기능 구현<br />
                  - QnA 관리자 페이지 로그인시 문의 리스트 GET 요청을 활용한 데이터 표시 기능 구현 <br />
                  - QnA 페이지 접근 시 로그인 여부를 확인하고, 미로그인 상태에서는 로그인 페이지로 리다이렉트 기능 구현<br />
                  - 아이디 및 비밀번호 찾기를 위한 API 요청 코드 구현<br />
                  - 로그인 및 회원가입 API 요청 코드 구현 및 데이터 처리<br />
                  - 로그인 성공 시, 로그인/회원가입 버튼이 회원수정/로그아웃 버튼으로 변경되는 기능 구현<br />
                  - 로그인 성공 시, 환영 메시지와 사용자 닉네임 표시 기능 구현<br />
                  - 회원수정 페이지에서 GET 요청으로 사용자 정보를 가져오고, 비밀번호 확인을 통해 수정 모드 활성화<br />
                  - 회원정보 수정 후, PUT 요청을 통해 변경 사항을 저장<br />
                  - datepicker 라이브러리를 이용한 사용자 날짜 선택 기능 구현<br />
                  - KAMIS OpenAPI 데이터(품목, 품종)를 매핑하여 사용자 선택 옵션 제공<br />
                  - POST 요청으로 도매가 및 소매가 검색 기능 구현<br />
                  - 검색 결과를 화면에 출력하고, Recharts 라이브러리를 이용하여 데이터 시각화<br />
                  - 가격 데이터를 기반으로 도매가 및 소매가 변동 그래프 표시<br />
                </CategoryContent>
              </Category>
            </SectionContent>
          </ProjectDescription>
        </SectionContentWrapper>



        {/* 주요 기능 */}
        <SectionContentWrapper $isVisible={visibleSection === "features"}>
          <ProjectDescription>
            <FeatureContent>
              {features.map((feature, index) => (
                <FeatureItem
                  as="li"
                  key={index}
                  onClick={() => handleFeatureClick(feature, index)}
                >
                  {feature.title}
                </FeatureItem>

              ))}
            </FeatureContent>
          </ProjectDescription>

        </SectionContentWrapper>

        <Modal
          ref={modalContentRef}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={currentFeature?.title || ""}
          videoSrc={currentFeature?.videoSrc || ""}
          description={currentFeature?.description || ""}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < features.length - 1}
          currentIndex={currentIndex}
        />


        {/* 개인 성장 및 학습 */}
        <SectionContentWrapper $isVisible={visibleSection === "learning"}>
          <ProjectDescription>
            <SectionContent>
              팀 프로젝트에서 프론트엔드 팀원 간 색상 조율이 어려웠던 경험이 있었습니다.<br />
              이 문제를 해결하기 위해 백엔드 팀원과 함께 의견을 수렴하여 색상을 정하는 방식으로 합의를 했고,
              이러한 방식을 통해 팀원들 간 갈등 없이 협력적으로 문제를 해결할 수 있었습니다.

              또한, 컴포넌트 개발을 논의할 때 다른 프론트엔드 팀원이 더 자신 있는 부분을 맡도록 조율하며,
              협업 과정에서 서로의 강점을 살리고 효율적으로 업무를 분담할 수 있었습니다. <br />
              협업심과 책임감이 강한 팀원들과 함께 일하며 팀 프로젝트를 성공적으로 마칠 수 있었고,
              저 스스로도 한층 더 성장할 수 있었습니다. 이번 경험을 통해 팀원과의 의사소통과 협업의 중요성을 다시 한번 깨달았고,

              프로젝트를 진행하며 React의 Hook 사용 방법, 구조를 나누는 방식,
              그리고 컴포넌트를 재사용하는 것의 중요성을 깊이 이해하게 되었습니다.<br />

              개인적으로 아쉬웠던 점은, 첫 프로젝트였던 만큼 오류가 발생했을 때
              이를 어떻게 해결했는지를 체계적으로 기록하지 못했다는 점입니다.
              앞으로는 오류 발생 원인과 해결 과정을 문서화하여,
              유사한 문제가 발생했을 때 참고할 수 있도록 학습 습관을 개선하고자 합니다.
              이러한 노력을 통해 더 나은 개발자로 성장해 나가겠습니다.
            </SectionContent>
          </ProjectDescription>
        </SectionContentWrapper>

        {/* 사용기술 */}
        <SectionContentWrapper $isVisible={visibleSection === "technologies"}>
          <ProjectDescription>
            <SectionContent>

              {/* 큰 제목 1 :프론트엔드 */}
              <Category>
                <TitleWrapper>
                  <LargeTitle>프론트엔드</LargeTitle>
                  <IconGrid>
                    <IconItem data-title="React">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    </IconItem>
                  </IconGrid>
                </TitleWrapper>
                <CategoryContent>
                  <TechDescription>
                    <strong>- React :</strong> 컴포넌트 기반 아키텍처를 통해 사용자 인터페이스를 설계하며,
                    재사용성과 유지보수성을 효율적으로 관리하고, 상태 관리를 활용해 사용자와의 상호작용을 보다 동적이고 직관적으로 처리하기 위해 사용되었습니다.
                  </TechDescription>


                </CategoryContent>

              </Category>

              {/* 큰 제목 2: 라이브러리 */}
              <Category>
                <TitleWrapper>
                  <LargeTitle>라이브러리</LargeTitle>
                  <IconGrid>
                    <IconItem data-title="Axios">
                      <img src={`${process.env.PUBLIC_URL}/axios.svg`} alt="Axios" />
                    </IconItem>

                    <IconItem data-title="Recoil">
                      <img src="https://recoiljs.org/img/logo.svg" alt="Recoil" />
                    </IconItem>
                    <IconItem data-title="React-RouterDOM">
                      <img src={`${process.env.PUBLIC_URL}/react-router.svg`} alt="React-Router" />
                    </IconItem>
                    <IconItem data-title="React-Icons">
                      <img src={`${process.env.PUBLIC_URL}/react-icons.png`} alt="React-Icons" />
                    </IconItem>
                    <IconItem type="date-picker" data-title="Date-Picker">
                      <img src={`${process.env.PUBLIC_URL}/datepicker.png`} alt="Date-Picker" />
                    </IconItem>
                    <IconItem type="recharts" data-title="Recharts">
                      <img src={`${process.env.PUBLIC_URL}/graph.png`} alt="Recharts" />
                    </IconItem>
                  </IconGrid>
                </TitleWrapper>
                <CategoryContent>
                  <TechDescription>
                    <strong>- Axios</strong>: API 통신을 통해 데이터를 주고받으며, 서버와의 비동기 데이터 교환을 간단하고 효율적으로 처리하기 위해 사용되었습니다.<br />
                    <strong>- Recoil</strong>: React 애플리케이션에서 복잡한 상태를 효율적으로 관리하고, 컴포넌트 간 데이터를 원활히 공유하기 위해 사용되었습니다.<br />
                    <strong>- React-Router-DOM</strong>: SPA(Single Page Application)에서 URL 경로에 따라 컴포넌트를 동적으로 렌더링하여 빠르고 매끄러운 페이지 전환을 구현하기 위해 사용되었습니다.<br />
                    <strong>- React-Icons</strong>: 아이콘을 사용하여 UI 디자인의 가독성과 시각적 요소를 강화하기 위해 사용되었습니다.<br />
                    <strong>- Date-Picker</strong>: 사용자로부터 날짜를 직관적으로 입력받을 수 있는 캘린더 UI를 제공하여 입력의 편리성과 정확성을 높이기 위해 사용되었습니다.<br />
                    <strong>- Recharts</strong>: 데이터를 시각적으로 표현하고, 그래프와 차트를 통해 사용자에게 유용한 인사이트를 제공하기 위해 사용되었습니다.
                  </TechDescription>


                </CategoryContent>
              </Category >

              {/* 큰 제목 3: 백엔드 */}
              <Category>
                <TitleWrapper>
                  <LargeTitle>백엔드</LargeTitle>
                  <IconGrid>
                    {/* Spring Boot */}
                    <IconItem type="spring-boot" data-title="Spring Boot">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                        alt="Spring Boot"
                      />
                    </IconItem>
                  </IconGrid>
                </TitleWrapper>
                <CategoryContent>
                  <TechDescription>
                    <strong>- Spring Boot</strong>: 요청 및 응답 데이터의 흐름을 확인하는 데 사용되었습니다.
                    프로젝트에서 직접적인 백엔드 로직을 작성하지는 않았으며, API의 작동 상태와 데이터를 검증하는 용도로 활용되었습니다.
                  </TechDescription>
                </CategoryContent>
              </Category>


              {/* 큰 제목 4:  데이터베이스 */}
              <Category>
                <TitleWrapper>
                  <LargeTitle>데이터베이스</LargeTitle>
                  <IconGrid>
                    {/* MySQL */}
                    <IconItem type="mysql" data-title="MySQL">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                        alt="MySQL"
                      />
                    </IconItem>
                  </IconGrid>
                </TitleWrapper>
                <CategoryContent>
                  <TechDescription>
                    <strong>- MySQL</strong>: 프론트엔드에서 데이터를 저장한 후, 저장된 데이터가 올바르게 처리되고 저장되는지 확인하는 용도로 사용되었습니다.
                    직접적인 데이터베이스 로직 작성은 없었으며, 데이터 저장 및 조회 상태를 검증하기 위해 활용되었습니다.
                  </TechDescription>
                </CategoryContent>
              </Category>


              {/* 큰 제목 4:  툴 */}
              <Category>
                <TitleWrapper>
                  <LargeTitle>Tools</LargeTitle>
                  <IconGrid>
                    {/* VSCode */}
                    <IconItem type="vscode" data-title="Visual Studio Code">
                      <img
                        src="https://code.visualstudio.com/assets/favicon.ico"
                        alt="Visual Studio Code"
                      />
                    </IconItem>
                    {/* Postman */}
                    <IconItem type="postman" data-title="Postman">
                      <img
                        src={`${process.env.PUBLIC_URL}/postman.png`}
                        alt="Postman"
                      />
                    </IconItem>
                  </IconGrid>
                </TitleWrapper>
                <CategoryContent>
                  <TechDescription>
                    <strong>- Visual Studio Code</strong>: 개발 전반에 걸쳐 가장 많이 사용된 도구로, 프로젝트 코드를 작성하고 디버깅하며, 다양한 확장 프로그램을 통해 작업 효율성을 높이는 데 사용되었습니다.
                    특히 React 개발 환경에서 실시간 코드 미리보기와 오류 탐지에 유용하게 활용되었습니다.<br />
                    <strong>-Postman</strong>: OpenAPI 요청을 보내 응답 데이터를 확인하였고,
                    이를 통해 API의 요청 및 응답 구조를 이해하고, 데이터 통신이 올바르게 이루어지는지 검증하는 데 활용되었습니다.
                  </TechDescription>
                </CategoryContent>
              </Category>

            </SectionContent >
          </ProjectDescription >
        </SectionContentWrapper >

        {/* 예제 아이디 */}
        < SectionContentWrapper $isVisible={visibleSection === "login"}>
          <ProjectDescription>
            <SectionContent>
              <Center>
                - 관리자 아이디 : master <br />
                - 관리자 비밀번호 : skdishd0107! <br />
                - 사용자 아이디 : ansans <br />
                - 사용자 비밀번호 : ansans1! <br />
              </Center>
            </SectionContent>
          </ProjectDescription>
        </SectionContentWrapper >




      </ProjectCard >
    </Section >
  );
};

export default Projects;
