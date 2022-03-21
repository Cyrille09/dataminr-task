import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import classnames from 'classnames';
import styles from './page.module.scss';

interface LayoutProps {
  title?: string;
  className?: string;
  content?: string;
  href?: string;
  children: React.ReactNode;
}

export function Layout({
  title = '',
  className = '',
  content = '',
  href = '',
  children,
}: LayoutProps) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title key="title">{title ? `${title}` : 'DataMinr'}</title>
          <meta name="description" content={content ? content : 'DataMinr'} />
          <link rel="canonical" href={href ? href : '/'} />
        </Helmet>
      </HelmetProvider>
      <div className={classnames(styles.layout, 'container')}>
        <div className="row">
          <div className="col-12">
            <main className={classnames(styles.page, className)}>
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
