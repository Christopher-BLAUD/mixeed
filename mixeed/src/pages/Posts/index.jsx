import { FacebookProvider, Like } from 'react-facebook-sdk';

function Posts() {
    return (
        <div className="pages-info">
            <h2>Page</h2>
            <div className="info-wrapper">
                <h3>Les informations de la page</h3>
                <div className="info-container">
                    <span>Description : </span>
                    <p></p>
                </div>
                <div className="info-container">
                    <span>Adresse email : </span>
                    <p></p>
                </div>
                <div className="info-container">
                    <span>Site web :</span>
                    <p></p>
                </div>
            </div>
            <FacebookProvider appId="1104707190350723">
                <Like
                    href="http://www.facebook.com"
                    colorScheme="dark"
                    showFaces
                    share
                />
            </FacebookProvider>
        </div>
    );
}

export default Posts;
