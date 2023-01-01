import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import useBaseUrl from "@docusaurus/useBaseUrl";

function MainContent() {
  return (
      <div className={styles.content}>
          <div className={styles['content--wrap']}>
              <img
                  className={styles['content--imageLogo']}
                  src={useBaseUrl('/img/themmotcoccafe.svg')}
                  alt="themmococ.cafe logo"
              />
              <div className={styles['content--mt-2']}>
                  <p className={styles['content--title']}>
                      Share a little bit about web programming...
                  </p>
                  <div className={styles['content--links']}>
                      <a href="/docs/js" className="link-secondary">
                          JavaScript
                      </a>
                      <Link to={useBaseUrl('/docs/react')} className="link-primary">
                          ReactJs
                      </Link>
                      <a href="/blog" className="link-secondary">
                          Blog
                      </a>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.main}>
          <MainContent />
      </main>
    </Layout>
  );
}
