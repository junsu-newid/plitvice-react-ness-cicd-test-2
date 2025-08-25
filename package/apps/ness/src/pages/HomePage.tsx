import styled from 'styled-components';

const HomeContainer = styled.div`
    text-align: center;
    padding: 2rem 0;
`;

const Hero = styled.div`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 4rem 2rem;
    border-radius: 16px;
    margin-bottom: 3rem;
`;

const HeroTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
`;

const HeroSubtitle = styled.p`
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2rem;
`;

const CTAButton = styled.button`
    background: white;
    color: #667eea;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-2px);
    }
`;

const Features = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
`;

const FeatureCard = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
`;

const FeatureIcon = styled.div`
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: white;
    font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #333;
`;

const FeatureDescription = styled.p`
    color: #666;
    line-height: 1.6;
`;

const HomePage: React.FC = () => {
    return (
        <HomeContainer>
            <Hero>
                <HeroTitle>Ness에 오신 것을 환영합니다</HeroTitle>
                <HeroSubtitle>현대적이고 직관적인 사용자 경험을 제공하는 React 애플리케이션</HeroSubtitle>
                <CTAButton>시작하기</CTAButton>
            </Hero>

            <Features>
                <FeatureCard>
                    <FeatureIcon>⚡</FeatureIcon>
                    <FeatureTitle>빠른 성능</FeatureTitle>
                    <FeatureDescription>
                        Vite와 React 19를 활용한 최적화된 빌드로 빠른 로딩 속도를 제공합니다.
                    </FeatureDescription>
                </FeatureCard>

                <FeatureCard>
                    <FeatureIcon>🎨</FeatureIcon>
                    <FeatureTitle>아름다운 디자인</FeatureTitle>
                    <FeatureDescription>
                        Styled Components를 사용한 모던하고 반응형 디자인을 구현했습니다.
                    </FeatureDescription>
                </FeatureCard>

                <FeatureCard>
                    <FeatureIcon>🔄</FeatureIcon>
                    <FeatureTitle>TypeScript 지원</FeatureTitle>
                    <FeatureDescription>
                        완전한 타입 안전성을 제공하여 개발 생산성과 코드 품질을 향상시킵니다.
                    </FeatureDescription>
                </FeatureCard>
            </Features>
        </HomeContainer>
    );
};

export default HomePage;
