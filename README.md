# JI YURIM — Service Analyst Portfolio

React + Vite + TypeScript 기반 단일 페이지 포트폴리오입니다.

## 로컬에서 확인

```bash
npm install
npm run dev
```

터미널에 표시되는 `http://localhost:5173` 주소를 브라우저에서 엽니다.

## GitHub Pages 배포

1. GitHub에서 새 repository를 생성합니다.
2. 이 폴더의 **내용 전체**를 repository 루트에 업로드합니다.
3. repository의 `Settings → Pages`로 이동합니다.
4. `Build and deployment → Source`에서 **GitHub Actions**를 선택합니다.
5. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드/배포합니다.
6. `Actions` 탭에서 초록색 체크가 뜬 뒤 `Settings → Pages → Visit site`로 접속합니다.

보통 URL은:

- 일반 repository: `https://USERNAME.github.io/REPOSITORY/`
- repository 이름을 정확히 `USERNAME.github.io`로 만든 경우: `https://USERNAME.github.io/`

## 수정 후 반영

`src/App.tsx`와 `src/styles.css`를 수정한 뒤 `main` 브랜치에 push하면 사이트가 자동 재배포됩니다.

방문자는 **현재 배포된 사이트만** 보며, 웹 화면 자체에는 수정 이력이 표시되지 않습니다.
단, public repository를 직접 찾아가면 commit history는 볼 수 있습니다.

## 공개 commit history를 최대한 깔끔하게 유지하고 싶다면

작업은 private repository 또는 로컬 폴더에서 진행하고, 채용 제출용 public repository에는 안정된 버전만 push하는 방식을 권장합니다.
