import { IconBrandCodepen, IconBrandGithub } from "@tabler/icons-react";

export const RESUME_DATA = {
  name: "이종건",
  summary: (
    <>
      <h3>저는 자신을 의심하는 개발자입니다.</h3>
      <p>
        제가 알고 있는 것, 제가 작성한 코드를 항상 의심합니다. 이게 맞는
        방법인지, 더 좋은 방법은 없는지 의심합니다. 이러한 과정에서 다른
        팀원들의 의견을 구하기도 하며 좋은 코드와 팀워크를 얻을 수 있습니다.
      </p>
      <h3>저는 오류의 진원지를 찾아내는 개발자입니다.</h3>
      <p>
        저는 오류의 원인은 <b>'얕은 원인'</b>과 <b>'깊은 원인'</b>으로
        나눠진다고 생각합니다. 표면상의 원인이 얕은 원인이고, 진원지가 깊은
        원인입니다. 깊은 원인을 해결해야만 또다른 문제가 발생하는 것을 예방하고
        더 좋은 코드를 만들 수 있습니다.
      </p>
    </>
  ),
  about: "about",
  avatarUrl: "/assets/profile.webp",
  contact: {
    email: "zakklee96@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jglee96",
        icon: IconBrandGithub,
      },
      {
        name: "Codepen",
        url: "https://codepen.io/jglee96",
        icon: IconBrandCodepen,
      },
    ],
  },
  education: [
    {
      school: "Pohang University of Science and Technology (POSTECH)",
      degree: "Master's Degree in Electrical Engineering",
      start: "2018",
      end: "2020",
    },
    {
      school: "Pohang University of Science and Technology (POSTECH)",
      degree: "Bachelor's Degree in Electrical Engineering",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "TENELEVEN",
      link: "https://www.1011.co.kr",
      title: (
        <>
          Software Engineer - Frontend (<b>React</b>)
        </>
      ),
      start: "2022.10",
      end: "current",
      description: (
        <ul>
          <li>
            <h3>BUILDIT 플랫폼 개발</h3>
          </li>
          <h4>기존 코드 유지 보수</h4>
          <p>
            5년 전부터 시작된 프로젝트에서 React 클래스 컴포넌트의 단점들이
            드러났습니다. 그래서 새로운 기획이 생길 때마다 함수형 컴포넌트로의
            전환과 함께 상태 관리를 위해 zustand를 도입하고, 패키지 버전
            업데이트를 통해 유지보수를 수행했습니다. 또한 react-router와
            tanstack-query 등의 패키지도 업데이트하여 프로젝트의 효율성을
            높였습니다.
          </p>
          <h4>구조 설계</h4>
          <p>
            이전 프로젝트는 설계 없이 필요한 기능에 따라 데이터를 조건문으로
            처리하는 방식으로 진행되었습니다. 그 결과, 새로운 기능이 추가될
            때마다 조건문이 계속해서 늘어나는 코드 스멜이 발생했습니다. 이에
            대응하여 최대한 컴포넌트를 분리하고, CSS 재사용과 디자인 패턴을
            적용하여 구조 설계와 개발을 진행했습니다.
          </p>
          <li>
            <h3>회사 내부 용도 ERP 개발</h3>
          </li>
          <h4>기존 ERP를 새로 zero to one 구현</h4>
          <p>
            기존의 오래된 ERP 시스템을 새로 구현하는 프로젝트였습니다. 이전
            시스템은 너무 오래되어서 개발 서버 조차 실행되지 않았습니다. 새로운
            시스템은 antd UI 컴포넌트를 활용하여 개발되었는데, 원하는 동작과
            다른 경우 patch-package를 사용하여 커스터마이징했습니다.
          </p>
          <li>
            <h3>지적도 다운로드 서비스 개발</h3>
          </li>
          <h4>네이버 지도 API를 사용하여 사용자 인터렉션 구현</h4>
          <p>
            지적도 정보를 다운로드 받으려는 사용자가 원하는 영역을 선택하는
            과정을 구현한 것입니다. 이를 위해 네이버 지도 API를 활용하여 지도
            상에서 사용자가 원하는 지역을 선택할 수 있는 기능을 개발했습니다.
          </p>
          <h4>monorepo 도입</h4>
          <p>monorepo 도구 Nx를 사용하여 개발</p>
        </ul>
      ),
    },
    {
      company: "Tmax",
      link: "https://www.tmax.co.kr",
      title: (
        <>
          Software Engineer (<b>Linux</b>, <b>C/C++</b>, <b>React</b>)
        </>
      ),
      start: "2020.02",
      end: "2022.10",
      description: (
        <ul>
          <li>
            <h3>ToOffice (리눅스 기반 Office 프로그램) 개발</h3>
          </li>
          <h4>도형의 중첩된 효과 rendering 최적화</h4>
          <p>
            도형에 그림자, 반사, 네온 등의 효과를 중첩해서 적용하여 편집시 성능
            이슈가 있었습니다. 효과 rendering chain에서 중복되는 과정이 많아
            이를 제거하고 재설계하여 처리 시간을 절반 가까이 줄였습니다.
          </p>
          <li>
            <h3>SuperOffice (React 기반 Office 프로그램) 개발</h3>
          </li>
          <h4>SVG에서 지원하지 않는 도형 rendering 기법 개발</h4>
          <p>
            이전 C++에서 Skia를 사용하여 구현했던 기능들이 웹에서는
            불가능하였습니다. 그러나 SVG, WebGL, electron등을 연구하여 구현
            방안을 설계하였습니다.{" "}
          </p>
          <h4>SVG 관련 오픈소스 참여</h4>
          <p></p>
          <h4>React Component에서 command 생성</h4>
          <p>
            사용자가 조작하여 value가 바뀌면 command를 생성하여 model을 업데이트
            해야되는 component가 있었습니다. 이 component를 설계하면서
            useState의 비동기적 속성을 처리하는 방법, 상태 관리 등을 실전에서
            경험할 수 있었습니다. 또한 useMemo의 적절한 사용에 대해서도
            고민해보는 작업이었습니다
          </p>
          <li>
            <h3>TmaxGooroom21 (구름 플랫폼 기반 OS) 개발</h3>
          </li>
          <h4>GNOME Shell App window 이슈 분석</h4>
          <p>
            App을 전체화면 상태에서 사용하면 발생하는 이슈가 있었습니다. 초기
            이슈가 하나의 App에 대해서만 등록이 되어 원인이 Display Server,
            Window Manager, App 중에서 어디에 있는지 가늠하기 어려운
            상태였습니다. App의 window 객체부터 시작하여 display server까지
            분석하여 원인을 파악하고 해결할 수 있었습니다.
          </p>
        </ul>
      ),
    },
  ],
  skills: [
    "Linux",
    "C/C++",
    "JavaScript",
    "TypeScript",
    "React",
    "PWA",
    "Recoil",
    "Zustand",
    "TanStack Query",
    "React Router",
    "Nx",
  ],
  projects: [],
} as const;
