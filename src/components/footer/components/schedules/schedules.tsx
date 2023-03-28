import './styles.scss';

const horary = {
	Segunda: 'Fechado',
	Terça: '10:00 - 19:00',
	Quarta: '10:00 - 19:00',
	Quinta: '10:00 - 19:00',
	Sexta: '10:00 - 19:00',
	Sábado: '9:00 - 16:00',
	Domingo: 'Fechado',
};

const generateSchedule = () => (
	Object.entries(horary).map(v => (
		<p key={v[0]}>{v[0]}:<br/>{v[1]}</p>
	))
);

const Schedules = () => {
	return (
		<div className='footer-schedules'>
			<h3>Horários de funcionamento:</h3>
			<div>
				{generateSchedule()}
			</div>
		</div>
	);
};

export default Schedules;
