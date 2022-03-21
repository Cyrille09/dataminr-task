import React from 'react';
import { useField } from 'formik';
import classnames from 'classnames';

import styles from './fields.module.scss';

interface SelectProps {
  name?: any;
  id?: string;
  required?: string | null;
  type?: 'submit' | 'reset' | 'button';
  onChange?: () => void;
  disabled?: boolean;
  label?: string | null;
  className?: string | null;
  option?: any;
  options?: any;
  placeholder?: string;
}

function Option({ option }: SelectProps) {
  return (
    <option value={option.value} disabled={option.disabled}>
      {option.label}
    </option>
  );
}
function Options({ options }: SelectProps) {
  return options.map((option: any, index: any) => {
    if (option.options) {
      return (
        <optgroup label={option.label} key={index}>
          {option.options.map((subOption: any) => (
            <Option option={subOption} key={subOption.value} />
          ))}
        </optgroup>
      );
    } else {
      return <Option option={option} key={option.value} />;
    }
  });
}

export function Select({
  name,
  id,
  placeholder = 'Please select:',
  options,
  disabled,
  option,
  onChange,
  className = null,
}: SelectProps) {
  const [field, meta] = useField(name);
  const isInvalid = meta.error && meta.touched;

  return (
    <div className={classnames(styles.field, className)}>
      <select
        {...field}
        id={id || name}
        onChange={(event) => {
          // Call the formik onChange handler first!
          field.onChange(event);
          // Call custom onChange after
          if (onChange) {
            onChange();
          }
        }}
        className={classnames(
          styles.input,
          styles.select,
          isInvalid && styles.invalid
        )}
        disabled={disabled}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {option}
        <Options options={options} />
      </select>
      {isInvalid && <p className={styles.error}>{meta.error}</p>}
    </div>
  );
}
