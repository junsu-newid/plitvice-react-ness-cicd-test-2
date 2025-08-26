import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { TFunction } from 'i18next';
import { SideNavBar } from '@plitvice/ui/components/navigation/SideNavBar.tsx';
import { SideNavSection } from '@plitvice/ui/components/navigation/sideNavBar.types.ts';

export const getRouteFromUrl = (pathname: string, validRoutes: string[]): string => {
    const cleanPath = pathname.split('?')[0].split('#')[0];
    const pathSegments = cleanPath.split('/').filter(Boolean);

    for (const segment of pathSegments) {
        if (validRoutes.includes(segment)) {
            return segment;
        }
    }

    return validRoutes[0] || 'queue-status';
};

const Layout = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const navMapList = useMemo(() => getNavMap(t), [t]);

    const validRoutes = useMemo(() => {
        const routes: string[] = [];
        navMapList.forEach((section) => {
            section.child?.forEach((item) => {
                routes.push(item.path);
            });
        });
        return routes;
    }, [navMapList]);

    const currentRoutePath = getRouteFromUrl(location.pathname, validRoutes);

    return (
        <div className={'relative grid h-full w-full grid-cols-[240px_1fr] justify-start overflow-hidden'}>
            <div className={`h-full overflow-y-auto pb-[48px] pt-[24px]`}>
                <SideNavBar
                    width={0}
                    sectionList={navMapList}
                    onNavigate={navigate}
                    defaultSelected={currentRoutePath}
                />
            </div>
            <main className={'bg-grey-5 border-grey-20 relative h-full w-full overflow-auto border-l'}>
                <Outlet />
            </main>
        </div>
    );
};
export default Layout;

const getNavMap = (t: TFunction): SideNavSection[] => {
    return [
        {
            title: t('nav:operation.title'),
            child: [
                { path: 'queue-status', label: t('nav:operation.queueStatus') },
                { path: 'server-status', label: t('nav:operation.serverStatus') },
                { path: 'preset-list', label: t('nav:operation.presetList') },
            ],
        },
    ];
};
