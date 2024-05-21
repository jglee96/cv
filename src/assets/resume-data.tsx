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
      school: "Pohang University of Science and Technology",
      degree: "Master's Degree in Electrical Engineering",
      start: "2018",
      end: "2020",
    },
    {
      school: "Pohang University of Science and Technology",
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
          <li>
            <h3>회사 내부 용도 ERP 개발</h3>
          </li>
          <li>
            <h3>지적도 다운로드 서비스 개발</h3>
          </li>
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
