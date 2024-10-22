import {
  IconArticle,
  IconBrandCodepen,
  IconBrandGithub,
} from "@tabler/icons-react";

export const RESUME_DATA = {
  name: "이종건",
  summary: (
    <>
      <h3>저는 자신을 의심하는 개발자입니다.</h3>
      <span>
        제가 알고 있는 것, 제가 작성한 코드를 항상 의심합니다. 이게 맞는
        방법인지, 더 좋은 방법은 없는지 의심합니다. 이러한 과정에서 다른
        팀원들의 의견을 구하기도 하며 좋은 코드와 팀워크를 얻을 수 있습니다.
      </span>
      <h3>저는 오류의 진원지를 찾아내는 개발자입니다.</h3>
      <span>
        저는 오류의 원인은 <b>'얕은 원인'</b>과 <b>'깊은 원인'</b>으로
        나눠진다고 생각합니다. 표면상의 원인이 얕은 원인이고, 진원지가 깊은
        원인입니다. 깊은 원인을 해결해야만 또다른 문제가 발생하는 것을 예방하고
        더 좋은 코드를 만들 수 있습니다.
      </span>
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
      {
        name: "Dev Blog",
        url: "https://zakklee.dev",
        icon: IconArticle,
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
      title: <>Software Engineer - Frontend</>,
      skills: [
        "Javascript",
        "Typescript",
        "SCSS",
        "CSS Moduels",
        "React",
        "Recoil",
        "Zustand",
        "Tanstack Query",
        "React Router",
        "Nx",
        "PWA",
        "Service Worker",
        "Gitlab CI/CD",
        "aws",
        "serverless",
        "naver maps",
        "geojson",
        "wkt",
        "dxf",
      ],
      start: "2022.10",
      end: "current",
      description: (
        <ul>
          <li>
            <h3>BUILDIT 플랫폼 개발</h3>
          </li>
          <h4>기존 코드 유지 보수</h4>
          <span>
            제가 입사하기 전인 6년 전부터 시작된 프로젝트에서 React 클래스
            컴포넌트의 단점들이 드러났습니다. 그래서 새로운 기획이 생길 때마다
            함수형 컴포넌트로의 전환과 함께 상태 관리를 위해 zustand를 도입하고,
            패키지 버전 업데이트를 통해 유지보수를 수행했습니다. 그리고
            react-router와 tanstack-query 등의 패키지도 업데이트하여 프로젝트의
            효율성을 높였습니다. <br /> 이러한 리펙토링 작업을 하면서 사용자는
            기능면에서 차이점을 느끼지 못하도록 테스트를 하였습니다. 그리고
            똑같은 실수를 반복하지 않도록 팀원과 계속해서 올바른 방향에 대해
            논의하였습니다.
          </span>
          <h4>구조 설계</h4>
          <span>
            이전까지는 설계 없이 필요한 기능에 따라 데이터를 조건문으로 처리하는
            방식으로 진행되었습니다. 그 결과, 새로운 기능이 추가될 때마다
            조건문이 계속해서 늘어나는 코드 스멜이 발생했습니다. 이에 대응하여
            최대한 컴포넌트를 분리하고, CSS 재사용과 디자인 패턴을 적용하여 구조
            설계와 개발을 진행했습니다. <br /> 팀원들에게 이를 전파하기 위하여
            사내 문서 작성, readme 작성, 설계 구조 도식화 등을 하였습니다.
          </span>
          <li>
            <h3>회사 내부 용도 ERP 개발</h3>
          </li>
          <h4>기존 ERP를 새로 zero to one 구현</h4>
          <span>
            기존의 오래된 ERP 시스템을 새로 구현하는 프로젝트였습니다. 이전
            시스템은 너무 오래되어서 개발 서버 조차 실행되지 않았습니다. 새로운
            시스템은 antd UI 컴포넌트를 활용하여 개발하였는데, 원하는 동작과
            다른 경우 patch-package를 사용하여 커스터마이징했습니다. <br />
            기존 프로젝트와 똑같은 오류를 범하지 않기 위하여 ESLint, Prettier,
            husky 등을 도입하여 스타일 유지에 노력하였습니다. 또한, api response
            타입을 매번 정의하도록 하여 any 사용을 최소화하였습니다.
          </span>
          <li>
            <h3>연속지적도 다운로드 서비스 개발</h3>
          </li>
          <h4>Monorepo 사용한 서비스 개발</h4>
          <span>
            Nx 도구를 활용하여 단일 레포에서 여러 서비스를 효율적으로 관리하며,
            서비스 간의 코드 공유 및 재사용을 극대화하여 개발 생산성을
            향상시켰습니다. 현재 개발 중인 서비스와 예정된 서비스의 확장성을
            고려하여 기능을 모듈화하고, 변경된 코드만 빌드하고 배포하는 affected
            CI/CD 파이프라인을 구축하여 빌드 시간 단축 및 리소스 최적화를
            달성했습니다. 또한, 각 페이지를 독립적인 라이브러리로 구성하여 코드
            스플리팅을 적용함으로써 초기 로딩 속도를 개선하고 사용자 경험을
            향상시켰습니다. 이를 코드 중복이 크게 감소하고, 유지보수성이
            향상되었으며, 빌드 및 배포 시간, 페이지 로딩 속도 개선 등의 성과를
            이루었습니다.
          </span>
          <h4>네이버 지도 API를 사용하여 사용자 인터렉션 구현</h4>
          <span>
            네이버 지도 API를 사용하여 사용자가 연속지적도 정보를 다운로드 받을
            영역을 선택하는 기능을 구현하였으며, 이를 통해 사용자 인터페이스의
            편의성을 대폭 향상시켰습니다. 그리고 API 타입 정의
            패키지(@types/navermaps) 수정에 참여하여 TypeScript 사용성을
            개선하였으며, API 개발자 포럼에 적극적으로 참여하고 있습니다. <br />
            추가적으로 React에서 네이버 지도 API를 통일된 패턴으로 사용하기 위해
            react-reconciler를 사용하여 @react-three/fiber와 같이 네이버 지도
            API를 React 컴포넌트 형태로 사용할 수 있도록 구현하였습니다.
          </span>
        </ul>
      ),
    },
    {
      company: "Tmax",
      link: "https://www.tmax.co.kr",
      title: <>Software Engineer</>,
      skills: ["Linux", "C/C++", "Python", "React"],
      start: "2020.02",
      end: "2022.10",
      description: (
        <ul>
          <li>
            <h3>ToOffice (리눅스 기반 Office 프로그램) 개발</h3>
          </li>
          <h4>도형의 중첩된 효과 rendering 최적화</h4>
          <span>
            도형에 그림자, 반사, 네온 등의 효과를 중첩해서 적용하여 편집시 성능
            이슈가 있었습니다. 효과 rendering chain에서 중복되는 과정이 많아
            이를 제거하고 재설계하여 처리 시간을 절반 가까이 줄였습니다.
          </span>
          <li>
            <h3>SuperOffice (React 기반 Office 프로그램) 개발</h3>
          </li>
          <h4>SVG에서 지원하지 않는 도형 rendering 기법 개발</h4>
          <span>
            이전 프로젝트에서 Skia를 사용하여 구현했던 기능들이 웹에서는
            네이티브로 구현이 불가능하였습니다. 그래서 SVG, WebGL, electron등을
            연구하여 새로운 구현 방안을 설계하였습니다.
          </span>
          <h4>React Component에서 command 생성</h4>
          <span>
            사용자가 조작하여 value가 바뀌면 command를 생성하여 model을 업데이트
            해야되는 component가 있었습니다. 이 component를 설계하면서
            useState의 비동기적 속성을 처리하는 방법, 상태 관리 등을 실전에서
            경험할 수 있었습니다. 또한 useMemo의 적절한 사용에 대해서도
            고민해보는 작업이었습니다
          </span>
          <li>
            <h3>TmaxGooroom21 (구름 플랫폼 기반 OS) 개발</h3>
          </li>
          <h4>GNOME Shell App window 이슈 분석</h4>
          <span>
            App을 전체화면 상태에서 사용하면 발생하는 이슈가 있었습니다. 초기
            이슈가 하나의 App에 대해서만 등록이 되어 원인이 Display Server,
            Window Manager, App 중에서 어디에 있는지 가늠하기 어려운
            상태였습니다. App의 window 객체부터 시작하여 display server까지
            분석하여 원인을 파악하고 해결할 수 있었습니다.
          </span>
        </ul>
      ),
    },
  ],
  projects: [],
} as const;
