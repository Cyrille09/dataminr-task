import React from 'react';
import classnames from 'classnames';
import { Field, useField } from 'formik';
import styles from './fields.module.scss';

interface ToggleProps {
  name: string;
  id?: string | null | any;
  type: 'checkbox';
  onChange?: () => void;
  className?: string | null;
}

export function Toggle({
  className = null,
  type,
  id,
  name,
  onChange,
}: ToggleProps) {
  const [field] = useField(name);
  return (
    <div className={classnames(styles.field, className)}>
      <label className={classnames(styles.inputToggles, styles.switch)}>
        <Field
          type={type}
          id={id}
          name={name}
          onChange={(event: any) => {
            // Call the formik onChange handler first!
            field.onChange(event);
            // Call custom onChange after
            if (onChange) {
              onChange();
            }
          }}
        />
        <span className={classnames(styles.slider, styles.round)}></span>
      </label>
    </div>
  );
}
