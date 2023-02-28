import './styles.scss';

type LayoutProps = {
	children: JSX.Element;
};

const Layout = ({children}: LayoutProps) => (
	<div className='app-layout'>
		{children}
	</div>
);

export default Layout;
