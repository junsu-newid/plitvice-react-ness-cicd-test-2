import { Outlet } from 'react-router';
import { withSession } from '@/libs/auth.server.ts';

export const loader = withSession(async ({ userEncryptKey, isNEWID }: { userEncryptKey: string; isNEWID: boolean }) => {
    return { userEncryptKey, isNEWID };
});
export type RootLoaderData = typeof loader;

const Index = () => {
    return <Outlet />;
};
export default Index;
