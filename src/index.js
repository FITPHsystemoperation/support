import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Note extends React.Component {
	render() {
		return (
			<div className="post-it">
				<div className="tape tape1"></div>
				<div className="tape tape2"></div>
				<p></p>
				<p>Updates as of : <strong>March 28, 2019</strong></p>
				<p></p>
				<p>- Monitoring for the month of April.</p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
			</div>
		);
	}
}

class Link extends React.Component {
	render(){
		if(this.props.name === 'Kakunin Monitoring')
		{
			return (
				<a href={this.props.href}>
					{this.props.label}
				</a>
			);
		}
		else
		{
			return (
				<a
					href={this.props.href} 
					target="_blank"
					rel="noopener noreferrer"
				>
					{this.props.label}
				</a>
			);
		}
	}
}

class Section extends React.Component {
	renderLink(name, link) {
		const links = [];
		let i = 0;
			for(const key in link){
				links.push(<Link href={link[key]} name={name} label={key} key={i} />);
				i++;
			}
		return links;
	}

	render() {
		return (
			<section id={this.props.value}>
				<div className="title">{this.props.value}</div>
				<div className="content">{this.renderLink(this.props.value, this.props.links)}</div>
				{this.props.others}
			</section>
		);
	}
}
class Main extends React.Component {
	renderSection(content){
		return content.map((section, index) => <Section value={section.title} links={section.links} others={section.others} key={index}/>);
	}

	render() {
		return (
			<main>
				<div id="Home" className="blank">
					<Note />
				</div>
				{this.renderSection(this.props.content)}
				<div className="blank"></div>
			</main>
		);
	}
}

class BackGround extends React.Component {
	render(){
		return (
			<div className="background"></div>
		)
	}
}

class NavLink extends React.Component {
	render() {
		return (
			<div className="nav-link"
				onClick={this.props.onClick}
			>
			{this.props.value}
			</div>
		);
	}
}

class NavBar extends React.Component {
	navigate(target){
		const nav = document.querySelector('.nav');
		const targetDom = document.getElementById(target);
		window.scrollTo(0, targetDom.offsetTop - nav.offsetHeight);
	}

	renderNavLink(content){
		return content.map((section, index) => {
			return <NavLink value={section.nav} onClick={() => this.navigate(section.title)} key={index} />
		})
	}

	render() {
		return (
			<nav className="nav">
				<NavLink value="Home" onClick={() => this.navigate("Home")} />
				{this.renderNavLink(sections)}
			</nav>
		)
	}
}

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="title">Training Department</div>
				<div className="sub-title">Projects and Links</div>
				<div className="button">
					<input type="button"
						id="start"
						value="Get Started"
						onClick={() => {
							const nav = document.querySelector('.nav');
							const targetDom = document.getElementById(sections[0].title);
							window.scrollTo(0, targetDom.offsetTop - nav.offsetHeight);
						}}
					/>
				</div>
			</div>
		);
	}
}

class HomePage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<BackGround />
				<Main content={sections} />
				<Header />
				<NavBar />
			</React.Fragment>
		)
	}
}
 
