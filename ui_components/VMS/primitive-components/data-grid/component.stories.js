import { useState, useCallback } from 'react';
import componentDocumentation from './docs.mdx';
import DataGrid from '.';
import ThemeDecorator from '../../storybook-theme-decorator';
import Box from '@locus-labs/vms-box';
import TextInput from '@locus-labs/vms-text-input';
import CircleButton from '@locus-labs/vms-circle-button';

export default {
	title: 'VMS Components/Primitive Components/Data Grid',
	component: DataGrid,
	decorators: [ThemeDecorator],
	parameters: {
		docs: {
			page: componentDocumentation,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/Z1xej3fOaVQePzWcuORNxmWv/VMS-Master-2020?node-id=7170%3A429',
		},
	},
};

export const Default = () => {
	/* A column should either have a name or an id property. If the id is specified, it should be unique. If a column only specifies the name property, it should also be unique. */
	const columns = [
		{
			name: 'rowActions',
			sortable: false, // turn off sorting behavior i.e. clicking colum header to sort rows
			defaultWidth: 75,
			header: 'Links',
			render: function renderActions(rowData) {
				return (
					<>
						<CircleButton
							size="small"
							iconName="edit"
							onClick={() => {
								alert('Name:' + rowData.data.accountName);
							}}
						/>
					</>
				);
			},
		},
		{
			name: 'venueID',
			defaultFlex: 1,
			header: 'Venue Id',
		},
		{
			name: 'accountName',
			defaultFlex: 1,
			header: 'Account Name',
		},
		{
			name: 'displayScreenName',
			defaultFlex: 1,
			header: 'Display Screen Name',
		},
		{
			name: 'dguid',
			defaultFlex: 1,
			header: 'DGUID',
		},
		{
			name: 'accountID',
			defaultFlex: 1,
			header: 'Account ID',
		},
		{
			name: 'lastPublished',
			defaultFlex: 1,
			header: 'Last Published',
		},
		{
			name: 'lastPublishedBy',
			defaultFlex: 1,
			header: 'Last Published By',
		},
	];

	const dataSet = [
		{
			id: 1,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 2,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 3,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 4,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 5,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 6,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 7,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
	];

	return (
		<Box width="1000px">
			<DataGrid
				idProperty="id"
				columns={columns}
				dataSource={dataSet} // to see no results message send empty object
				pagination={true}
				defaultLimit={5}
				columnDefaultWidth={175}
				height="345px"
			/>
		</Box>
	);
};

export const externalFilter = () => {
	const venues = [
		{
			id: 1,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 2,
			venueID: 'YT (yt)',
			accountName: 'Yellow Dog',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 3,
			venueID: 'BB (bb)',
			accountName: 'Blue Bunny',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 4,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 5,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 6,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
		{
			id: 7,
			venueID: 'BHX (bhx)',
			accountName: 'Birmingham Airport Ltd',
			displayScreenName: 'Individual Instance Name',
			dguid: '12343543654',
			accountID: 'A1SZX7XFR1BCC0',
			lastPublished: '11/29/2019, 13:54 CDT',
			lastPublishedBy: 'clindley',
			rowActions: '',
		},
	];

	const [gridRef, setGridRef] = useState(null);
	const [dataSource, setDataSource] = useState(venues);
	const [searchText, setSearchText] = useState('');
	const shouldComponentUpdate = () => true;

	const render = useCallback(
		({ value }) => {
			const lowerSearchText = searchText && searchText.toLowerCase();

			if (!lowerSearchText) {
				return value;
			}

			const str = value + ''; // get string value
			const v = str.toLowerCase(); // our search is case insensitive
			const index = v.indexOf(lowerSearchText);

			if (index === -1) {
				return value;
			}

			return [
				<span key="before">{str.slice(0, index)}</span>,
				<span key="match" style={{ background: 'yellow', fontWeight: 'bold' }}>
					{str.slice(index, index + lowerSearchText.length)}
				</span>,
				<span key="after">{str.slice(index + lowerSearchText.length)}</span>,
			];
		},
		[searchText]
	);

	const onSearchChange = useCallback(
		(value) => {
			const visibleColumns = gridRef.current.visibleColumns;

			const lowerSearchText = value.toLowerCase();
			const newData = venues.filter((p) => {
				return visibleColumns.reduce((acc, col) => {
					const v = (p[col.id] + '').toLowerCase(); // get string value
					return acc || v.indexOf(lowerSearchText) != -1; // make the search case insensitive
				}, false);
			});

			setSearchText(value);
			setDataSource(newData);
		},
		[gridRef]
	);
	/* A column should either have a name or an id property. If the id is specified, it should be unique. If a column only specifies the name property, it should also be unique. */
	const columns = [
		{
			name: 'rowActions',
			sortable: false, // turn off sorting behavior i.e. clicking colum header to sort rows
			defaultWidth: 75,
			header: 'Links',
			render: function renderActions(rowData) {
				return (
					<>
						<CircleButton
							size="small"
							iconName="edit"
							onClick={() => {
								alert('Name:' + rowData.data.accountName);
							}}
						/>
					</>
				);
			},
		},
		{
			name: 'venueID',
			header: 'Venue Id',
			defaultFlex: 1,
			render,
			shouldComponentUpdate,
		},
		{
			name: 'accountName',
			header: 'Account Name',
			defaultFlex: 1,
			render,
			shouldComponentUpdate,
		},
		{
			name: 'displayScreenName',
			header: 'Display Screen Name',
			defaultFlex: 1,
			render,
			shouldComponentUpdate,
		},
		{
			name: 'dguid',
			header: 'DGUID',
			defaultFlex: 1,
			render,
			shouldComponentUpdate,
		},
		{
			name: 'accountID',
			header: 'Account ID',
			defaultFlex: 1,
			render,
			shouldComponentUpdate,
		},
		{
			name: 'lastPublished',
			header: 'Last Published',
			defaultFlex: 1,
			render,
			shouldComponentUpdate,
		},
		{
			name: 'lastPublishedBy',
			header: 'Last Published By',
			defaultFlex: 1,
			render,
			shouldComponentUpdate,
		},
	];

	return (
		<Box width="1000px">
			<TextInput
				value={searchText}
				placeholder={
					'enter letters and words to filter table e.g. "d", "do" and enter "q"'
				}
				onValueChange={(val) => {
					onSearchChange(val);
					setSearchText(val);
				}}
			/>
			<br></br>
			<DataGrid
				onReady={setGridRef}
				idProperty="id"
				columns={columns}
				dataSource={dataSource} // to see no results message send empty object
				pagination={true}
				defaultLimit={5}
				height="345px"
			/>
		</Box>
	);
};
