import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container content">
            <div className="row">
                <div className="col-lg-12">
                    <h1>News Application</h1>
                    <h3>Your Source For Daily News</h3>
                    <hr />
                    <Link to="/posts">
                        <button className="btn btn-dark btn-lg">Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;