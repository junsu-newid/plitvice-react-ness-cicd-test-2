import { Index as Playground } from '@/app/routes/playground/index.tsx';
import type { Route } from '../+types/root';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
    return [{ title: 'NEWID' }, { name: 'description', content: 'Welcome to Playout+' }];
}

function Index() {
    return <Playground />;
}

export default Index;
