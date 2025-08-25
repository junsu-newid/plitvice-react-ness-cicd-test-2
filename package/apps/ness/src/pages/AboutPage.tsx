import styled from 'styled-components';

const AboutContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
`;

const AboutHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
`;

const AboutSubtitle = styled.p`
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
`;

const ContentSection = styled.section`
    margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #667eea;
    padding-bottom: 0.5rem;
`;

const SectionContent = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    line-height: 1.8;
    color: #555;
`;

const TechStack = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
`;

const TechItem = styled.div`
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid #667eea;
`;

const TechName = styled.div`
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
`;

const TechDescription = styled.div`
    font-size: 0.9rem;
    color: #666;
`;

const AboutPage: React.FC = () => {
    return (
        <AboutContainer>
            <AboutHeader>
                <AboutTitle>Ness 프로젝트 소개</AboutTitle>
                <AboutSubtitle>현대적인 웹 기술을 활용하여 사용자 친화적인 애플리케이션을 구축합니다</AboutSubtitle>
            </AboutHeader>

            <ContentSection>
                <SectionTitle>프로젝트 개요</SectionTitle>
                <SectionContent>
                    <p>
                        Ness는 Plitvice 모노레포의 일부로, React 19와 최신 웹 기술을 활용하여 구축된 현대적인 웹
                        애플리케이션입니다. 사용자 경험을 최우선으로 하며, 성능과 접근성을 모두 고려한 설계를
                        지향합니다.
                    </p>
                </SectionContent>
            </ContentSection>

            <ContentSection>
                <SectionTitle>기술 스택</SectionTitle>
                <SectionContent>
                    <p>다음과 같은 최신 기술들을 활용하여 개발되었습니다:</p>
                    <TechStack>
                        <TechItem>
                            <TechName>React 19</TechName>
                            <TechDescription>최신 React 기능과 성능 최적화</TechDescription>
                        </TechItem>
                        <TechItem>
                            <TechName>TypeScript</TechName>
                            <TechDescription>타입 안전성과 개발 생산성 향상</TechDescription>
                        </TechItem>
                        <TechItem>
                            <TechName>Vite</TechName>
                            <TechDescription>빠른 개발 서버와 빌드 도구</TechDescription>
                        </TechItem>
                        <TechItem>
                            <TechName>Styled Components</TechName>
                            <TechDescription>CSS-in-JS를 통한 컴포넌트 기반 스타일링</TechDescription>
                        </TechItem>
                        <TechItem>
                            <TechName>React Router</TechName>
                            <TechDescription>클라이언트 사이드 라우팅</TechDescription>
                        </TechItem>
                        <TechItem>
                            <TechName>Jotai</TechName>
                            <TechDescription>가벼운 상태 관리 라이브러리</TechDescription>
                        </TechItem>
                    </TechStack>
                </SectionContent>
            </ContentSection>

            <ContentSection>
                <SectionTitle>주요 특징</SectionTitle>
                <SectionContent>
                    <ul>
                        <li>
                            <strong>모노레포 구조:</strong> 여러 프로젝트를 효율적으로 관리할 수 있는 구조
                        </li>
                        <li>
                            <strong>타입 안전성:</strong> TypeScript를 통한 컴파일 타임 에러 방지
                        </li>
                        <li>
                            <strong>빠른 개발:</strong> Vite의 HMR을 통한 빠른 개발 경험
                        </li>
                        <li>
                            <strong>반응형 디자인:</strong> 모든 디바이스에서 최적화된 사용자 경험
                        </li>
                        <li>
                            <strong>모던 아키텍처:</strong> 최신 React 패턴과 베스트 프랙티스 적용
                        </li>
                    </ul>
                </SectionContent>
            </ContentSection>

            <ContentSection>
                <SectionTitle>개발 철학</SectionTitle>
                <SectionContent>
                    <p>
                        Ness는 단순히 기능을 구현하는 것을 넘어서, 사용자와 개발자 모두에게 최고의 경험을 제공하는 것을
                        목표로 합니다. 코드의 가독성, 유지보수성, 그리고 확장성을 중요하게 생각하며, 지속적으로 개선해
                        나가고 있습니다.
                    </p>
                </SectionContent>
            </ContentSection>
        </AboutContainer>
    );
};

export default AboutPage;
