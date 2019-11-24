import * as React from 'react';

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    Copyright (c) 2019 Divyanshu Saini
                </div>
            </div>
        </footer>
    );
}
