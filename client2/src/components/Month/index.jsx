import styles from "./styles.module.css";

const Month = ({ months, filterMonth, setFilterMonth }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterMonth, input.value];
			setFilterMonth(state);
		} else {
			const state = filterMonth.filter((val) => val !== input.value);
			setFilterMonth(state);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Filter By Month</h1>
			<div className={styles.month_container}>
				{months.map((month) => (
					<div className={styles.month} key={month}>
						<input
							className={styles.month_input}
							type="checkbox"
							value={month}
							onChange={onChange}
						/>
						<p className={styles.month_label}>{month}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Month;