const sections = [
	{
		title: "Revision Monitoring",
		nav: "Revision",
		links: {
			// "Plan Monitoring (August 2018)": "https://docs.google.com/spreadsheets/d/1f4CM19eSHN_OdDZY39z4HAi1b_Ib4sfIP3aVderSdTM/edit#gid=925288811",
			// "Mistake Monitoring (August 2018)":"https://docs.google.com/spreadsheets/d/10ZE2AkGJCynve6tog7xT8NkGqFI-ZF36TbaA8EO89yw/edit#gid=0",
			"Plan Monitoring v2.0 (September)":"https://docs.google.com/spreadsheets/d/1EeV-O9JyWU_l0LW5g0onSShgqolUA6ecxbkS7GvDcyw/edit#gid=818716465",
			"Plan Monitoring v2.1 (October)":"https://docs.google.com/spreadsheets/d/1quD2imwF8rqBQUzq6-m8lrqKBnPz1WRk5uzez7mwZFw/edit#gid=472071419",
			"Plan Monitoring v2.2 (November)":"https://docs.google.com/spreadsheets/d/1cdXoLbqUIzCjVEjcnhuEuX5EHR5ZwH6rJDFXvTGOKU4/edit#gid=472071419",
			"Plan Monitoring v2.3 (December)":"https://docs.google.com/spreadsheets/d/1XZZKyuTz3GOxdhfFxONMudkbBcZ_I60H64eFBxoN7Fk/edit#gid=472071419",
			"Plan Monitoring v2.4 (January)":"https://docs.google.com/spreadsheets/d/1Ntb_fC6MTIFEGDHn34155DZ-CvPEnfF3YOop3Ksf74w/edit#gid=472071419",
			"Plan Monitoring v2.5 (February)":"https://docs.google.com/spreadsheets/d/11fHrpA_TRSrkQD-oLbjKhpfAwsDYT3Noez0moGj8k1A/edit#gid=472071419",
			"Plan Monitoring v2.6 (March)":"https://docs.google.com/spreadsheets/d/1ljDDYuuIIR1Qe_LgxZb_kQdakh2bb9RXxXLcF1qO9rg/edit#gid=472071419",
			"Plan Monitoring v2.7 (April)":"https://docs.google.com/spreadsheets/d/1sekmFNzUk3jrNho9X8mq6CZGd7QpjdwTKaV4ToyA0Qg/edit#gid=472071419",
			"Productivity & Quality Report":"https://docs.google.com/spreadsheets/d/1ZkU9-HDHKubtWJlStzilFwa-C-RDmr4-1sgm0CpCbnk/edit#gid=1537691498",
		},
		others: ""
	},
	// {
	// 	title: "Manual",
	// 	nav: "Manual",
	// 	links: {
	// 		"Check List":"../misc/pdf/checklist10.01.2018.pdf",
	// 		"Checking Manual":"../misc/pdf/manual_for_checking10.01.2018.pdf",
	// 		"Basic Detailing":"../misc/pdf/dp.pdf",
	// 		"Basic Electrical Plan":"../misc/pdf/ep.pdf",
	// 		"DP & EP (Updated)":"../misc/pdf/dpep10.02.2018.pdf",
	// 		"Storage Plan (Actie)":"../misc/pdf/sp.pdf",
	// 	},
	// 	others: ""
	// },
	// {
	// 	title: "Report",
	// 	nav: "Report",
	// 	links: {
	// 		"Monthly Comparison":"https://docs.google.com/spreadsheets/d/1S0FXjVacFKHxqwcVHWoMKkSI9NckSquD0DjNQzzNNMg/edit#gid=1015423851",
	// 	},
	// 	others: ""
	// },
	{
		title: "Kakunin Monitoring",
		nav: "Kakunin",
		links: {
			// "Mistake Encoding":"https://goo.gl/forms/X8lNbWjhq7LFVmnt1",
			"Plan Monitoring v1.0 (November)":"https://docs.google.com/spreadsheets/d/1y0UgFlbfm9rC2HB0RVjUnd3MRWHMQpaVdlbDuCliXfI/edit#gid=472071419",
			"Plan Monitoring v1.1 (December)":"https://docs.google.com/spreadsheets/d/1Wu_m2HQ1NtJgRTUuUafH_BuLoCsI1SRQFum0UK4NRPM/edit#gid=472071419",
			"Plan Monitoring v1.2 (January)":"https://docs.google.com/spreadsheets/d/1PBUkvAkA0hXdPnVHT1K4_GYX-_-famzt7wndcHHQhGU/edit#gid=472071419",
			"Plan Monitoring v1.3 (February)":"https://docs.google.com/spreadsheets/d/1LCBO8MiuKP0zAYSxgCCuRXbCCykpwn6oOMPSeug71zk/edit#gid=472071419",
			"Plan Monitoring v1.4 (March)":"https://docs.google.com/spreadsheets/d/1P6LuxuZxax4vLdUXD_hTT1GJNrx14RJu5J0lrCm-Moo/edit#gid=472071419",
			"Plan Monitoring v1.5 (April)":"https://docs.google.com/spreadsheets/d/1WacjDirJdlitrKSngJsUmB1ZdYyPSUd8xtLpk4TkKPc/edit#gid=472071419",
		},
		others: ""
	},
	{
		title: "Structural Monitoring",
		nav: "Structural",
		links: {
			// "Mistake Encoding":"https://goo.gl/forms/X8lNbWjhq7LFVmnt1",
			"Plan Monitoring v1.0 (December)":"https://docs.google.com/spreadsheets/d/18Hr9KuifQq0uh2B79asETe6yF9kjuP7lpwPc-Yvbgjs/edit#gid=853151862",
			"Plan Monitoring v1.1 (January)":"https://docs.google.com/spreadsheets/d/1Yb_zHXG6PCB8tyv_uZ3CYEFsBO4M8u3AlZ0cm0iHFhs/edit#gid=853151862",
			"Plan Monitoring v1.2 (February)":"https://docs.google.com/spreadsheets/d/1zjy-lZfTpTeRzmezqqvhthe5O4c8cTtWnd5Ogj3Mu0I/edit#gid=472071419",
			"Plan Monitoring v1.3 (March)":"https://docs.google.com/spreadsheets/d/1ZHNNmgZT6IPqk3edlMyjvroG135rX8rY5ggbYhzFw1I/edit#gid=472071419",
			"Plan Monitoring v1.4 (April)":"https://docs.google.com/spreadsheets/d/1IvXrIqxajvQRDmOHRy30fKM3L2a8aatNA719EVIe4Mc/edit#gid=472071419",
		},
		others: ""
	},
	{
		title: "Additional Links",
		nav: "Additional",
		links: {
			"Locker Distribution":"https://docs.google.com/spreadsheets/d/1w7wMkxT1gcVw0-9QjzYr08ugKwAKBaJK953Ul-JCXSs/edit#gid=547271994",
			"Spread Sheet (Project)":"https://docs.google.com/spreadsheets/d/1hD1sYnf_btSktRM8SiYJStvzM5hsmdZHoROt4tSWCOU/edit?ts=584e3927#gid=464436514",
			"Spread Sheet (JW Convertion)":"https://docs.google.com/spreadsheets/d/1jKAao-2QcKtGUz5ZBXxoAusP0Ulcsj9hn1R91EBcPtk/edit#gid=1563213429",
			"Gmail":"https://mail.google.com/mail/u/1/#inbox",
			"Google Translate":"https://translate.google.com/",
			"Data Bank":"https://www.databank-solution.net/",
			"Fire Storage":"http://firestorage.jp/",
		},
		others: <div className="note">*Your suggested links and shortcuts will be here...</div>
	}
]

ReactDOM.render(<HomePage />, document.getElementById('root'));

const nav = document.querySelector('.nav');
const navY = nav.offsetTop;
function fixNavBar(){
	const scrolled = window.scrollY;
	scrolled >= navY ? nav.classList.add('fixed') : nav.classList.remove('fixed');
}
document.addEventListener('scroll', fixNavBar);
