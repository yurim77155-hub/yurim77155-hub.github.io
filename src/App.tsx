import { useEffect, useState } from 'react'

type Project = {
  id: string
  no: string
  title: string
  kicker: string
  summary: string
  tags: string[]
  meta: { label: string; value: string }[]
  highlights: { value: string; label: string }[]
}

const projects: Project[] = [
  {
    id: 'camon',
    no: '01',
    title: 'CAM.ON',
    kicker: 'Requirements & Standardization',
    summary:
      '6인 팀의 요구사항 구조와 AI 코딩 에이전트 협업 기준을 정리하고, 사용자 데이터로 게임 정책을 개선했습니다.',
    tags: ['Service Planning', 'Requirements', 'PM', 'User Testing'],
    meta: [
      { label: 'Role', value: 'Team Lead · Planning / PM' },
      { label: 'Team', value: '6 members' },
      { label: 'Period', value: '2026.07 — 08 · 5 weeks' },
      { label: 'Award', value: 'SSAFY 대전 1반 1등' },
    ],
    highlights: [
      { value: '76 → 87%', label: '완주율' },
      { value: '21 → 17%', label: '이탈율' },
      { value: '93%', label: '상대 얼굴이 재미에 영향' },
    ],
  },
  {
    id: 'micon',
    no: '02',
    title: 'MICON',
    kicker: 'System Design & Validation',
    summary:
      '음색·음역 기반 추천 시스템의 구조를 설계하고, 모델 선택과 추천 정책을 실험 데이터로 검증했습니다.',
    tags: ['System Design', 'Python', 'FastAPI', 'Experiment'],
    meta: [
      { label: 'Role', value: 'Recommendation · Server · Validation' },
      { label: 'Team', value: '6 members' },
      { label: 'Period', value: '2026.08 — 09' },
      { label: 'Data', value: '374 songs' },
    ],
    highlights: [
      { value: '26 / 26', label: '저·고음 분리 확인' },
      { value: 'ρ 0.49', label: '음높이차 ↔ 거리 상관' },
      { value: '500×', label: '라벨 무작위 대조' },
    ],
  },
  {
    id: 'bidangil',
    no: '03',
    title: '비단길',
    kicker: 'End-to-End Service',
    summary:
      '수출 지식이 없는 소상공인의 업무 흐름을 구조화하고, AI 기능부터 대시보드·배포까지 2인 팀으로 구현했습니다.',
    tags: ['Service Flow', 'Full Stack', 'RAG', 'Deployment'],
    meta: [
      { label: 'Role', value: 'Planning + Full Stack' },
      { label: 'Team', value: '2 members' },
      { label: 'Period', value: '2026.05 — 06 · 6 weeks' },
      { label: 'Award', value: 'SSAFY 대전 5반 2등' },
    ],
    highlights: [
      { value: '5-step', label: '수출 체크리스트' },
      { value: '2-stage', label: 'HS prefix + vector search' },
      { value: '100%', label: '배포 담당' },
    ],
  },
  {
    id: 'nubi',
    no: '04',
    title: '누비',
    kicker: 'AI Product Decision',
    summary:
      '초등학생 눈높이 해설을 위한 LLM 후보를 동일 조건으로 비교하고, 모델 선택 근거를 지표와 문서로 남겼습니다.',
    tags: ['AI Planning', 'LLM Evaluation', 'RAG', 'Documentation'],
    meta: [
      { label: 'Role', value: 'Planning · LLM evaluation' },
      { label: 'Team', value: '7 members' },
      { label: 'Context', value: 'SSAFY × Kakao Tech Bootcamp Hackathon' },
      { label: 'Decision', value: 'GPT-4o-mini selected' },
    ],
    highlights: [
      { value: '7명', label: '공통 지표 평가' },
      { value: '2단계', label: '저학년 / 고학년 출력 분기' },
      { value: '4축', label: '품질·제어·비용·안정성 비교' },
    ],
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card" href={`#${project.id}`}>
      <div className="project-card-top">
        <span className="project-no">{project.no}</span>
        <span className="project-arrow"><Arrow /></span>
      </div>
      <p className="eyebrow">{project.kicker}</p>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <div className="tags">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </a>
  )
}

function MetricRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="metrics">
      {items.map((item) => (
        <div className="metric" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
        <a className="wordmark" href="#top">JI YURIM</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:yurim77155@gmail.com">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-index">PORTFOLIO / 2026</div>
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Service Analyst · Technical Planner</p>
              <h1>
                문제를 정의하고,<br />
                시스템으로 구체화하고,<br />
                <em>데이터로 검증합니다.</em>
              </h1>
            </div>
            <div className="hero-side">
              <p>
                요구사항을 문서와 정책으로 구조화하고, 개발자가 구현할 수 있는 시스템 흐름으로
                연결합니다. 구현 후에는 사용자와 실험 데이터로 의사결정을 검증합니다.
              </p>
              <div className="hero-chips">
                <span>Requirements</span>
                <span>System Design</span>
                <span>AI</span>
                <span>Data Validation</span>
              </div>
              <a className="text-link" href="#work">Selected work <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="section selected-work" id="work">
          <div className="section-head">
            <p className="eyebrow">Selected Work</p>
            <p className="section-note">기획 문서가 실제 시스템과 운영 결과로 이어진 사례를 중심으로 정리했습니다.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
          </div>
        </section>

        <section className="case section" id="camon">
          <CaseHeader project={projects[0]} />
          <div className="case-grid two">
            <div>
              <p className="eyebrow">Challenge</p>
              <h2>여섯 명과 여섯 개의 AI 에이전트가 같은 기준으로 일하게 만들기.</h2>
            </div>
            <div className="body-copy">
              <p>
                팀원마다 AI 코딩 에이전트를 사용하면서 이슈 형식, 담당자, 예상 시간이 달라졌고
                백로그 정리 비용이 커졌습니다. 요구사항 명세 ID를 Jira Story와 1:1로 연결하고,
                개발 전 Epic 구조를 확정했습니다.
              </p>
              <p>
                개요·아키텍처·브랜치 규칙·에이전트용 이슈 작성 규칙은 AGENTS.md 한 문서로 통합해
                팀과 에이전트의 작업 기준을 맞췄습니다.
              </p>
            </div>
          </div>

          <div className="flow-panel">
            <div className="flow-step">
              <span>01</span><strong>Requirement ID</strong><small>요구사항 명세</small>
            </div>
            <div className="flow-line" />
            <div className="flow-step">
              <span>02</span><strong>Jira Story</strong><small>1:1 대응</small>
            </div>
            <div className="flow-line" />
            <div className="flow-step">
              <span>03</span><strong>Epic</strong><small>개발 전 구조 확정</small>
            </div>
            <div className="flow-line" />
            <div className="flow-step accent">
              <span>04</span><strong>AGENTS.md</strong><small>단일 작업 기준</small>
            </div>
          </div>

          <div className="case-grid two validation-block">
            <div>
              <p className="eyebrow">Validation → Iteration</p>
              <h2>기획 가설을 사용자 데이터로 검증하고 정책을 바꿨습니다.</h2>
            </div>
            <div className="body-copy">
              <p>
                완주율·이탈 위치·플레이 시간을 수집하도록 설계하고 Metabase로 추적했습니다.
                1차 테스트에서 물건 가져오기 게임 이탈이 집중된 원인을 분해한 뒤 제한시간,
                인식 로직, 제시어 수를 각각 조정했습니다.
              </p>
            </div>
          </div>
          <MetricRow items={projects[0].highlights} />
          <div className="decision-strip">
            <span>제한시간 20초 → 40초</span>
            <span>첫 정답 후 10초 유예</span>
            <span>손 우선 인식 로직</span>
            <span>제시어 94 → 226개</span>
          </div>
        </section>

        <section className="case section" id="micon">
          <CaseHeader project={projects[1]} />
          <div className="case-grid two">
            <div>
              <p className="eyebrow">System Architecture</p>
              <h2>무거운 추론은 한 번, 추천은 저장된 벡터 계산으로.</h2>
            </div>
            <div className="body-copy">
              <p>
                Android에서는 YIN 기반 음역 측정과 실시간 채점을 수행하고, Spring Boot는 세션과
                임베딩·추천 결과를 관리합니다. FastAPI 추천 서버는 보컬 분리와 두 모델 임베딩,
                음색 점수, 음역·키 적합도를 계산합니다.
              </p>
            </div>
          </div>

          <div className="architecture">
            <ArchBox title="Android" desc="Kotlin · Compose · YIN pitch detection" />
            <ArchArrow />
            <ArchBox title="Spring Boot" desc="Session · vector · recommendation state" />
            <ArchArrow />
            <ArchBox title="FastAPI" desc="ECAPA · Singer-BYOL · key fit" accent />
            <div className="arch-split">
              <ArchBox title="MySQL" desc="songs · artists · vectors" small />
              <ArchBox title="S3 / Index" desc="stems · 374-song embeddings" small />
            </div>
          </div>

          <div className="decision-list">
            <Decision no="01" title="곡 전체 평균 → 4초 구간 매칭">
              음색이 고정이라는 전제를 직접 검증했습니다. 13곡 × 2모델에서 저·고음 평균점 거리를
              확인하고 라벨을 500회 섞어 대조한 뒤, 곡 평균과 양방향 구간 매칭을 50:50으로 결합했습니다.
            </Decision>
            <Decision no="02" title="모델 교체 → 두 모델 병행">
              청음 테스트 결과 우세 모델이 명확하지 않아 하나를 정답처럼 선택하지 않았습니다.
              곡 추천은 ECAPA 80 : BYOL 20, 닮은 가수는 50 : 50의 고정 비중으로 운영했습니다.
            </Decision>
            <Decision no="03" title="음역 점수 → 통과 조건">
              최고·최저음 두 숫자 대신 음정별 체류시간 히스토그램을 사용하고, 안정 음역 커버리지 기준을
              넘지 못한 곡은 순위를 낮추는 대신 후보에서 제외했습니다.
            </Decision>
          </div>
          <MetricRow items={projects[1].highlights} />
        </section>

        <section className="case section" id="bidangil">
          <CaseHeader project={projects[2]} />
          <div className="case-grid two">
            <div>
              <p className="eyebrow">Service Flow</p>
              <h2>사용자의 수출 준비 업무를 하나의 흐름으로 만들었습니다.</h2>
            </div>
            <div className="body-copy">
              <p>
                수출 지식이 없는 소상공인이 제품을 등록하면 HS 코드 후보를 확인하고, 국가별 가이드와
                반려 사례를 본 뒤 5단계 체크리스트로 준비를 이어가도록 서비스 흐름을 설계했습니다.
              </p>
            </div>
          </div>

          <div className="journey">
            {['제품 등록', 'HS 코드 추천', '규제·반려 가이드', '5단계 체크리스트', '트렌드 대시보드'].map((x, i) => (
              <div className="journey-step" key={x}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <strong>{x}</strong>
              </div>
            ))}
          </div>

          <div className="decision-list compact">
            <Decision no="01" title="로컬 LLM → OpenAI API">
              동일 프롬프트로 형식 준수, 응답 속도, 과제 수행, 배포 가능성을 비교했습니다.
              제출 2주 전 단일 프로바이더로 통일해 체크리스트 자동 생성과 배포 안정성을 확보했습니다.
            </Decision>
            <Decision no="02" title="단일 벡터 검색 → 2단계 검색">
              다른 품목의 반려 사례가 섞이는 문제를 HS 코드 prefix 1차 필터와 벡터 검색으로 분리했습니다.
              검색 설계를 바꿔 품목이 일치하는 사례만 리포트에 노출했습니다.
            </Decision>
          </div>
          <MetricRow items={projects[2].highlights} />
        </section>

        <section className="case section compact-case" id="nubi">
          <CaseHeader project={projects[3]} />
          <div className="case-grid two">
            <div>
              <p className="eyebrow">AI Product Decision</p>
              <h2>모델 이름이 아니라 같은 조건의 결과를 비교했습니다.</h2>
            </div>
            <div className="body-copy">
              <p>
                GPT와 CLOVA에 동일 프롬프트와 동일 RAG 문서를 적용하고, 팀원 7명이 공통 점수표로
                평가했습니다. 한국어 품질, 아동 응답 제어, RAG 생태계, 비용, API 안정성을 비교해
                GPT-4o-mini를 선택했습니다.
              </p>
              <p>
                출력 정책도 저학년과 고학년으로 분기해 말투, 문장 길이, 역사 개념 설명 수준을 다르게 설계했습니다.
              </p>
            </div>
          </div>
          <MetricRow items={projects[3].highlights} />
        </section>

        <section className="section about" id="about">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <p className="section-note">Planning that can talk to engineering.</p>
          </div>

          <div className="about-grid">
            <div className="about-intro">
              <h2>기획과 구현 사이의 번역 비용을 줄이는 사람.</h2>
              <p>
                요구사항을 기능 정책과 시스템 흐름으로 구체화하고, 구현 제약을 이해한 상태에서
                이해관계자와 개발자가 같은 그림을 보게 만드는 일을 좋아합니다.
              </p>
            </div>
            <div className="capabilities">
              <Capability title="Planning" items={['Requirements Definition', 'Jira Epic / Story', 'User Testing', 'Figma']} />
              <Capability title="Engineering" items={['Python / FastAPI', 'Java / Spring', 'React / Vue', 'REST API']} />
              <Capability title="Data" items={['SQL', 'Metabase', 'Experiment Design', 'Validation']} />
              <Capability title="AI Workflow" items={['Claude Code', 'Codex', 'RAG', 'LLM Evaluation']} />
            </div>
          </div>

          <div className="credentials">
            <div><span>Education</span><strong>한국외대 러시아학과 · AI & Language 이중전공</strong></div>
            <div><span>Training</span><strong>삼성청년 SW·AI 아카데미 15기 · Java</strong></div>
            <div><span>Certification</span><strong>정보처리기사 · ADsP</strong></div>
          </div>
        </section>

        <section className="contact section">
          <p className="eyebrow">Contact</p>
          <h2>요구사항을 시스템 언어로 바꾸는<br />Service Analyst를 지향합니다.</h2>
          <a className="contact-mail" href="mailto:yurim77155@gmail.com">
            yurim77155@gmail.com <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <span>© 2026 JI YURIM</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

function CaseHeader({ project }: { project: Project }) {
  return (
    <>
      <div className="case-title-row">
        <div>
          <p className="eyebrow">{project.no} / {project.kicker}</p>
          <h2 className="case-name">{project.title}</h2>
          <p className="case-summary">{project.summary}</p>
        </div>
        <div className="case-tags tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
      <div className="meta-grid">
        {project.meta.map((item) => (
          <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>
        ))}
      </div>
    </>
  )
}

function ArchBox({ title, desc, accent = false, small = false }: { title: string; desc: string; accent?: boolean; small?: boolean }) {
  return (
    <div className={`arch-box ${accent ? 'accent' : ''} ${small ? 'small' : ''}`}>
      <strong>{title}</strong><span>{desc}</span>
    </div>
  )
}

function ArchArrow() {
  return <div className="arch-arrow" aria-hidden="true">↓</div>
}

function Decision({ no, title, children }: { no: string; title: string; children: React.ReactNode }) {
  return (
    <article className="decision">
      <span className="decision-no">{no}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}

function Capability({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="capability">
      <h3>{title}</h3>
      <p>{items.join(' · ')}</p>
    </div>
  )
}

export default App
