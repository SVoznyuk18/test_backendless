import React, {useMemo, lazy, Suspense} from "react";
import loadable from '@loadable/component';
import { Routes, Route, Navigate } from "react-router-dom";
import DynamicLoader from "./components/DynamicLoader";
import Layout from "./components/Layout";
import tabs from '../tabs.json';

const DummyChart = loadable(() => import('./tabs/DummyChart'));
const DummyList = loadable(() => import('./tabs/dummyList'));
const DummyTable = loadable(() => import('./tabs/dummyTable'));
const NotFound = loadable(() => import('./tabs/NotFound'));


const componentMapping = {
  'DummyTable': <DummyTable/>,
  'DummyChart': <DummyChart/>,
  'DummyList': <DummyList/>,
};

const App = () => {

	const sortedTabs = useMemo(() => tabs.sort((a, b) => a.order - b.order), [tabs]);

	return (
		<>
		
			<Routes>
				<Route path="/" element={<Layout tabs={sortedTabs} />}>
					<Route index element={<Navigate to={sortedTabs[0].title} replace={true} />}/>
					
			
						{/* <Route path="dummyTable" element={<DummyTable/>}/>
						<Route path="dummyList" element={<DummyList/>}/>
						<Route path="dummyChart" element={<DummyChart/>}/>
						<Route path="*" element={<NotFound/>}/> */}

					{tabs && tabs.map(tab => (
						<Route key={tab.id} path={tab.id} element={componentMapping[tab.component]}/>
					))}
					{/* <Route path="dummyList" render={() =>  {
						const DummyChart = loadable(() => import('./tabs/DummyChart'));
						return <DummyChart/>
					}}/> */}
					<Route path="*" element={<NotFound/>}/>
					{/* {tabs && tabs.map(tab => (
						<Route key={tab.id} path={tab.id} element={dynamic(tab.path)}/>
					))} */}
				</Route>
			</Routes>
	
		</>
	)
}

export default App