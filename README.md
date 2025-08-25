# Plitvice React 모노레포

TypeScript, React 19, React Router 7, Vite를 활용한 모노레포 구조의 웹 애플리케이션입니다.

## 🚀 프로젝트 구조

```
plitvice-react/
├── package/                 # 패키지 디렉토리
│   ├── apps/               # 애플리케이션들
│   │   ├── ness/           # Ness 앱 (포트 3001)
│   │   └── paro/           # Paro 앱 (포트 3002)
│   ├── ui/                 # 공통 UI 컴포넌트
│   └── util/               # 공통 유틸리티
├── shared/                  # 공유 리소스
└── web/                     # 웹 관련 설정
```

## 🛠️ 기술 스택

- **React 19** - 최신 React 기능과 성능 최적화
- **TypeScript** - 타입 안전성과 개발 생산성 향상
- **Vite** - 빠른 개발 서버와 빌드 도구
- **React Router 7** - 클라이언트 사이드 라우팅
- **Styled Components** - CSS-in-JS를 통한 컴포넌트 기반 스타일링
- **Jotai** - 가벼운 상태 관리 라이브러리
- **pnpm** - 빠르고 효율적인 패키지 매니저

## 📦 설치 및 실행

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

#### 개별 앱 실행

```bash
# Ness 앱 실행 (포트 3001)
pnpm run ness:dev

# Paro 앱 실행 (포트 3002)
pnpm run paro:dev
```

#### 모든 앱 동시 실행

```bash
pnpm run dev:all
```

### 3. 빌드

#### 개별 앱 빌드

```bash
# Ness 앱 빌드
pnpm run ness:build

# Paro 앱 빌드
pnpm run paro:build
```

#### 모든 앱 동시 빌드

```bash
pnpm run build:all
```

## 🌐 접속 주소

- **Ness 앱**: http://localhost:3001/ness/
- **Paro 앱**: http://localhost:3002/paro/

## 📱 앱별 특징

### Ness 앱

- 현대적이고 직관적인 사용자 경험
- 홈페이지와 소개 페이지 제공
- 보라색 계열의 그라데이션 디자인
- React 19의 최신 기능 활용

### Paro 앱

- 강력하고 효율적인 데이터 관리 솔루션
- 홈페이지와 대시보드 페이지 제공
- 빨간색 계열의 그라데이션 디자인
- 데이터 시각화 및 모니터링 기능

## 🚀 배포

### AWS EC2 배포 준비

각 앱은 다음과 같은 경로로 배포됩니다:

- **Ness**: `xxx.xxx.xxx.xxx:8002/ness/`
- **Paro**: `xxx.xxx.xxx.xxx:8003/paro/`

### 배포 스크립트

AWS EC2에서 실행할 수 있는 배포 스크립트가 제공됩니다:

```bash
./deploy.sh
```

## 🛠️ 개발 가이드

### 새 앱 추가하기

1. `package/apps/` 디렉토리에 새 앱 폴더 생성
2. 필요한 파일들 생성 (package.json, tsconfig.json, vite.config.ts 등)
3. 루트 package.json에 스크립트 추가
4. pnpm-workspace.yaml에 패키지 경로 추가 (필요시)

### 공통 컴포넌트 사용

`package/ui/` 디렉토리의 공통 컴포넌트를 각 앱에서 import하여 사용할 수 있습니다.

## 📝 스크립트 명령어

| 명령어                | 설명                   |
| --------------------- | ---------------------- |
| `pnpm run ness:dev`   | Ness 앱 개발 서버 실행 |
| `pnpm run paro:dev`   | Paro 앱 개발 서버 실행 |
| `pnpm run dev:all`    | 모든 앱 동시 실행      |
| `pnpm run ness:build` | Ness 앱 빌드           |
| `pnpm run paro:build` | Paro 앱 빌드           |
| `pnpm run build:all`  | 모든 앱 동시 빌드      |
| `pnpm run lint`       | 전체 프로젝트 린팅     |
| `pnpm run format`     | 전체 프로젝트 포맷팅   |

## 🔧 설정 파일

- **tsconfig.base.json**: 기본 TypeScript 설정
- **eslint.config.js**: ESLint 설정
- **.prettierrc**: Prettier 설정
- **pnpm-workspace.yaml**: pnpm 워크스페이스 설정

## 📚 추가 리소스

- [React 19 문서](https://react.dev/)
- [Vite 문서](https://vitejs.dev/)
- [React Router 문서](https://reactrouter.com/)
- [Styled Components 문서](https://styled-components.com/)
- [Jotai 문서](https://jotai.org/)

## 🤝 기여하기

1. 이슈를 생성하거나 기존 이슈를 확인
2. 새로운 브랜치 생성
3. 변경사항 커밋
4. Pull Request 생성

## �� 라이선스

ISC License
