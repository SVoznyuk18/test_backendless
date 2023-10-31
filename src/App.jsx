import React, { useMemo } from "react";
import loadable from '@loadable/component';
import { Routes, Route, Navigate } from "react-router-dom";
import DynamicLoader from "./components/DynamicLoader";
import Layout from "./components/Layout";
import tabs from '../tabs.json';

const DummyChart = loadable(() => import('./tabs/DummyChart'));
const DummyList = loadable(() => import('./tabs/DummyList'));
const DummyTable = loadable(() => import('./tabs/DummyTable'));
const NotFound = loadable(() => import('./tabs/NotFound'));

const componentMapping = {
	'DummyTable': <DummyTable />,
	'DummyChart': <DummyChart />,
	'DummyList': <DummyList />,
};

const App = () => {

	const sortedTabs = useMemo(() => tabs.sort((a, b) => a.order - b.order), [tabs]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout tabs={sortedTabs} />}>
					<Route index element={<Navigate to={sortedTabs[0].id} replace={true} />} />
					{tabs && tabs.map(tab => (
						<Route key={tab.id} path={tab.id} element={componentMapping[tab.component]} />
					))}
					<Route path="*" element={<NotFound />} />
					{/* {tabs && tabs.map(tab => (
						<Route key={tab.id} path={tab.id} element={<DynamicLoader path={tab.path}/>}/>
					))} */}
				</Route>
			</Routes>

		</>
	)
}

export default App