import * as React from 'react';

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
    return (
        <footer className="page-footer grey darken-1">
            <div className="footer-copyright grey darken-2">
                <div className="container">
                    Copyright (c) 2019 Divyanshu Saini
                </div>
            </div>
        </footer>
    );
}
