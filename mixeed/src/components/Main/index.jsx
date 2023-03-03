import Logo from '../../assets/images/logo_sans_ombre.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartSimple,
    faBoxArchive,
    faSquarePlus,
    faContactBook,
} from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from 'react-router-dom';

function Main() {
    return (
        <>
            <header>
                <div className="logo-wrapper">
                    <img
                        src={Logo}
                        alt="logo représentant les lettres C et B"
                    />
                    <span>Mixeed</span>
                </div>
                <nav>
                    <h3>Menu</h3>
                    <ul>
                        <li>
                            <Link to={'/dashboard'}>
                                <FontAwesomeIcon
                                    icon={faChartSimple}
                                    className="nav-icons"
                                />
                                Statistiques
                            </Link>
                        </li>
                        <li>
                            <Link to={'/posts'}>
                                <FontAwesomeIcon
                                    icon={faBoxArchive}
                                    className="nav-icons"
                                />
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link href="#cocou">
                                <FontAwesomeIcon
                                    icon={faContactBook}
                                    className="nav-icons"
                                />
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Main;
