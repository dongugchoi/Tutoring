import React, {useRef, useEffect} from "react";
import { Timeline, TimelineItem, Date, Description, Section, Title } from "../styles/TimelineStyles";

const timelineData = [
  {
    date: "2018",
    description:
      "IT를 우연히 접하며 기술에 흥미를 느끼기 시작한 해입니다. 컴퓨터공학에 대한 관심이 생기며 개발자의 길로 첫걸음을 내딛었습니다.",
  },
  {
    date: "2019",
    description:
      "학점은행제를 통한 컴퓨터공학 학사 과정 시작. 다양한 IT 기술과 개발 지식을 학습하며 개발자의 꿈을 향해 첫걸음을 내딛었습니다.",
  },
  {
    date: "2020 - 2021",
    description:
      "학점은행제를 목표로 삼아 학사 취득을 위해 열정을 쏟아부은 시기입니다. 컴퓨터공학 전반에 걸친 학습과 과제를 성실히 수행했습니다.",
  },
  {
    date: "2022",
    description:
      "IT 공부를 위한 자금을 마련하기 위해 세무회계 자격증을 취득했습니다. 자금을 모으는 동시에 IT 관련 자격증 공부도 병행하며, IT 분야로 나아가기 위한 기반을 다졌습니다.",
  },
  {
    date: "2023",
    description:
      "모은 자금을 투자하여 IT 학원에 등록해 HTML, CSS, JavaScript 등 웹 개발의 기초를 학습하고, 학원 공부와 동시에 IT 관련 자격증 공부를 병행했습니다. 아르바이트를 통해 생활과 학습을 균형 있게 유지하며, 노력 끝에 IT 관련 자격증을 성공적으로 취득했습니다. 이러한 경험은 시간 관리와 목표 달성 능력을 한층 더 강화하는 계기가 되었습니다.",
  },
  {
    date: "2024",
    description:
      "상반기에는 학원 수업과 과외를 통해 웹 개발의 기초를 다졌고, 하반기에는 국비 지원 과정을 수강하며 프론트엔드(React)와 백엔드(Java, SpringBoot, ORCLE) 기술을 학습하며 풀스택 개발 역량을 확장했습니다. 이 과정에서 공공데이터와 AWS 클라우드를 활용한 프로젝트를 수행하며, 반응형 웹 페이지 구현과 전역 상태 관리 등에서 실질적인 성과를 거두었습니다.",
  },
];

const TimelineDatas = () => {
  const timelineRef = useRef();

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // 뷰포트의 20%가 보이면 트리거
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <Section id="timeLine">
      <Title>Timeline</Title>
    <Timeline $itemCount={timelineData.length}>
      {timelineData.map((item, index) => (
        <TimelineItem
        className="timeline-item"
          key={index}
          $isOdd={index % 2 === 0}
          $delay={index * 2}
        >
          <Date>{item.date}</Date>
          <Description>{item.description}</Description>
        </TimelineItem>
      ))}
    </Timeline>
    </Section>
  );
};

export default TimelineDatas;
