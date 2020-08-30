import React, { memo, useState, useRef, useCallback } from 'react';
import { ButtonCss } from '../index.css';
import { ItemContentCss } from './index.css';
import Dropdown, { Item } from '../Dropdown';
import MONTH_NAMES from '../../../constants/monthNames';

const calculateMonths = (monthNames) => {
	const generateMonths = ({ year, start = 0, end = 12 }) => [
		...monthNames.slice(start, end).map((monthName) => ({
			monthName,
			monthIndex: monthNames.indexOf(monthName),
			year
		}))
	];

	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	const months = [
		...generateMonths({ year: currentYear - 1, start: currentMonth }),
		...generateMonths({ year: currentYear }),
		...generateMonths({ year: currentYear + 1, end: currentMonth + 1 })
	];

	return months;
};
const getCurrentMonth = (months) => months[Math.floor(months.length / 2)];
const generateMonthKey = ({ monthIndex, year }) => `${year}-${monthIndex}`;

const Appointments = memo(function Appointments() {
	const MONTHS = useRef(calculateMonths(MONTH_NAMES));
	const [selected, setSelected] = useState(getCurrentMonth(MONTHS.current));

	const [showDropdown, setShowDropdown] = useState(false);
	const toggleDropdown = useCallback(() => setShowDropdown((showDropdown) => !showDropdown), []);
	const closeDropdown = useCallback(() => setShowDropdown(false), []);

	return (
		<>
			<h4>Appointments</h4>
			<ButtonCss type="button" onClick={toggleDropdown}>
				<h3>
					{selected.monthName} {selected.year}
				</h3>
			</ButtonCss>

			<Dropdown active={showDropdown} align="left" onClose={closeDropdown}>
				{MONTHS.current.map((month) => (
					<Item key={generateMonthKey(month)} onClick={() => setSelected(month)}>
						<ItemContentCss>
							<span>{month.monthName}</span> <span>{month.year}</span>
						</ItemContentCss>
					</Item>
				))}
			</Dropdown>
		</>
	);
});

export default Appointments;
