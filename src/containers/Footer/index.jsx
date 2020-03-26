import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from './footer.module.css'
import file from './file.pdf'

const Footer = ({ items }) => {
  return (
    <footer className={cx(styles.footer)}>
      <nav className={styles.links}>
        {items?.map(item => (
          <li key={item.key}>
            <Link className={styles.link} to={item.to}>
              {item.title}
            </Link>
          </li>
        ))}
      </nav>
      <div style={{ textAlign: 'end' }}>
        <span className={styles.social}>
          <a
            href="https://www.facebook.com/garavhona"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              shape-rendering="geometricPrecision"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/garavhona/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              shape-rendering="geometricPrecision"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>
        </span>

        <p className={styles.copyright}>Гаравхона © 2020</p>
        <a
          href={file}
          className={cx(styles.link, styles.file)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', textDecorationStyle: 'dotted' }}
        >
          Закон о ломбардах
        </a>
      </div>
    </footer>
  )
}

export { Footer }
