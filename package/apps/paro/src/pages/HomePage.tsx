import styled from 'styled-components';

const HomeContainer = styled.div`
    text-align: center;
    padding: 2rem 0;
`;

const Hero = styled.div`
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
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
    color: #ff6b6b;
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
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
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
                <HeroTitle>Paro에 오신 것을 환영합니다</HeroTitle>
                <HeroSubtitle>강력하고 효율적인 데이터 관리 솔루션을 제공하는 React 애플리케이션</HeroSubtitle>
                <CTAButton>시작하기</CTAButton>
            </Hero>

            <Features>
                <FeatureCard>
                    <FeatureIcon>📊</FeatureIcon>
                    <FeatureTitle>데이터 시각화</FeatureTitle>
                    <FeatureDescription>
                        복잡한 데이터를 직관적이고 이해하기 쉬운 차트와 그래프로 표현합니다.
                    </FeatureDescription>
                </FeatureCard>

                <FeatureCard>
                    <FeatureIcon>🔒</FeatureIcon>
                    <FeatureTitle>보안 중심</FeatureTitle>
                    <FeatureDescription>최고 수준의 보안을 제공하여 데이터의 안전성을 보장합니다.</FeatureDescription>
                </FeatureCard>

                <FeatureCard>
                    <FeatureIcon>⚡</FeatureIcon>
                    <FeatureTitle>고성능</FeatureTitle>
                    <FeatureDescription>
                        대용량 데이터도 빠르게 처리할 수 있는 최적화된 성능을 제공합니다.
                    </FeatureDescription>
                </FeatureCard>
            </Features>
        </HomeContainer>
    );
};

export default HomePage;
