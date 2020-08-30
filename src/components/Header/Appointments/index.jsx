import React, { memo, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ButtonCss } from '../index.css';
import { ItemContentCss } from './index.css';
import Dropdown, { Item } from '../Dropdown';
import { calculateMonths, generateMonthKey } from '../../../utils/appointments';
import { updateSelectedMonth } from '../../../store/dispatchers/appointments';

const MONTHS = calculateMonths();

const Appointments = memo(function Appointments() {
	const selectedMonth = useSelector(({ appointments }) => appointments.selectedMonth);

	const [showDropdown, setShowDropdown] = useState(false);
	const toggleDropdown = useCallback(() => setShowDropdown((showDropdown) => !showDropdown), []);
	const closeDropdown = useCallback(() => setShowDropdown(false), []);

	return (
		<>
			<h4>Appointments</h4>
			<ButtonCss type="button" onClick={toggleDropdown}>
				<h3>
					{selectedMonth.monthName} {selectedMonth.year}
				</h3>
			</ButtonCss>

			<Dropdown active={showDropdown} align="left" onClose={closeDropdown}>
				{MONTHS.map((month) => (
					<Item key={generateMonthKey(month)} onClick={() => updateSelectedMonth(month)}>
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
