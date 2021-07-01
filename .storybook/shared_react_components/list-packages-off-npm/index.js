import ReactDataGrid from '@inovua/reactdatagrid-community';
import moment from 'moment';
import { useAsync } from 'react-async-hook';

const columns = [
	{
		name: 'name',
		header: 'Package Name',
		defaultFlex: 2,
		render: (value) => {
			return (
				<a target="_blank" href={value.data.link}>
					{value.value}
				</a>
			);
		},
	},
	{ name: 'version', header: 'Latest Version', defaultFlex: 1 },
	{ name: 'date', header: 'Last Updated', defaultFlex: 3 },
];

// grab data from npms.io
const fetchNPMpkg = async (url) => (await fetch(url)).json();

const ListPackagesOffNPM = (props) => {
	// async hook
	const asyncHero = useAsync(fetchNPMpkg, [props.url]);

	return (
		<div style={{ fontSize: '14px' }}>
			{asyncHero.loading && <div>Loading...</div>}
			{asyncHero.error && <div>Error: {asyncHero.error.message}</div>}
			{asyncHero.result && (
				<>
					<ReactDataGrid
						idProperty="id"
						defaultSortInfo={{ name: 'name', dir: 1 }}
						defaultFilterValue={[
							{ name: 'name', operator: 'contains', type: 'string', value: '' },
						]}
						columns={columns}
						dataSource={asyncHero.result.results.map((value, index) => {
							return {
								id: index,
								name: value.package.name,
								version: value.package.version,
								date:
									moment(value.package.date).fromNow() +
									' or ' +
									moment(value.package.date).format('M/D/YYYY [at] h:mm:ss a'),
								link: value.package.links.npm,
							};
						})}
						scrollProps={{ autoHide: true, alwayShowTrack: false }}
						style={{ height: '2000px' }}
					/>
				</>
			)}
		</div>
	);
};

export default ListPackagesOffNPM;
