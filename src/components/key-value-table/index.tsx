import React from 'react';

import styles from './key-value-table.module.scss';

interface SelectProps {
  name?: any;
  id?: string | null;
  required?: string | null;
  type?: 'submit' | 'reset' | 'button' | 'checkbox';
  onChange?: () => void;
  disabled?: boolean;
  label?: string | null;
  className?: string | null;
  classNameValue?: string | null;
  title?: any;
  actions?: any;
  placeholder?: string;
  children: React.ReactNode;
}

export function KeyValueTable({ title, children }: SelectProps) {
  return (
    <div>
      <p className={styles.title}>{title}</p>

      <div> {children}</div>
    </div>
  );
}

export function Row({
  label,
  children,
  className = '',
  classNameValue = '',
}: SelectProps) {
  return (
    <div className={`${styles.row} ${className} card`}>
      {label && <div className={`${styles.label} ${className}`}>{label}</div>}
      <div className={`${styles.value} ${classNameValue}`}>{children}</div>
    </div>
  );
}
