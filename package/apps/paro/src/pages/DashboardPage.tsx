import styled from 'styled-components';

const DashboardContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
`;

const DashboardHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const DashboardTitle = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
`;

const DashboardSubtitle = styled.p`
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
`;

const StatCard = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    border-top: 4px solid #ff6b6b;
`;

const StatValue = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff6b6b;
    margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
    font-size: 1.1rem;
    color: #666;
    font-weight: 500;
`;

const ChartSection = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
`;

const ChartTitle = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ff6b6b;
    padding-bottom: 0.5rem;
`;

const ChartPlaceholder = styled.div`
    background: #f8f9fa;
    border: 2px dashed #dee2e6;
    border-radius: 8px;
    padding: 4rem 2rem;
    text-align: center;
    color: #6c757d;
    font-size: 1.1rem;
`;

const RecentActivity = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ActivityTitle = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ff6b6b;
    padding-bottom: 0.5rem;
`;

const ActivityList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ActivityItem = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #ff6b6b;
`;

const ActivityIcon = styled.div`
    width: 40px;
    height: 40px;
    background: #ff6b6b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 1rem;
    font-size: 1.2rem;
`;

const ActivityContent = styled.div`
    flex: 1;
`;

const ActivityText = styled.div`
    font-weight: 500;
    color: #333;
    margin-bottom: 0.25rem;
`;

const ActivityTime = styled.div`
    font-size: 0.9rem;
    color: #666;
`;

const DashboardPage: React.FC = () => {
    return (
        <DashboardContainer>
            <DashboardHeader>
                <DashboardTitle>Paro 대시보드</DashboardTitle>
                <DashboardSubtitle>실시간 데이터 모니터링과 분석 결과를 한눈에 확인하세요</DashboardSubtitle>
            </DashboardHeader>

            <StatsGrid>
                <StatCard>
                    <StatValue>1,234</StatValue>
                    <StatLabel>총 사용자</StatLabel>
                </StatCard>
                <StatCard>
                    <StatValue>567</StatValue>
                    <StatLabel>활성 세션</StatLabel>
                </StatCard>
                <StatCard>
                    <StatValue>89%</StatValue>
                    <StatLabel>시스템 가동률</StatLabel>
                </StatCard>
                <StatCard>
                    <StatValue>2.3s</StatValue>
                    <StatLabel>평균 응답시간</StatLabel>
                </StatCard>
            </StatsGrid>

            <ChartSection>
                <ChartTitle>사용자 활동 추이</ChartTitle>
                <ChartPlaceholder>
                    📊 차트 컴포넌트가 여기에 표시됩니다
                    <br />
                    <small>실제 구현시 Chart.js, Recharts 등의 라이브러리를 사용할 수 있습니다</small>
                </ChartPlaceholder>
            </ChartSection>

            <RecentActivity>
                <ActivityTitle>최근 활동</ActivityTitle>
                <ActivityList>
                    <ActivityItem>
                        <ActivityIcon>👤</ActivityIcon>
                        <ActivityContent>
                            <ActivityText>새 사용자가 가입했습니다</ActivityText>
                            <ActivityTime>2분 전</ActivityTime>
                        </ActivityContent>
                    </ActivityItem>
                    <ActivityItem>
                        <ActivityIcon>📊</ActivityIcon>
                        <ActivityContent>
                            <ActivityText>데이터 백업이 완료되었습니다</ActivityText>
                            <ActivityTime>15분 전</ActivityTime>
                        </ActivityContent>
                    </ActivityItem>
                    <ActivityItem>
                        <ActivityIcon>🔒</ActivityIcon>
                        <ActivityContent>
                            <ActivityText>보안 업데이트가 적용되었습니다</ActivityText>
                            <ActivityTime>1시간 전</ActivityTime>
                        </ActivityContent>
                    </ActivityItem>
                    <ActivityItem>
                        <ActivityIcon>⚡</ActivityIcon>
                        <ActivityContent>
                            <ActivityText>시스템 성능 최적화가 완료되었습니다</ActivityText>
                            <ActivityTime>3시간 전</ActivityTime>
                        </ActivityContent>
                    </ActivityItem>
                </ActivityList>
            </RecentActivity>
        </DashboardContainer>
    );
};

export default DashboardPage;
